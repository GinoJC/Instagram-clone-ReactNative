import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator  } from 'react-navigation-tabs';
import Follow from './Follow';


export default class TabFollow extends React.Component {
    render() {
      return <AppContainer/>;
    }
  }

const TabNavigator = createMaterialTopTabNavigator ({
    Follow:{
      screen: Follow,
    },
    Followers:{
      screen: Follow,
    },
  },
)

const AppContainer = createAppContainer(TabNavigator);