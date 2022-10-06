import React from 'react';
import { View,StyleSheet,TouchableOpacity, Image} from 'react-native';
import AppButton from '../Components/AppButton';
import AppColour from '../Components/AppColour';
import AppIcon from '../Components/AppIcon';
import AppInput from '../Components/AppIput';
import AppListItem from '../Components/AppListItem';
import AppText from '../Components/AppText';
import AppTextInput from '../Components/AppTextInput';
import DataManager from '../config/DataManager';
import AppScreen from './AppScreen';


function SettingScreen({navigation}) {

    const getUser = () => {
        let commonData = DataManager.getInstance();
        let userid = commonData.getUserID();
        let user=commonData.getUser(userid)

        return user;
            
    }

    const data=getUser();

    console.log("Line29",data[0])

    return (
        <AppScreen>
             <View style={styles.heading}>
           
                <View>
                    <Image source={require("../assets/icon.png")} style={styles.logo}/>
                    <AppText style={styles.logoText}>Connecting Families</AppText>
                </View>
          
        </View>
        <AppText style={styles.Title}>Settings</AppText>
        <View style={styles.hairline} />
     
        <View style={styles.profileContainer}>
                    <AppListItem image={data[0].image} title={data[0].name} subtitle={data[0].email} thirdtitle={data[0].phone} icon="chevron-right" onPress={() => navigation.navigate("EditAcc",{
                                paramPersonalData: data
                            })}/>
        </View>

        <View style={styles.fullLine} />
        
        <AppText style={styles.subheading}>Account Privilege Level</AppText>
        <View style={styles.profileContainer}>
                    <AppListItem title={data[0].level} />
        </View>

        <View style={styles.fullLine} />

        <AppText style={styles.subheading}>Password</AppText>
        <View style={styles.profileContainer}>
                    <AppListItem  title="Change Password" icon="chevron-right" onPress={() => navigation.navigate("Welcome")}/>
        </View>

        <View style={styles.fullLine} />

        <AppText style={styles.subheading}>Login</AppText>
        <View style={styles.textContainer}>

        <TouchableOpacity  onPress={() => navigation.navigate() }>

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
        width:80,
        height:80,
    },
    logoText:{
        fontSize:13,
        paddingLeft:5,
        fontStyle:'italic'
    },
    Title:{
        fontStyle:'italic',
        marginTop:10,
        marginLeft:15
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
        marginBottom: 15
    },
      profileContainer:{
        marginTop: 10,
        height: 90,
        backgroundColor:AppColour.otherColorLite,
        justifyContent:"center",
    },
    textStyle:{
        fontSize:18,
        color:"#D6F8FF",
        textTransform:'none',
        marginTop:10,
        marginLeft:31
    },
    
})

export default SettingScreen;