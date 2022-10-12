import React from 'react';
import { View,StyleSheet,TouchableOpacity,Text,FlatList, Alert,Image } from 'react-native';
import { date } from 'yup';
import AppButton from '../Components/AppButton';
import AppColour from '../Components/AppColour';
import AppIcon from '../Components/AppIcon';
import AppProfile from '../Components/AppProfile';
import AppText from '../Components/AppText';
import AppScreen from './AppScreen';

function PersonalProfileScreen({navigation: { goBack },navigation,route}) {
    const data= route.params.paramPatient
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

      <AppText style={styles.Title}>Personal Profiles</AppText>
       <View style={styles.hairline} />

        <AppProfile data={data} onPress={()=>navigation.navigate("Emergency",{
                                paramPatient: data
                            })}
                            onPress1={()=>navigation.navigate("MedicalHistory",{
                                paramPatient: data
                            })}
                            onPress2={()=>navigation.navigate("Prescription",{
                                paramPatient: data.id
                            })}
                            onPress3={()=>navigation.navigate("MedicalLog",{
                                paramPatient: data.id
                            })}/>

              
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
    headingIcon:{
        marginTop:10,

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

export default PersonalProfileScreen;