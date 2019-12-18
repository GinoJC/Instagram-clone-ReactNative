import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Publicacion extends React.Component {

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> Publicacion </Text>
        <Button
          title='Comentarios'
          onPress={()=>{navigation.navigate('Comentarios')}}
        />
        <Button
          title='Autor'
          onPress={()=>{navigation.navigate('Autor')}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems:'center'
  }
})