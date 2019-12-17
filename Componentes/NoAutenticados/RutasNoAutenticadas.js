import React from 'react';
import { Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import RutasNoAutenticadas from './Componentes/NoAutenticados/RutasNoAutenticadas';

export default class RutasNoAutenticadas extends React.Component {
    render() {
      return <AppContainer/>;
    }
  }

const SignIn = (props) => {
  console.log(props);
  const { navigation } = props;
  return (
    <View style={{flex: 1, justifyContent:"center"}}>
      <Text>Componente SignIn</Text>
      <Button 
        title='Navegar a SignUp'
        onPress={()=>{ navigation.navigate('SignUp')}}/>
    </View>
  );
};

const SignUp = (props) =>{
  const { navigation } = props;
  return(
    <View style={{flex: 1, justifyContent:"center"}}>
      <Text>Componente SignUp</Text>
      <Button 
        title='Regresar'
        onPress={()=>{ navigation.goBack()}}/>
    </View>
  )
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