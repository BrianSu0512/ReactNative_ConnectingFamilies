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


    const patientid =route.params.paramPatient



  const getMHisotry = () => {
    let commonData = DataManager.getInstance();
    let userHistory=commonData.getMHisotry(patientid);
    return userHistory;    
}

     const history =getMHisotry();
    
     const pID=history[0].pId

    const getPrescription = () => {
        let commonData = DataManager.getInstance();
        let userPrescription=commonData.getPrescription(pID);
        return userPrescription;    
    }


    const prescription=getPrescription();



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

      <AppText style={styles.Title}>Medical Prescription</AppText>
       <View style={styles.hairline} />

        <FlatList
            style={styles.list}
            data={prescription}
            keyExtractor={Prescriptions=>Prescriptions.id.toString()}
            renderItem={({item})=>
            <AppPrescription prescription={item} history={history} onPress={()=>{navigation.navigate('MedicalLog',{paramPatient:item.id})}}/>
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
export default PrescriptionScreen;