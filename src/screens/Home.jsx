import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, SafeAreaView, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import Open from '../assets/images/shop.png'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Button from '../components/Button'

function Home({ navigation}) {
  return (
    <View style={styles.container}>
        <Image source={Open} style={{ width: 300, height:300, marginTop:30,}} />
        <View style={styles.buttonContainer}>
            <Button text="Login" style={styles.firstButton} onPress={()=>navigation.navigate('Login')} />
            <Button text="Register" style={styles.secondButton} onPress={()=>navigation.navigate('Register')} />
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFE15D',
        flex: 1,
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 60,
        width: '100%',
        padding: 10,
        alignItems: 'center',
    },
    firstButton: {
        width: '80%',
        padding: 16,
        backgroundColor: '#DC3535',
        marginBottom: 30,
        borderRadius: 15,
    },
    secondButton: {
        width: '80%',
        padding: 16,
        backgroundColor: '#F49D1A',
        borderRadius: 15,
    },

})
export default Home