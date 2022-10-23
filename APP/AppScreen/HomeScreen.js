import React , {useEffect, useState} from 'react';
import { View,StyleSheet,TouchableOpacity,Text,FlatList, Alert,Image } from 'react-native';
import AppButton from '../Components/AppButton';
import AppColour from '../Components/AppColour';
import AppText from '../Components/AppText';
import AppScreen from './AppScreen';
import AppIcon from '../Components/AppIcon';
import DataManager from '../config/DataManager';
import AppCard from '../Components/AppCard';

function HomeScreen({navigation,route}) {

    const [Patient, setPatient] = useState([]);

    function getPatients(){
        let commonData = DataManager.getInstance();
        setPatient(commonData.patients)
    }

    useEffect(() =>{
        getPatients();
    });
 
    return (
       <AppScreen>
         <View style={styles.heading}>
    
       <View>
           <Image source={require("../assets/logo.jpg")} style={styles.logo}/>
           <AppText style={styles.logoText}>Connecting Families</AppText>
       </View>
 
        </View>   

       <AppText style={styles.Title}>Home</AppText>
        <View style={styles.hairline} />

         <View style={styles.container}>
            
                <FlatList 
                    style={styles.list}
                    data ={Patient}
                    keyExtractor = {Patient => Patient.PatientID}
                    renderItem = {({item}) => 
                   
                    <AppCard
                            name={item.PatientName} 
                            referTo={item.PatientReferTo}
                            referredBy={item.PatientReferBy}
                            rNbNO={item.PatientRoomNo}
                            onPress={()=>navigation.navigate("PersonalProfile",{
                                paramPatient: item
                            })}
                            onPress1={()=>navigation.navigate("MedicalHistory",{
                                paramPatient: item
                            })}
                            onPress2={()=>navigation.navigate("Prescription",{
                                paramPatient: item
                            })}
                            onPress3={()=>navigation.navigate("MedicalLog",{
                                paramPatient: item
                            })}
                            onSwipeLeft={() => (
                                <View style={styles.deleteView}>
                                    <TouchableOpacity onPress={() => handleDelete(item)}>
                                        <AppIcon name="trash-can" size={50}/> 
                                    </TouchableOpacity>
                                </View>)}/>}

                /> 
            </View>         
       </AppScreen>
    );
}
const styles = StyleSheet.create({
    heading:{
        flexDirection:"row",
        width:230,
        marginLeft:110,
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
    textContainer:{
        height:300,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'flex-end',
        marginBottom:100
    },
   subText:{
        
        fontSize:15,
        fontStyle: 'italic',
        fontFamily:Platform.OS==='android' ?"monospace" :'Bradley Hand',
        color:AppColour.black
    },
    buttonContainer:{
        backgroundColor:'red',
        flexDirection:"row",
        width:250,
        justifyContent:'space-between',
        marginLeft:60,
        paddingTop:30,
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
    },
    
})

export default HomeScreen;