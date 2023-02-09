import {
  Linking,
  NativeEventEmitter,
  NativeModules,
  Platform,
} from "react-native";
import BleManager from "react-native-ble-manager";
import Permissions, { PERMISSIONS, RESULTS } from "react-native-permissions";

import BleConstants from "../constants/BleConstants";

const BLE_PERMISSIONS = Platform.select({
  android: [
    PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    PERMISSIONS.ANDROID.BLUETOOTH_CONNECT,
    PERMISSIONS.ANDROID.BLUETOOTH_SCAN,
    "android.permission.BLUETOOTH_ADMIN",
    "android.permission.BLUETOOTH",
    "android.permission.FOREGROUND_SERVICE",
  ],
  ios: [PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL],
});

const BLE_DISCOVER_PERIPHERAL_EVENT = "BleManagerDiscoverPeripheral";
const BLE_NOTIFY_EVENT = "BleManagerDidUpdateValueForCharacteristic";
const BLE_CONNECT_EVENT = "BleManagerConnectPeripheral";
const BLE_DISCONNECT_EVENT = "BleManagerDisconnectPeripheral";

// Little-endian
const bytesToNumber = (bytes) => {
  const dataHex = bytes
    .map((b) => b.toString(16).padStart(2, "0"))
    .reverse()
    .join("");

  return parseInt(dataHex, 16);
};

const stringToCharCode = (string) => {
  const array = Array.from(string).map((char) => {
    return char.charCodeAt(0);
  });
  return array;
};

class BleService {
  constructor() {
    this.eventEmitter = new NativeEventEmitter(NativeModules.BleManager);
    this.eventHandlers = new Map();
    this.disconnectSensors = false;
  }

  async initialize() {
    let checkPermissions = await Permissions.checkMultiple(BLE_PERMISSIONS);

    for (const permission in checkPermissions) {
      switch (checkPermissions[permission]) {
        case RESULTS.BLOCKED:
          await Linking.openSettings();
          break;
        case RESULTS.DENIED:
          await Permissions.request(permission);
          break;
      }
    }

    checkPermissions = await Permissions.checkMultiple(BLE_PERMISSIONS);
    if (
      Object.values(checkPermissions).some(
        (p) => p !== RESULTS.GRANTED && p !== RESULTS.UNAVAILABLE
      )
    ) {
      return false;
    }
    await BleManager.start({ showAlert: true });
    return true;
  }

  async connect(id, timeout) {
    if (
      Platform.OS === "ios" &&
      (await BleManager.isPeripheralConnected(id, []))
    ) {
      return;
    }

    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(), timeout ?? 32000);
      BleManager.connect(id)
        .then(() => {
          BleManager.retrieveServices(id)
            .then(() => {
              clearTimeout(timer);
              resolve();
            })
            .catch((e) => {
              console.log("In the catch of BleManager retrieveServices", e);
              clearTimeout(timer);
              reject(e);
            });
        })
        .catch((a) => {
          console.log("In the catch of the blemanager connect", a);
          reject(a);
        });
    });
  }

  async removeListeners(id) {
    this.eventHandlers.forEach((value, key) => {
      if (!key.includes(id)) {
        return;
      }
      value.remove();
      this.eventHandlers.delete(key);
    });
  }

  async disconnect(id) {
    this.eventHandlers.forEach((value, key) => {
      if (!key.includes(id)) {
        return;
      }
    });
    await BleManager.disconnect(id);
    if (Platform.OS !== "ios") {
      const peripheralConnected = await BleManager.isPeripheralConnected(
        id,
        []
      );
      if (peripheralConnected) {
        console.log("in remove peripheral");

        await BleManager.removePeripheral(id);
      }
    }
  }

  async write(id, serviceUUID, characteristicUUID, data) {
    await this.connect(id);
    try {
      if (typeof data === "string" || data instanceof String) {
        data = stringToCharCode(data);
      } else if (!Array.isArray(data)) {
        data = [data];
      }

      await BleManager.write(
        id,
        serviceUUID,
        characteristicUUID,
        data,
        data.length
      );
    } catch (e) {
      throw new Error(e);
    }
  }

  async read(id, serviceUUID, characteristicUUID) {
    await this.connect(id);
    try {
      const value = await BleManager.read(id, serviceUUID, characteristicUUID);
      return value;
    } catch (e) {
      throw new Error(e);
    }
  }

  async notify(id, serviceUUID, characteristicUUID, callbackId, callback) {
    const key = `${characteristicUUID}-${id}-${callbackId}`;

    const remove = () => {
      if (this.eventHandlers.has(key)) {
        this.eventHandlers.get(key).remove();
      }
      this.eventHandlers.delete(key);
    };

    remove();
    this.eventHandlers.set(
      key,
      this.eventEmitter.addListener(BLE_NOTIFY_EVENT, (e) => {
        if (
          e.peripheral.toLowerCase() === id.toLowerCase() &&
          e.characteristic.toLowerCase() === characteristicUUID.toLowerCase() &&
          e.service.toLowerCase() === serviceUUID.toLowerCase()
        ) {
          callback(e.value, remove);
        }
      })
    );

    await this.connect(id);
    await BleManager.startNotification(id, serviceUUID, characteristicUUID);

    return remove;
  }

  pair(sensorName) {
    return new Promise((resolve, reject) => {
      const finished = (success, id) => {
        this.eventEmitter.removeAllListeners(BLE_DISCOVER_PERIPHERAL_EVENT);
        if (success) {
          resolve(id);
        } else {
          reject(id);
        }
      };

      const timer = setTimeout(() => finished(false, ""), 30000);

      this.eventEmitter.addListener(
        BLE_DISCOVER_PERIPHERAL_EVENT,
        ({ id, name }) => {
          if (name !== `${sensorName}`) {
            return;
          }
          clearTimeout(timer);
          BleManager.stopScan()
            .then(() => {
              this.connect(id)
                .then(() => {
                  finished(true, id);
                })
                .catch((e) => {
                  finished(false, id);
                });
            })
            .catch((e) => {
              finished(false, id);
            });
        }
      );
      BleManager.scan([BleConstants.modelData.serviceUUID], 30, false);
    });
  }

  onDisconnect(callback) {
    const listener = this.eventEmitter.addListener(
      BLE_DISCONNECT_EVENT,
      (e) => {
        (async () => {
          await callback(e.peripheral);
        })();
      }
    );
    return listener.remove;
  }

  async getFirmwareRevision(id) {
    const { serviceUUID, characteristicUUID } =
      BleConstants.firmwareVersionData;

    const bytes = await this.read(id, serviceUUID, characteristicUUID);
    return String.fromCharCode(...bytes);
  }
}
const bleService = new BleService();

export default bleService;
