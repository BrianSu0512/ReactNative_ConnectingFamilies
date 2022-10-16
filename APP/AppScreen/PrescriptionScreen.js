import React , {useState} from 'react';
import { View,StyleSheet,TouchableOpacity,Text,FlatList, Alert,Image,SectionList } from 'react-native';
import { date } from 'yup';
import AppButton from '../Components/AppButton';
import AppColour from '../Components/AppColour';
import AppIcon from '../Components/AppIcon';
import AppMHisotry from '../Components/AppMHisotry';
import AppPrescription from '../Components/AppPrescription';
import AppProfile from '../Components/AppProfile';
import AppText from '../Components/AppText';
import DataManager from '../config/DataManager';
import AppScreen from './AppScreen';


function PrescriptionScreen({route,navigation: { goBack },navigation}) {

    
    const pID =route.params.paramPatient
    const patientid =route.params.paramPatient
    console.log(patientid)
  
    const getlevel = () => {
        let commonData = DataManager.getInstance();
        let userid = commonData.getUserID();
        let level=commonData.getLevel(userid);
        return level;    
    }
const level =getlevel()

  const getMHisotry = () => {
    let commonData = DataManager.getInstance();
    let userHistory=commonData.getMHisotry(pID);
    return userHistory;    
}

     const history =getMHisotry();
    
console.log("tttt",history)
    const getPrescription = () => {
        let commonData = DataManager.getInstance();
        let userPrescription=commonData.getPrescription(pID);
        return userPrescription;    
    }


    const prescription=getPrescription();

    const plus = level ==='Privilege Level 1' 
    ? <></> 
    : <TouchableOpacity onPress={()=>{navigation.navigate('AddPrescription',{paramPatient:patientid})}}>
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
        <AppText style={styles.Title}>Medical Prescription</AppText>
            {plus}
        </View>
       <View style={styles.hairline} />

        <FlatList
            style={styles.list}
            data={prescription}
            keyExtractor={Prescriptions=>Prescriptions.id.toString()}
            renderItem={({item})=>
            <AppPrescription 
            prescription={item} 
            history={history} 
            level={level}
            onPress={()=>{navigation.navigate('MedicalLog',{paramPatient:item.pId})}}
            onPress1={()=>navigation.navigate('EditHistoryScreen',{
                paramPatient:item.pId,
                paramPatientid:item.id})}
            onSwipeLeft={() => (
                <View style={styles.deleteView}>
                    <TouchableOpacity onPress={() => handleDelete(item)}>
                        <AppIcon name="trash-can" size={50} style={{marginTop:40,height:80,}}/> 
                    </TouchableOpacity>
                </View>)}/>
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
        marginLeft:30,
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
    }
})
export default PrescriptionScreen;