import {View, Text} from 'react-native';
import React from 'react';
import Ripple from 'react-native-material-ripple';
import GStyles from '../utils/GStyles';

const ButtonPrimary = ({label, action, style}) => {
  return (
    <Ripple style={[GStyles.buttonContain, style]} onPress={() => action()}>
      <Text style={[GStyles.smallHeading, {color: GStyles.whiteColor}]}>
        {label}
      </Text>
    </Ripple>
  );
};

export default ButtonPrimary;
