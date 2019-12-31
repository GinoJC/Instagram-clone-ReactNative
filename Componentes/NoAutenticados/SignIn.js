import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default class SignIn extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text> SignIn </Text>
                <Button title="SignUp"
                onPress={() => {navigation.navigate('SignUp')}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    }
})

