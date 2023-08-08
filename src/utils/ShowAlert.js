import Toast from 'react-native-toast-message';

export default function ShowAlert(type, heading, msg = '') {
  Toast.show({
    type: type,
    text1: heading,
    text2: msg,
  });
}
