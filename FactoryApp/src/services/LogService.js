// import shipbook from '@shipbook/react-native';

class LogService {
  async initilize() {
    // await shipbook.start(
    //   '63eb7b30a422d813ebb08d1e',
    //   'c20d6c1235195979a1058c402adac7f7',
    // );
    // shipbook.registerUser(
    //   'a',
    //   'test',
    //   undefined,
    //   undefined,
    //   undefined,
    //   undefined,
    // );
  }

  log(message, logType) {
    console.log(message);
    try {
      //   Shipbook.
      // let log = shipbook.getLogger('FactoryApp');
      // switch (logType) {
      //   case 'Error':
      //     log.e(message);
      //     break;
      //   case 'Warning':
      //     log.w(message);
      //     break;
      //   case 'Info':
      //     log.i(message);
      //     break;
      //   case 'Debug':
      //     log.d(message);
      //     break;
      //   case 'Verbose':
      //     log.v(message);
      //     break;
      //   default:
      //     log.i(message);
      // }
    } catch (e) {
      console.log('exception in the log', e);
    }
  }
}

const logService = new LogService();

export default logService;
