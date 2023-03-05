import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function Button({text, style,textStyle}) {
  return (
    <TouchableOpacity style={style}>
            <Text style={{color: '#fff',fontSize: 15,fontWeight: 'bold', textAlign:'center'}}>{text}</Text>
        </TouchableOpacity>
  )
}

export default Button