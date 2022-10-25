import React from 'react';
import { View,StyleSheet,TouchableOpacity,Text,FlatList, Alert,Image } from 'react-native';
import { date } from 'yup';
import AppButton from '../Components/AppButton';
import AppColour from '../Components/AppColour';
import AppEContact from '../Components/AppEContact';
import AppIcon from '../Components/AppIcon';
import AppListItem from '../Components/AppListItem';
import AppText from '../Components/AppText';
import AppScreen from './AppScreen';
import DataManager from '../config/DataManager';



function EmergencyContactScreen({navigation: { goBack },navigation,route}) {
    const data= route.params.paramPatient
    const getlevel = () => {
        let commonData = DataManager.getInstance();
        let userid = commonData.getUserID();
        let level=commonData.getLevel(userid);
        return level;    
    }
    const level =getlevel()

    const pencil = level === 'Privilege Level 1' 
    ? <></> 
    : <TouchableOpacity onPress={()=>navigation.navigate("EditProfile", {paramPersonalData:data})} >
         <AppIcon
         name="pencil"
         size={35}
         style={{height:80}}
     />
     
    </TouchableOpacity>
    return (
        <AppScreen>
        <View style={styles.heading}>
      
      <TouchableOpacity onPress={() => goBack()}>
      
          <AppIcon
              name="chevron-left"
              size={50}
              style={styles.headingIcon}
          />
          
      </TouchableOpacity>


 
      <View>
          <Image source={require("../assets/logo.jpg")} style={styles.logo}/>
          <AppText style={styles.logoText}>Connecting Families</AppText>
      </View>

      

       </View>  

      <View style={styles.rowcontaoner}>
      
      <AppText style={styles.Title}>Emergency Contact</AppText>
      {pencil}
      </View>
      
       <View style={styles.hairline} />



     <AppEContact data={data}/>

        
        
     

              
      </AppScreen>
    );
}

const styles = StyleSheet.create({
    heading:{
        flexDirection:"row",
        width:240,
        paddingTop:10,
        justifyContent:'space-between',
        

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
        marginTop:5,
        marginLeft:15,
        fontSize:22
    },
    hairline: {
        backgroundColor: '#A2A2A2',
        height: 2,
        width: 340,
        marginLeft: 15
    },rowcontaoner:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:345
    }
})

export default EmergencyContactScreen;