import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Ripple from 'react-native-material-ripple';
import {useNavigation} from '@react-navigation/native';

const StartScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={internalStyle.wrapper}>
      <Ripple
        style={internalStyle.btnWrap}
        onPress={() => navigation.navigate('TestScreen')}>
        <Text style={internalStyle.btnStyle}>Start Now</Text>
      </Ripple>
    </View>
  );
};

export default StartScreen;

const internalStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  btnWrap: {
    width: '90%',
  },
  btnStyle: {
    paddingVertical: 16,
    paddingHorizontal: 30,
    textAlign: 'center',
    backgroundColor: '#000',
    color: '#fff',
    fontSize: 14,
  },
});
