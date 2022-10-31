import React , {useState} from 'react';
import { View,StyleSheet,TouchableOpacity,Text,FlatList, Alert,Image} from 'react-native';
import { date } from 'yup';
import AppButton from '../Components/AppButton';
import AppColour from '../Components/AppColour';
import AppIcon from '../Components/AppIcon';

import AppMlog from '../Components/AppMlog';

import AppText from '../Components/AppText';
import DataManager from '../config/DataManager';
import AppScreen from './AppScreen';


function MedicalLogScreen({route,navigation: { goBack },navigation}) {
    const patientid =route.params.paramPatient

    console.log("line18",patientid)

    const getPrescription = () => {
        let commonData = DataManager.getInstance();
        let userPrescription=commonData.getDatePrescription(patientid,1);
        return userPrescription;    
    }

    const getDatePrescription = () => {
        let commonData = DataManager.getInstance();
        let userPrescription=commonData.getDatePrescription(patientid,0);
        return userPrescription;    
    }

    const [prescription, setPrescription]=useState(getPrescription())
    const yest=getDatePrescription()

    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
    ];

    let today = new Date();
    let tdate = today.getDate()+'/'+monthNames[today.getMonth()]+'/'+today.getFullYear();

    let ydate = today.getDate() -1 +'/'+monthNames[today.getMonth()]+'/'+today.getFullYear();
    console.log(ydate)
    const [date, setDate]=useState(tdate)

    const [check, setCheck]=useState(false)

    const isToday = date === tdate 
    ?  <View style={styles.rowcontainer}>
    <AppText style={styles.time}>Today:</AppText>
    <AppText style={styles.time}>{date}</AppText>
   </View>
    :  <View style={styles.rowcontainer}>
    <AppText style={styles.time}>Yesterday:</AppText>
    <AppText style={styles.time}>{date}</AppText>
   </View>

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

      <AppText style={styles.Title}>Medical Log</AppText>
       <View style={styles.hairline} />

        {isToday}
      

       <View style={styles.rowcontainer}>
        <AppButton style={styles.button} onPress={()=>[setPrescription(yest), setDate(ydate),setCheck(true)]} title="Yesterday"/>
        <AppButton style={styles.button} onPress={()=>setPrescription(getPrescription(), setDate(tdate), setCheck(false))}title="Today"/>
       </View>


       <FlatList
            style={styles.list}
            data={prescription}
            keyExtractor={Prescriptions=>Prescriptions.id.toString()}
            renderItem={({item})=>
            <AppMlog prescription={item} check={check}/>
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
    Title:{
        fontStyle:'italic',
        marginTop:5,
        marginLeft:15,
        fontSize:22,
    },
    hairline: {
        backgroundColor: '#A2A2A2',
        height: 2,
        width: 340,
        marginLeft: 15
    }
    ,
    rowcontainer:{
       flexDirection:'row',
 
    },
    time:{
        fontStyle:'italic',
        marginTop:5,
        marginLeft:15,
    },
    button:{
        width:110,
        height:40,
        borderRadius:10,
        paddingLeft:10,
        marginRight:10,
        marginLeft:10,
        marginTop:15,
        marginBottom:15
    }
})
export default  MedicalLogScreen;