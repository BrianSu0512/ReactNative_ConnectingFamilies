import React from 'react';

import { Text,StyleSheet } from 'react-native';
import AppColour from '../Components/AppColour';


function AppText({style, children}) {
    return (
       <Text style={[styles.text,style]}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize:22,
        fontFamily:Platform.OS==='android' ?"monospace" :"Avenir-Roman",
        fontWeight:'bold',
        color:AppColour.black,
    }
})

export default AppText;

