import {View, Text} from 'react-native';
import React from 'react';
import Ripple from 'react-native-material-ripple';
import GlobalStyle from '../utils/GlobalStyle';

const ButtonOutline = ({label, action, style}) => {
  return (
    <Ripple style={[GlobalStyle.buttonOutline, style]} onPress={() => action()}>
      <Text style={[GlobalStyle.smallHeading, {color: GlobalStyle.blueColor}]}>
        {label}
      </Text>
    </Ripple>
  );
};

export default ButtonOutline;
