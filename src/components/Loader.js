import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
import GStyles from '../utils/GStyles';

const Loader = () => {
  return (
    <View style={internalStyle.wrapper}>
      <ActivityIndicator size="large" color="#ac3df5" />
    </View>
  );
};

export default Loader;
const internalStyle = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99,
  },
});
