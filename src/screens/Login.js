import {
  View,
  Text,
  Image,
  TextInput,
  Alert,
  ActionSheetIOS,
} from 'react-native';
import React, {useState} from 'react';
import GStyles from '../utils/GStyles';
import Ripple from 'react-native-material-ripple';
import ButtonPrimary from '../components/ButtonPrimary';
import {useNavigation} from '@react-navigation/native';
import isValidEmail from '../utils/isValidEmail';

const Login = () => {
  const navigation = useNavigation();
  const [activeInput, setActiveInput] = useState(false);
  const [email, setEmail] = useState('');

  const _handleLogin = async () => {
    if (isValidEmail(email)) {
      navigation.navigate('LoginOtp');
    } else {
      Alert.alert('warning', 'Email is not valid');
    }
  };
  return (
    <View style={GStyles.screenStyle}>
      <Image
        source={require('../images/screenBG.png')}
        style={GStyles.screenBackgrond}
      />
      <View
        style={[GStyles.row, GStyles.px15, {marginBottom: 20, paddingTop: 50}]}>
        <Ripple
          style={{borderRadius: 50, overflow: 'hidden', width: 40, height: 40}}>
          <Image
            source={require('../images/backButton.png')}
            style={{width: 40, height: 40, resizeMode: 'contain'}}
          />
        </Ripple>
        <Ripple
          style={{
            borderRadius: 50,
            overflow: 'hidden',
            alignSelf: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
          <Image
            source={require('../images/socialBloxicon.png')}
            style={{width: 50, height: 50, resizeMode: 'contain'}}
          />
        </Ripple>
      </View>
      <Text style={[GStyles.bigTxt, {textAlign: 'center'}]}>
        Sign-in to SocialBlox
      </Text>

      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          marginTop: 50,
          paddingBottom: 30,
        }}>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Text
            style={[
              {position: 'absolute', zIndex: 2, paddingLeft: 20},
              activeInput
                ? [GStyles.smallTxt, {top: 10}]
                : [GStyles.normlTxt, {top: 28}],
            ]}>
            Enter your e-mail
          </Text>
          <TextInput
            style={GStyles.flotingInput}
            onFocus={() => setActiveInput(true)}
            onChangeText={txt => {
              setEmail(txt);
              txt.length < 1 ? setActiveInput(false) : setActiveInput(true);
            }}
          />
        </View>

        <View style={GStyles.px15}>
          <ButtonPrimary label="Containue" action={() => _handleLogin()} />
        </View>
      </View>
    </View>
  );
};

export default Login;
