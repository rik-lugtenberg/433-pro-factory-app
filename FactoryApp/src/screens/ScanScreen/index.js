import QRCodeScanner from 'react-native-qrcode-scanner';
import React, {useEffect, useState} from 'react';
import {Text, View, RippleEffect} from 'react-native';
import styles from './styles';
import {test} from '../../helpers/permissionHelper';

function ScanScreen() {
  useEffect(() => {
    (async () => {
      test();
      // await checkPermissionForCamera();
    })();
  }, []);

  const [loading, setLoading] = useState(false);

  const onQrCodeScanned = async event => {
    const {data} = event;

    if (
      !data ||
      typeof data !== 'string' ||
      data.indexOf('_') === data.lastIndexOf('_')
    ) {
      showToast('Invalid QR data format!', 1000);
      return;
    }

    const newSensorName = getSensorName(data);
    const newSensorKey = getSensorKey(data);

    if (connectedSensors.some(e => e.name === newSensorName)) {
      showToast('This sensor is already scanned', 1000);
      return;
    }
    setLoading(true);

    setSensorName(newSensorName);
    setSensorKey(newSensorKey);
    connectToSensor(newSensorName, newSensorKey);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          {/* <RippleEffect style={styles.headerButtons}></RippleEffect> */}
        </View>
      </View>
      {!loading && <QRCodeScanner onRead={onQrCodeScanned} />}
    </View>
  );
}

export default ScanScreen;
