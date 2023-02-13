import QRCodeScanner from 'react-native-qrcode-scanner';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {checkPermissionForCamera} from '../../helpers/permissionHelper';
import bleService from '../../services/BleService';
import {LoadingState} from '../../components/LoadingState';

function ScanScreen(props) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      await checkPermissionForCamera();
    })();
  }, []);

  const getSensorName = data => {
    return `JS_${data.slice(data.indexOf('_') + 1, data.lastIndexOf('_'))}`;
  };

  const getSensorKey = data => {
    const splitArray = data.split('_');
    return splitArray[splitArray.length - 1];
  };

  const onQrCodeScanned = async event => {
    const {data} = event;

    setLoading(true);
    console.log('a');
    try {
      if (
        !data ||
        typeof data !== 'string' ||
        data.indexOf('_') === data.lastIndexOf('_')
      ) {
        return;
      }
      const newSensorName = getSensorName(data);

      const id = await bleService.pair(newSensorName);

      console.log('SCANNED!');

      if (props.onScan) {
        console.log('herrooooo');
        props.onScan(id, newSensorName);
      }
    } catch (e) {
      console.log('IS NOT CONNECTED');
    }
    setLoading(false);
  };

  return (
    <View style={styles.mainContainer}>
      {!loading && (
        <>
          <View style={styles.headerWrapper}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Scan The sensor QR Code</Text>
            </View>
          </View>
          <QRCodeScanner
            onRead={onQrCodeScanned}
            showMarker
            reactivate
            reactivateTimeout={400}
            customMarker={<View style={styles.marker} />}
          />
        </>
      )}
      {loading && <LoadingState showConnectingText />}
    </View>
  );
}

export default ScanScreen;
