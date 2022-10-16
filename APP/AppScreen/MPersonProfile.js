import React from 'react';
import { View,StyleSheet,TouchableOpacity,Text,FlatList, Alert,Image } from 'react-native';
import { date } from 'yup';
import AppButton from '../Components/AppButton';
import AppColour from '../Components/AppColour';
import AppIcon from '../Components/AppIcon';
import AppProfile from '../Components/AppProfile';
import AppText from '../Components/AppText';
import DataManager from '../config/DataManager';
import AppScreen from './AppScreen';


function MPersonalProfileScreen({navigation: { goBack },navigation,route}) {
    const id= route.params.paramPatient
    console.log("line13",id)

    const patients= () => {
        let commonData = DataManager.getInstance();
         const userdetials = commonData.getPatient(id);
     
           return userdetials
        }
     
         const data=patients()
         console.log("line102",data[0].pId)
    return (
        <AppScreen>
        <View style={styles.heading}>
      
      <TouchableOpacity onPress={()=>goBack()}>
      
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

      <TouchableOpacity onPress={()=>navigation.navigate("EditProfile", {paramPersonalData:data[0]})} >
      
      <AppIcon
          name="pencil"
          size={35}
          style={[styles.headingIcon,{ marginTop:25}]}
      />
      
  </TouchableOpacity>

       </View>   

      <AppText style={styles.Title}>Personal Profiles</AppText>
       <View style={styles.hairline} />

        <AppProfile data={data[0]} onPress={()=>navigation.navigate("Emergency",{
                                paramPatient: data
                            })}
                            onPress1={()=>navigation.navigate("MedicalHistory",{
                                paramPatient: data[0].id
                            })}
                            onPress2={()=>navigation.navigate("Prescription",{
                                paramPatient: data[0].id
                            })}
                            onPress3={()=>navigation.navigate("MedicalLog",{
                                paramPatient: data[0].id
                            })}/>

              
      </AppScreen>
    );
}
const styles = StyleSheet.create({
    heading:{
        flexDirection:"row",
        width:360,
        paddingTop:10,
        justifyContent:'space-between',
        

    },
    headingIcon:{
        marginTop:10,
        height:80,

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
    }
})

export default MPersonalProfileScreen;