import React, { useEffect } from 'react';
import { View,StyleSheet,TouchableOpacity, Image,Alert} from 'react-native';
import AppColour from '../Components/AppColour';

import AppListItem from '../Components/AppListItem';
import AppText from '../Components/AppText';
import DataManager from '../config/DataManager';
import AppScreen from './AppScreen';

function SettingScreen({navigation}) {

    const getUser = () => {
        let commonData = DataManager.getInstance();
        let user=commonData.getCurUser()
        console.log(user)
        return user;
    }

    useEffect(()=>{
        data=getUser();
    })
    
    var data = getUser();

    function logOut(){
        let commonData = DataManager.getInstance();
        commonData.reset();
        navigation.navigate("Welcome")
    }

    return (
        <AppScreen>
             <View style={styles.heading}>
           
                <View>
                    <Image source={require("../assets/logo.jpg")} style={styles.logo}/>
                    <AppText style={styles.logoText}>Connecting Families</AppText>
                </View>
          
        </View>
        <AppText style={styles.Title}>Settings</AppText>
        <View style={styles.hairline} />
     
        <View style={styles.profileContainer}>
                    <AppListItem title={data.UserName} subtitle={data.UserEmail} thirdtitle={data.UserPH} icon="chevron-right" onPress={() => navigation.navigate("EditAcc",{
                                paramPersonalData: data
                            })}/>
        </View>

        <View style={styles.fullLine} />
        
        <AppText style={styles.subheading}>Account Privilege Level</AppText>
        <View style={styles.profileContainer}>
                    <AppListItem title={data.UserPriv} />
        </View>

        <View style={styles.fullLine} />

        <AppText style={styles.subheading}>Password</AppText>
        <View style={styles.profileContainer}>
                    <AppListItem  title="Change Password" icon="chevron-right" onPress={() => navigation.navigate("ChangePass",{
                                paramPersonalData: data
                            })}/>
        </View>

        <View style={styles.fullLine} />

        <AppText style={styles.subheading}>Login</AppText>
        <View style={styles.textContainer}>

        <TouchableOpacity  onPress={()=>Alert.alert("G'day","Would you like to log out ?",
                    [{text:"Yes",onPress:()=>logOut()},
                    {text:"NO"}])}>

        <AppText style={styles.textStyle}> Log out</AppText>

        </TouchableOpacity>
        </View>
        </AppScreen>
        
    );
}
const styles = StyleSheet.create({
    heading:{
        flexDirection:"row",
        width:230,
        alignItems:'center',
        marginLeft:110,

    },
    logo:{
        marginTop:10,
        marginLeft:30,
        width:50,
        height:50,
    },
    logoText:{
        fontSize:13,
        paddingLeft:5,
        fontStyle:'italic'
    },
    Title:{
        fontStyle:'italic',
        marginTop:10,
        marginLeft:15,
        fontSize:22
    },
    subheading:{
        fontSize:18,
        marginLeft:10,
    },
    hairline: {
        backgroundColor: '#A2A2A2',
        height: 2,
        width: 340,
        marginLeft: 15
    },fullLine: {
        backgroundColor: '#A2A2A2',
        height: 2,
        width: 500,
        marginTop:10,
        marginBottom: 10
    },
      profileContainer:{
        marginTop: 10,
        height: 90,
        justifyContent:"center",
    },
    textStyle:{
        fontSize:18,
        color:"#1338BE",
        textTransform:'none',
        marginTop:10,
        marginLeft:31
    },
    
})

export default SettingScreen;