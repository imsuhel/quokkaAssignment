import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  StatusBar,
} from 'react-native';
import React from 'react';
import GlobalStyle from '../utils/GlobalStyle';
import {Formik} from 'formik';
import ButtonContain from '../components/ButtonContain';
import {useNavigation} from '@react-navigation/native';
import ButtonOutline from '../components/ButtonOutline';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../components/Loading';
import {userRegister} from '../redux/slice/auth';

const Register = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth);

  authState.userData && navigation.navigate('dashboard');

  return (
    <View style={[GlobalStyle.screenStyle, {justifyContent: 'flex-end'}]}>
      {authState.isLoading && <Loading />}
      <StatusBar backgroundColor="#00b5c5" barStyle="dark-content" />
      <Image
        source={require('../imgs/loginBg.jpg')}
        style={internalStyle.imgStyle}
      />
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => dispatch(userRegister(values))}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View style={[GlobalStyle.px15, internalStyle.cardStyle]}>
            <Text
              style={[
                GlobalStyle.bigTxt,
                {color: GlobalStyle.blueColor, marginBottom: 20},
              ]}>
              Register
            </Text>

            <View style={[GlobalStyle.inputWrapper]}>
              <Text style={[GlobalStyle.labelStyle]}>Email</Text>
              <TextInput
                style={[GlobalStyle.inputStyle]}
                onChangeText={handleChange('email')}
              />
            </View>
            <View style={[GlobalStyle.inputWrapper]}>
              <Text style={[GlobalStyle.labelStyle]}>Password</Text>
              <TextInput
                style={[GlobalStyle.inputStyle]}
                onChangeText={handleChange('password')}
              />
            </View>
            <View
              style={[
                GlobalStyle.row,
                GlobalStyle.between,
                GlobalStyle.alignCenter,
              ]}>
              <ButtonContain
                label="Register"
                style={{width: '48%'}}
                action={() => handleSubmit()}
              />

              <ButtonOutline
                label="Login"
                style={{width: '48%'}}
                action={() => navigation.navigate('Login')}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Register;
const internalStyle = StyleSheet.create({
  imgStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    resizeMode: 'cover',
  },
  cardStyle: {
    backgroundColor: GlobalStyle.whiteColor,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 15,
  },
});
