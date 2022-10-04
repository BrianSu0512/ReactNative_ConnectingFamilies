import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import AppButton from '../Components/AppButton';
import AppColour from '../Components/AppColour';
import AppText from '../Components/AppText';
import AppScreen from './AppScreen';


function WelcomeScreen() {
    return (
       <AppScreen>
          <View style={styles.textContainer}>
                <AppText style={styles.logoText}>Connecting Families</AppText>
                <AppText style={styles.subText}>Bring families together</AppText>
                
            </View>
          
            <View style={styles.buttonContainer}>
                <AppButton title="Sign In" />
                <AppButton title="Join us" />
            </View>
            
             
       </AppScreen>
          
       
    );
}
const styles = StyleSheet.create({
    textContainer:{
        height:300,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'flex-end',
        marginBottom:100
    },
    logoText:{
    
        fontSize:20,
        fontFamily:Platform.OS==='android' ?"monospace" :'Bradley Hand',
        color:AppColour.black
    },subText:{
        
        fontSize:15,
        fontStyle: 'italic',
        fontFamily:Platform.OS==='android' ?"monospace" :'Bradley Hand',
        color:AppColour.black
    },
    buttonContainer:{
        backgroundColor:'red',
        flexDirection:"row",
        width:250,
        Top:200,
        justifyContent:'space-between',
        paddingTop:30,
    },
    
})

export default WelcomeScreen;