import React, { Component } from 'react';
import { View,Text,TextInput } from 'react-native';

const Input=({label,value,placeholder,onChangeText,secureTextEntry})=>{
    return(
    <View style={styles.containerStyle}>
        <Text style={styles.labelStyle}>{label}</Text>
        <TextInput 
        secureTextEntry={secureTextEntry}
        style={styles.inputStyle}
        autoCorrect={false}
        value={value} 
        onChangeText={onChangeText} 
        placeholder={placeholder}>
        </TextInput>
    </View>
    )
}

const styles = {
    inputStyle: {
      color: '#000',
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 18,
      lineHeight: 23,
      flex: 2
    },
    labelStyle: {
      fontSize: 18,
      paddingLeft: 20,
      flex: 1
    },
    containerStyle: {
      height: 40,
      flex:1,
      flexDirection: 'row',
      alignItems: 'center'
    }
  };

export default Input;