import React , {useState} from 'react';
import { View,StyleSheet,TouchableOpacity,Text,FlatList, Alert,Image } from 'react-native';
import { date } from 'yup';
import AppButton from '../Components/AppButton';
import AppColour from '../Components/AppColour';
import AppIcon from '../Components/AppIcon';
import AppMHisotry from '../Components/AppMHisotry';
import AppProfile from '../Components/AppProfile';
import AppText from '../Components/AppText';
import DataManager from '../config/DataManager';
import AppScreen from './AppScreen';


function MedicalHistoryScreen({route,navigation: { goBack },navigation}) {
    const patientid =route.params.paramPatient

    console.log(route.params)
    const getMHisotry = () => {
        let commonData = DataManager.getInstance();
        let userHistory=commonData.getMHisotry(patientid);
        return userHistory;    
    }

    const getlevel = () => {
        let commonData = DataManager.getInstance();
        let userid = commonData.getUserID();
        let level=commonData.getLevel(userid);
        return level;    
    }
const level =getlevel()


    const history=getMHisotry();
    console.log('line34',history)



    const plus = level ==='Privilege Level 1' 
    ? <></> 
    : <TouchableOpacity onPress={()=>{navigation.navigate('AddHistory',{paramPatient:patientid})}}>
        <AppIcon name="plus-circle-outline" size={40} style={{marginDown:10}}/>
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
        <View style={styles.rowcontainer}>
        <AppText style={styles.Title}>Medical History</AppText>
            {plus}
        </View>
     
       <View style={styles.hairline} />



            <FlatList 
                style={styles.list}
                data={history}
                keyExtractor={medicalHistories=>medicalHistories.pId.toString()}
                renderItem={({item})=>
                <AppMHisotry 
                data={item} 
                level={level}
                onPress={()=>navigation.navigate("Prescription",{
                    paramPatient: item.pId,
                    paramPatientid:item.id
                })}
                onPress1={()=>navigation.navigate('EditHistoryScreen',{
                    paramPatient:item.pId,
                    paramPatientid:item.id})}

                onSwipeLeft={() => (
                        <View style={styles.deleteView}>
                            <TouchableOpacity>
                                <AppIcon name="trash-can" size={50}/> 
                            </TouchableOpacity>
                        </View>)}
                />
            
            }
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
    headingIcon:{
        marginTop:10,

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
    rowcontainer:{
        flexDirection:'row',
        width:350,
        justifyContent:'space-between'
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

    }, deleteView:{
        width:75,   
        justifyContent:"center",
        alignItems:"center",
    }
})
export default MedicalHistoryScreen;