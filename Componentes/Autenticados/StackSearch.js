import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Search from './Search';
import Publicacion from './Publicacion';
import Autor from './Profile';
import Comentarios from './Comentarios';

export default class StackSearch extends React.Component {
    render() {
      return <AppContainer/>;
    }
  }

const StackNavigator = createStackNavigator({
    Search:{
        screen: Search,
    },
    Publicacion:{
        screen: Publicacion,
    },
    Autor:{
        screen: Autor,
    },
    Comentarios:{
        screen: Comentarios,
    },
  },
);

const AppContainer = createAppContainer(StackNavigator);