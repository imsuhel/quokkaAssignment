import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';

const Loading = () => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.8)',
      }}>
      <ActivityIndicator size="large" color="#fff" />
    </View>
  );
};

export default Loading;
