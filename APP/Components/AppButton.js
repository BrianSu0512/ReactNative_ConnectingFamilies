import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AppColour from './AppColour';

function AppButton({title,style,onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container,style]}>
                <Text style={[styles.text,style]}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:AppColour.primaryColour,
        width:'100%',
        padding:10,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        
    }, 
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:AppColour.black,
    },
})

export default AppButton;