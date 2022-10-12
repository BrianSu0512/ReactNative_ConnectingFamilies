import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Constants from'expo-constants';
import AppColour from '../Components/AppColour';
function AppScreen({children},style) {
    return (
        <SafeAreaView style={[styles.container,style]}>
            {children}
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        marginTop: Constants.statusBarHeight,
        backgroundColor:AppColour.white,
        flex: 1,
    }
})

export default AppScreen;