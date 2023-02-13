import {Linking, Platform} from 'react-native';
import Permissions, {PERMISSIONS, request} from 'react-native-permissions';

export const checkPermissionForCamera = async () => {
  console.log('hallooo');
  const permissions = await Permissions.check(
    Platform.select({
      android: Permissions.PERMISSIONS.ANDROID.CAMERA,
      ios: Permissions.PERMISSIONS.IOS.CAMERA,
    }),
  );
  if (permissions === 'blocked') {
    Linking.openSettings();
  } else if (permissions === 'denied') {
    request(
      Platform.select({
        android: PERMISSIONS.ANDROID.CAMERA,
        ios: PERMISSIONS.IOS.CAMERA,
      }).catch(error => console.log('error', error)),
    );
  }
};
