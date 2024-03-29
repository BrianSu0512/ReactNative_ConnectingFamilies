import React , {useState} from 'react';
import { View,StyleSheet,TouchableOpacity,Text,FlatList, Alert,Image } from 'react-native';
import AppButton from '../Components/AppButton';
import AppColour from '../Components/AppColour';
import AppText from '../Components/AppText';
import AppScreen from './AppScreen';
import AppIcon from '../Components/AppIcon';
import DataManager from '../config/DataManager';
import AppCard from '../Components/AppCard';

function MHomeScreen({navigation,route}) {

        const getPatients = () => {
            let commonData = DataManager.getInstance();
            let userPatients=commonData.getAllPatients()
            return userPatients;
                
        }


        const patients=getPatients();

        console.log('lininw13',patients)
   
 
    return (
       <AppScreen>
         <View style={styles.heading}>
    
       <View>
           <Image source={require("../assets/logo.jpg")} style={styles.logo}/>
           <AppText style={styles.logoText}>Connecting Families</AppText>
       </View>
 
        </View>   
        <View style={styles.rowcontainer}>
        <AppText style={styles.Title}>Manager's Home</AppText>
        <TouchableOpacity onPress={()=>{navigation.navigate('AddPatient')}}>
        <AppIcon name="plus-circle-outline" size={40} style={{marginDown:10}}/>
        </TouchableOpacity>
        </View>
      
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
        width:230,
        marginLeft:110,
        paddingTop:10,
        justifyContent:'space-between',

    },
    logo:{
        marginTop:10,
        marginLeft:40,
        width:50,
        height:50,
    },
    logoText:{
        fontSize:13,
        paddingLeft:5,
        fontStyle:'italic'
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
    rowcontainer:{
        flexDirection:'row',
        width:350,
        justifyContent:'space-between'
    },
    
})

export default MHomeScreen;