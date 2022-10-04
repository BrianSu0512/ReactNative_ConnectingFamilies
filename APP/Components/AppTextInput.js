import React from "react";
import { StyleSheet, View,TextInput } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppColour from "./AppColour";


function AppTextInput({ icon, style, ...otherProps }) {
return (
    <View style={[styles.container,style]}>
         {icon && <MaterialCommunityIcons name={icon} size={30} style={styles.icon}/>}
        <TextInput
    style={styles.textInput}
    {...otherProps}
    />

    </View>
    
);
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:AppColour.primaryColour ,
        borderRadius:20,
        padding:10,
        marginTop:10,
        flexDirection: 'row',
    },
    
    textInput:{
        fontSize:20,
        fontFamily: Platform.OS === 'android' ? "monospace" : "Avenir-Roman",
        color:AppColour.black,
        flex:1,
    },icon:{
        marginRight:10,
    }
})

export default AppTextInput;