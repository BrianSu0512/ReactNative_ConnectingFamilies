import React , {useState} from 'react';
import { View,StyleSheet,TouchableOpacity,Text,FlatList, Alert,Image } from 'react-native';
import AppButton from '../Components/AppButton';
import AppColour from '../Components/AppColour';
import AppText from '../Components/AppText';
import AppScreen from './AppScreen';
import AppIcon from '../Components/AppIcon';
import DataManager from '../config/DataManager';
import AppCard from '../Components/AppCard';

function CPatientScreen({navigation,navigation:{goBack},route}) {
console.log("ther",route.params.paramCarer)
        const getPatients = () => {
            let commonData = DataManager.getInstance();
            let userPatients=commonData.getPatients(route.params.paramCarer).filter((patient)=>patient.userid===route.params.paramCarer)
            return userPatients;
                
        }

        const newpatients=getPatients();

        console.log(newpatients)

        const pId =newpatients.id


        const getMHisotry = () => {
            let commonData = DataManager.getInstance();
            let userHistory=commonData.getMHisotry(pId);
            return userHistory;    
        }
    
    
        const history=getMHisotry();


        const[patients, setPatients] =  useState(newpatients);
 
    return (
       <AppScreen>
        <View style={styles.heading}>
      
      <TouchableOpacity onPress={() => navigation.navigate("Carers")}>
      
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

       <AppText style={styles.Title}>Carer's Patient</AppText>
        <View style={styles.hairline} />

            
                <FlatList 
                    style={styles.list}
                    data ={patients}
                    keyExtractor = {patients => patients.id.toString()}
                    renderItem = {({item}) => 
                   
                    <AppCard
                            name={item.name} 
                            image={item.image}
                            referTo={item.referTo}
                            referredBy={item.referredBy}
                            rNbNO={item.rNbNO}
                            note={item.note}
                            onPress={()=>navigation.navigate("MPersonalProfile",{
                                paramPatient: item.id
                            })}
                            onPress1={()=>navigation.navigate("MedicalHistory",{
                                paramPatient: item.id
                            })}
                            onPress2={()=>navigation.navigate("Prescription",{
                                paramPatient: item.id
                            })}
                            onPress3={()=>navigation.navigate("MedicalLog",{
                                paramPatient: item.id
                            })}
                            onSwipeLeft={() => (
                                <View style={styles.deleteView}>
                                    <TouchableOpacity onPress={() => handleDelete(item)}>
                                        <AppIcon name="trash-can" size={50}/> 
                                    </TouchableOpacity>
                                </View>)}/>}

                /> 
                 
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

export default CPatientScreen;