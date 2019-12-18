import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './Home';
import Autor from './Profile';
import Publicacion from './Publicacion';
import Comentarios from './Comentarios';

export default class StackHome extends React.Component {
    render() {
      return <AppContainer/>;
    }
  }

const StackNavigator = createStackNavigator({
    Home:{
        screen: Home,
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
  },
);

const AppContainer = createAppContainer(StackNavigator);