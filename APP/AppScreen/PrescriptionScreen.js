import React , {useState} from 'react';
import { View,StyleSheet,TouchableOpacity,Text,FlatList, Alert,Image, Animated} from 'react-native';
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

import Swipeable from 'react-native-gesture-handler/Swipeable'


function PrescriptionScreen({route,navigation: { goBack },navigation}) {

    const patient =route.params.paramPatient

    const getlevel = () => {
        let commonData = DataManager.getInstance();
        let userid = commonData.getUserID();
        let level=commonData.getLevel(userid);
        return level;    
    }

    const level =getlevel()

    const getPrescription = () => {
        let commonData = DataManager.getInstance();
        let userPrescription=commonData.getPrescription(patient.PatientID);
        return userPrescription;    
    }

    const prescription=getPrescription();

    const plus = level ==='Privilege Level 1' 
    ? <></> 
    : <TouchableOpacity onPress={()=>{navigation.navigate('AddPrescription',{paramPatient:patientid})}}>
        <AppIcon name="plus-circle-outline" size={40} style={{marginDown:10}}/>
      </TouchableOpacity>
  
  const RightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [0.7, 0]
    })
    return (
      <>
        <View style={{ justifyContent: 'center' }}>
          <Animated.View
            style={{
              color: 'white',
              paddingHorizontal: 10,
              fontWeight: '600',
              transform: [{ scale }]
            }}>
             <TouchableOpacity>
                    <AppIcon name="trash-can" size={50} style={{height:80,}}/> 
            </TouchableOpacity>
          </Animated.View>
        </View>
        <View style={{justifyContent: 'center' }}>
        <Animated.View
            style={{
              color: 'white',
              paddingHorizontal: 10,
              fontWeight: '600',
              transform: [{ scale }]
            }}>
             <TouchableOpacity>
                    <AppIcon name="pencil" size={40} style={{height:80,}}/> 
            </TouchableOpacity>
          </Animated.View>
      </View>
    </>
  )
 }
 
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
       <Swipeable renderRightActions={RightActions}>
        <AppText style={styles.Title}>Medical Prescription</AppText>
        </Swipeable>
            {plus}
        </View>
       <View style={styles.hairline} />

        <FlatList
            style={styles.list}
            data={prescription}
            keyExtractor={Prescriptions=>Prescriptions.PrescripID}
            renderItem={({item})=>
 
            <AppPrescription 
            prescription={item} 
            //history={history} 
            level={level}
            onPress={()=>{navigation.navigate('MedicalLog',{paramPatient:item.pId})}}
            onPress1={()=>navigation.navigate('EditHistoryScreen',{
                paramPatient:item.pId,
                paramPatientid:item.id})}
            
            onSwipeLeft={(progress, dragX) => {
                const scale = dragX.interpolate({
                  inputRange: [-100, 0],
                  outputRange: [0.7, 0]
                })
                return (
                  <>
                    <View style={{ justifyContent: 'center' }}>
                      <Animated.View
                        style={{
                          paddingHorizontal: 10,
                          transform: [{ scale }]
                        }}>
                         <TouchableOpacity>
                                <AppIcon name="trash-can" size={50} style={{height:80,}}/> 
                        </TouchableOpacity>
                      </Animated.View>
                    </View>
                    <View style={{justifyContent: 'center' }}>
                    <Animated.View
                        style={{
                          paddingHorizontal: 10,
                          transform: [{ scale }]
                        }}>
                         <TouchableOpacity  onPress={()=>navigation.navigate('EditPrescription',{
                                                paramPatient:item.pId,
                                                paramPatientid:item.id})}>
                                <AppIcon name="pencil" size={40} style={{height:80,}}/> 
                        </TouchableOpacity>
                      </Animated.View>
                  </View>
                </>
              )
             }}
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