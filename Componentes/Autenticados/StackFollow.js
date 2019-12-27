import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TabFollow from './TabFollow';
import Publicacion from './Publicacion';
import Comentarios from './Comentarios';
import Autor from './Profile';

export default class StackFollow extends React.Component {
    render() {
      return <AppContainer/>;
    }
  }

const StackNavigator = createStackNavigator({
    TabFollow:{
        screen: TabFollow,
        navigationOptions:{
            header: null,
        }
    },  
    Autor:{
        screen: Autor,
    },
    Publicacion:{
        screen: Publicacion,
    },
    Comentarios:{
        screen: Comentarios,
    },
});

const AppContainer = createAppContainer(StackNavigator);