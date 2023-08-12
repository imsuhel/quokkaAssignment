import {View, Text, Image, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import GStyles from '../utils/GStyles';
import Ripple from 'react-native-material-ripple';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import ButtonSecondary from '../components/ButtonSecondary';
import Loader from '../components/Loader';
import {useNavigation} from '@react-navigation/native';

const LoginAuthenticator = () => {
  const navigation = useNavigation();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={GStyles.screenStyle}>
      <Image
        source={require('../images/screenBG.png')}
        style={GStyles.screenBackgrond}
      />
      <View
        style={[GStyles.row, GStyles.px15, {marginBottom: 20, paddingTop: 50}]}>
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
      <Text style={[GStyles.bigTxt, {textAlign: 'center', marginBottom: 6}]}>
        Authenticator<Text style={{color: '#999A9C'}}>(2/2)</Text>
      </Text>
      <Text style={[GStyles.normlTxt, {textAlign: 'center'}]}>
        Verify your authenticator app
      </Text>
      <Text style={[GStyles.normlTxt, {textAlign: 'center', marginTop: 20}]}>
        Enter the sign-in 2FA code from your authenticator app
      </Text>

      <View style={{width: '90%', alignSelf: 'center', marginTop: 30}}>
        <OTPInputView
          autoFocusOnLoad={false}
          pinCount={6}
          style={{height: 60}}
          codeInputFieldStyle={{
            backgroundColor: GStyles.lightBlack,
            borderWidth: 0,
            height: 60,
            borderRadius: 10,
            color: GStyles.whiteColor,
          }}
          onCodeFilled={code => {
            setShowLoader(true);
            navigation.navigate('LoginAuthenticator');
          }}
        />
        {showButton && (
          <View style={[GStyles.row, GStyles.between, {marginTop: 16}]}>
            <ButtonSecondary label="Try another way" action={() => {}} />
          </View>
        )}
      </View>
    </View>
  );
};

export default LoginAuthenticator;
