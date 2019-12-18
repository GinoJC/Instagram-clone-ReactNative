import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Search extends React.Component {

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> Search </Text>
        <Button
          title='Publicacion'
          onPress={()=>{navigation.navigate('Publicacion')}}
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