import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import StackHome from './StackHome';
import Add from './Add';
import StackSearch from './StackSearch';
import Follow from './Follow';
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
      screen: Follow,
    },
    Profile:{
      screen: Profile,
    },
  },
)

const AppContainer = createAppContainer(TabNavigator);