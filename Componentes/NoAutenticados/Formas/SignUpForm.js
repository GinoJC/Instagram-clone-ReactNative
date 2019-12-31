import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import { Field, reduxForm } from 'redux-form';

const fieldNombre = () => {
    return(
        <TextInput
        placeholder="Texto desde field nombre"/>
    )
}

const SignUpForm = () => {
    return (
        <View>
            <Field name="nombre" component={fieldNombre}/>
            <Text>Redux Form</Text>
        </View>
    )
};

export default reduxForm({form: 'SignUpForm'})(SignUpForm);
