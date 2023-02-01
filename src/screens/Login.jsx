import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, SafeAreaView, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Logo from '../assets/images/fruit.png';

function Login() {
    return (
      <View style={styles.container}>
        <Image source={Logo} style={{ width: 600, height:300}} />
        {/* <Text>Welcome</Text> */}
        <KeyboardAvoidingView style={styles.containerInputs} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TextInput style={styles.input} />
            <TextInput style={styles.secondInput} />
        </KeyboardAvoidingView>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
      </View>
      
    );
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
      alignItems: 'center',
    },
    containerInputs: {
      width: '100%',
      alignItems: 'center',
    },
    input: {
      width: "80%",
      padding: 7,
      borderWidth: 1,
      borderColor: '#D6E4E5',
      borderRadius: 5,
    },
    secondInput: {
      width: "80%",
      padding: 7,
      borderWidth: 1,
      borderColor: '#D6E4E5',
      marginTop: 20,
      borderRadius: 5,
    },
    button: {
      backgroundColor: '#F57328',
      width: '50%',
      height: 40,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
    textButton: {
      color: '#fff',
      fontSize: 15,
      fontWeight: 'bold',

    },
})
export default Login;