import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Add from './Add';
import Search from './Search';
import Home from './Home';
import Follow from './Follow';
import Profile from './Profile';

export default class RutasAutenticadas extends React.Component {
    render() {
      return <AppContainer/>;
    }
  }

const TabNavigator = createBottomTabNavigator({
    Home:Home,
    Search:Search,
    Add:Add,
    Follow:Follow,
    Profile:Profile,
})

const AppContainer = createAppContainer(TabNavigator);