import React from 'react';
import { View,StyleSheet,Text, Alert,ImageBackground,Image } from 'react-native';
import AppButton from '../Components/AppButton';
import AppColour from '../Components/AppColour';
import AppText from '../Components/AppText';
import AppScreen from './AppScreen';



function WelcomeScreen({navigation}) {
    const blurRadiusValue = Platform.OS ==='android' ?0.2 :11;
    return (
       <AppScreen>
        <ImageBackground source={require("../assets/background.jpg")} blurRadius={blurRadiusValue} style = {styles.back}>
            <View style={styles.container}>
            <View style={styles.rowcontainer}>
            <Image source={require("../assets/logo.jpg")} style = {styles.logo}/>
                <View>
                <AppText style={styles.logoText}>Connecting Families</AppText>
                <AppText style={styles.subText}>Bring families together</AppText>
                </View>
                
            </View>
            </View>
          
            <View style={styles.buttonContainer}>
                <AppButton title="Sign In" 
                onPress={() => navigation.navigate("Login")} />
                <AppButton title="Join us"
                onPress={() => navigation.navigate("Register")} />
            </View> 
           
           
        </ImageBackground>           
       </AppScreen>
    );
}
const styles = StyleSheet.create({
    container:{
        height:600,
        justifyContent:'flex-end',
    },logo:{
        width:80,
        height:80,
    },
    logoText:{
        fontSize:28,
        fontFamily:Platform.OS==='android' ?"monospace" :'Bradley Hand',
        color:AppColour.black,
       
    },subText:{
        fontStyle: 'italic',
        fontFamily:Platform.OS==='android' ?"monospace" :'Bradley Hand',
        color:AppColour.black,
        marginLeft:5
    },
    buttonContainer:{
        flexDirection:"row",
        width:250,
        justifyContent:'space-between',
        marginLeft:60,

    }, back:{
        flex:1,
        height:844,
        width:"100%",
    },
    rowcontainer:{
        flexDirection:'row',
        marginBottom:80,
        marginLeft:10
    }
    
})

export default WelcomeScreen;