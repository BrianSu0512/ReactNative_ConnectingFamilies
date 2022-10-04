import React from "react";
import { StyleSheet, View,TextInput } from "react-native";
import AppColour from "./AppColour";

function AppInput({ style, ...otherProps }) {
return (
    <View style={[styles.container,style]}>

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
        width:300
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

export default AppInput;