import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Follow extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text> Follow </Text>
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