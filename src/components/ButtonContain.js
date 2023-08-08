import {View, Text} from 'react-native';
import React from 'react';
import Ripple from 'react-native-material-ripple';
import GlobalStyle from '../utils/GlobalStyle';

const ButtonContain = ({label, action, style}) => {
  return (
    <Ripple style={[GlobalStyle.buttonContain, style]} onPress={() => action()}>
      <Text style={[GlobalStyle.smallHeading, {color: GlobalStyle.whiteColor}]}>
        {label}
      </Text>
    </Ripple>
  );
};

export default ButtonContain;
