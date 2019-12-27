import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import StackHome from './StackHome';
import Add from './Add';
import StackSearch from './StackSearch';
import StackFollow from './StackFollow';
import Profile from './Profile';

export default class RutasAutenticadas extends React.Component {
    render() {
      return <AppContainer/>;
    }
  }

const TabNavigator = createBottomTabNavigator({
    Home:{
      screen: StackHome,
    },
    Search:{
      screen:StackSearch,
    },
    Add:{
      screen:Add,
    },
    Follow:{
      screen: StackFollow,
    },
    Profile:{
      screen: Profile,
    },
  },
)

const AppContainer = createAppContainer(TabNavigator);