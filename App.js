import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';

//screens
import SignIn from './Screen/SignIn';
import SignUp from './Screen/SignUp';
import Loading from './Screen/Loading';
import Main from './Screen/Main';
import plantProfile from './Screen/plantProfile';

const authStack = createSwitchNavigator({
  Loading: Loading, 
  SignIn: SignIn,
  SignUp: SignUp,
  Main: Main,
  Profile: plantProfile
})

export default createAppContainer(authStack)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
