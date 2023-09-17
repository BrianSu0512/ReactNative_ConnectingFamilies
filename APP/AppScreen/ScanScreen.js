import { NavigationHelpersContext } from '@react-navigation/native';
import React ,{useState}from 'react';
import { View,StyleSheet,TouchableOpacity, Image,Alert} from 'react-native';
import AppColour from '../Components/AppColour';

import AppListItem from '../Components/AppListItem';
import AppPicker from '../Components/AppPicker';
import AppScaner from '../Components/AppScaner';
import AppText from '../Components/AppText';
import DataManager from '../config/DataManager';
import AppScreen from './AppScreen';

function ScanScreen({navigation,route}) {
    const getPatients = () =>{
        let commonData = DataManager.getInstance();
        let user = commonData.getUserID();
        let userPatients=commonData.getUserPatient(user)
        return userPatients;
    }

    const newpatients=getPatients();

    const[patients, setPatients] = useState("");

    return (
        <AppScreen>
        <View style={styles.heading}>
      
           <View>
               <Image source={require("../assets/logo.jpg")} style={styles.logo}/>
               <AppText style={styles.logoText}>Connecting Families</AppText>
           </View>
     
   </View>
   <AppText style={styles.Title}>Scan QR Code</AppText>
   <View style={styles.hairline} />


   <AppPicker 
                selectedItem={patients}
                onSelectItem = {item => setPatients(item)}
                data={newpatients} 
                icon="apps" 
                placeholder="Select Patient's Name" 
                numColumns={2}/>

    <AppScaner patients={patients} onPress1={()=>navigation.navigate("MedicalLog",{
                                paramPatient: newpatients
                            })}/>
  
  
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
        marginBottom: 15
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

export default ScanScreen;