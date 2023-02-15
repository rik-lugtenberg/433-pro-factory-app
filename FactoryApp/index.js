import {AppRegistry} from 'react-native';
import App from './App';
import logService from './src/services/LogService';
import {name as appName} from './app.json';
import {LogBox} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import shipbook from '@shipbook/react-native';

(async () => {
  AppRegistry.registerComponent(appName, () => App);
  shipbook.start(
    '63eb4c902a16313c55013e96',
    'e242eaea90b0b1da0a2260e06b8a330e',
  );
})();
