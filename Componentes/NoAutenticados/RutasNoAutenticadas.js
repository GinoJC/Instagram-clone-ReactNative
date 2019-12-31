import React from 'react';
import { Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default class RutasNoAutenticadas extends React.Component {
  render() {
    return <AppContainer/>;
  }
}

const AppNavigator = createStackNavigator({
  SignIn: {
    screen: SignIn,
  },
  SignUp: {
    screen: SignUp,
  }
},
{
  headerMode: 'none'
});

const AppContainer = createAppContainer(AppNavigator);