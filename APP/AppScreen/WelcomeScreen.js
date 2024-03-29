import React from 'react';
import { View,StyleSheet,Text, Alert,ImageBackground,Image } from 'react-native';
import AppButton from '../Components/AppButton';
import AppColour from '../Components/AppColour';
import AppText from '../Components/AppText';
import AppScreen from './AppScreen';



function WelcomeScreen({navigation}) {
    const blurRadiusValue = Platform.OS ==='android' ?0.7 :5;
    return (
       <AppScreen>
        <View>
        <Image source={require("../assets/background.png")} blurRadius={blurRadiusValue} style = {styles.back}/>
        </View>
        

    
            <View style={styles.rowcontainer}>

            <Image source={require("../assets/logo.jpg")} style = {styles.logo}/>
                <View>
                <AppText style={styles.logoText}>Connecting Families</AppText>
                <AppText style={styles.subText}>Bring families together</AppText>
                </View>
                
            </View>
  
          
            <View style={styles.buttonContainer}>
                <AppButton title="Sign In" 
                onPress={() => navigation.navigate("Login")} />
                <AppButton title="Join us"
                onPress={() => navigation.navigate("Register")} />
            </View> 
           
           
                  
       </AppScreen>
    );
}
const styles = StyleSheet.create({
    logo:{
        width:50,
        height:50,
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
        height:350,
        width:"100%"

    },
    rowcontainer:{
        flexDirection:'row',
        marginBottom:80,
        marginLeft:10,
        marginTop:30
    }
    
})

export default WelcomeScreen;