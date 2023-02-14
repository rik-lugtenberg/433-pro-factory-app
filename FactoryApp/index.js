import {AppRegistry} from 'react-native';
import App from './App';
import logService from './src/services/LogService';
import {name as appName} from './app.json';

(async () => {
  AppRegistry.registerComponent(appName, () => App);
  try {
    await logService.initilize();
  } catch (e) {
    console.log('exception');
    console.log(e);
  }
})();
