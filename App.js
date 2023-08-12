import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import React from 'react';
import Toast from 'react-native-toast-message';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/screens/Login';
import LoginAuthenticator from './src/screens/LoginAuthenticator';
import LoginOtp from './src/screens/LoginOtp';
// import {store} from './src/redux/store';
// import {Provider} from 'react-redux';
// import Register from './src/screens/Register';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
        style={{height: 48}}
      />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LoginOtp" component={LoginOtp} />
        <Stack.Screen
          name="LoginAuthenticator"
          component={LoginAuthenticator}
        />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
    // </Provider>
  );
};

export default App;
