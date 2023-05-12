import React from 'react';
import { StyleSheet, Text, View, TextInput, 
        Dimensions, TouchableOpacity } from 'react-native';
        import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonGradient () { 

    return(
    <TouchableOpacity style={styles.container}>
         <LinearGradient
        // Button Linear Gradient
        colors={['#6dd5ed', '#4A00E0', '#8E2DE2']}
        start={{x:0, y:0}}
        end={{x:1, y: 1}}
        style={styles.button}
        >
        <Text style={styles.text}>Sign in </Text>
      </LinearGradient>
    </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container:{
        width: 200,
        alignItems: 'center',
        marginTop: 50,
    },
    text: {
        fontSize: 14,
        color:'#fff',
        fontWeight:'bold',
    },
    button: {
        width: '90%',
        height: 50,
        borderRadius:25,
        alignItems: 'center',
        justifyContent: 'center',
      },
    });