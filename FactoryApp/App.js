import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, LogBox, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import ScanScreen from './src/screens/ScanScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import bleService from './src/services/BleService';

const defaultSensorValues = {
  dbmValue: null,
  battery: null,
  id: null,
  firmware: null,
  modelName: null,
  name: null,
};

export default function App() {
  const [scannedId, setScannedId] = useState(null);
  const [sensor, setSensor] = useState(defaultSensorValues);

  useEffect(() => {
    (async () => {
      await bleService.initialize();
    })();
  }, []);

  const resetSensor = () => {
    setScannedId(null);
    setSensor(defaultSensorValues);
  };

  const getDbmValues = dmbString => {
    const splitArray = dmbString.split(',');
    if (splitArray.length < 3) {
      console.warn('INVALID DMB VALUES');
    }
    return Number.parseInt(splitArray[1].split(':').pop());
  };

  const onScan = async (id, sensorName) => {
    console.log('to scan!', id);

    setScannedId(id);

    let newSensor = {};
    newSensor.id = id;
    newSensor.name = sensorName;
    newSensor.firmware = await bleService.getFirmwareRevision(id);
    newSensor.battery = await bleService.getBatteryLevel(id);
    newSensor.dbmValue = getDbmValues(await bleService.getDebugValue(id));
    newSensor.modelName = await bleService.getModelName(id);
    console.log('is going to set!!!', newSensor);
    setSensor(newSensor);

    // await bleService.onDebugValueChange(id, 'setSensorInfo', val => {
    //   console.log('value in on debug value change', sensor);

    //   sensor.dbmValue = getDbmValues(val);
    //   setSensor({...sensor});
    // });

    // await bleService.onBatteryLevelChange(id, 'setSensorInfo', async val => {
    //   sensor.battery = val;
    //   setSensor(sensor);
    // });

    console.log('Value is scanned');
  };

  console.log('sensor value', sensor);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {scannedId ? (
          <DetailsScreen resetSensor={resetSensor} sensor={sensor} />
        ) : (
          <ScanScreen onScan={onScan} />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
