import {View, Text, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import GStyles from '../utils/GStyles';
import Ripple from 'react-native-material-ripple';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import ButtonSecondary from '../components/ButtonSecondary';
import Loader from '../components/Loader';
import {useNavigation} from '@react-navigation/native';

const LoginOtp = () => {
  const navigation = useNavigation();
  const [showLoader, setShowLoader] = useState(false);
  return (
    <View style={GStyles.screenStyle}>
      {showLoader && <Loader />}
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
        E-mail <Text style={{color: '#999A9C'}}>(1/2)</Text>
      </Text>
      <Text style={[GStyles.normlTxt, {textAlign: 'center'}]}>
        Verify your e-mail
      </Text>
      <Text style={[GStyles.normlTxt, {textAlign: 'center', marginTop: 20}]}>
        Enter the code we’ve send you here to verify: user@coffeeit.nl
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
          codeInputHighlightStyle={{elevation: 5}}
          onCodeFilled={code => {
            setShowLoader(true);
            navigation.navigate('LoginAuthenticator');
            setShowLoader(false);
          }}
        />
        <View style={[GStyles.row, GStyles.between, {marginTop: 16}]}>
          <ButtonSecondary
            label="Send code again (59)"
            action={() => {}}
            style={{width: '58%'}}
          />
        </View>
      </View>
    </View>
  );
};

export default LoginOtp;
