import React , {useState} from 'react';
import { View,StyleSheet,TouchableOpacity,Text,TextInput , Alert,Image,SectionList } from 'react-native';
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


function EditHistoryScreen({route,navigation: { goBack },navigation}) {
    const history =route.params.paramPatient
    const patientData =route.params.paramPatientData
   
    const[diagnosis, setDiagnosis] = useState(history.Diagnosis);
    const[date, setDate]=useState(history.BeginDate);
    const[stopDate, setStopDate]=useState(history.EndDate);

    const[diagnosisError, setDiagnosisError]=useState("");
    const[dateError, setDateError]=useState("");


    const doErrorCheck = () => {
        setDiagnosisError(diagnosis.length>0 ? "": "Please set a valid name");
        setDateError(date.length>0 ? "": "Please set a valid Date");
     
        return ((diagnosis.length>0) && (date.length>0) )
    }

    const editPrescription = async () => {
   
        const newdetail = {
            PatientID: history.PatientID,
            MedicHistID: history.MedicHistID,
            Diagnosis:diagnosis,
            BeginDate:date,
            EndDate:stopDate,
        };

        let commonData = DataManager.getInstance();
        await commonData.editPatientData(newdetail, 'history')

        Alert.alert("Success", "Successfully edit patient's history", [{text: 'OK', onPress:()=>navigation.navigate('MedicalHistory',{paramPatient:patientData})}])

    }

    return (
        <AppScreen>
        <View style={styles.heading}>
       
           <TouchableOpacity onPress={()=>goBack()}>
           
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
   <AppText style={styles.Title}>Edit History</AppText>
   <View style={styles.hairline} />

   <AppText style={styles.subheading}>Diagnosis</AppText>
   <TextInput 
      style={styles.inputText}
      value={diagnosis}
      onChangeText={(inputText) => setDiagnosis(inputText)}/>

        <View style={styles.fullLine} />

        <AppText style={styles.subheading}>Date</AppText>
        <TextInput 
         style={styles.inputText}
         value={date}
         onChangeText={(inputText) => setDate(inputText)}/>

        <View style={styles.fullLine} />

        <AppText style={styles.subheading}>Stop Date</AppText>
        <TextInput 
        style={styles.inputText}
        value={stopDate}
        onChangeText={(inputText) => setStopDate(inputText)}/>

      <View style={styles.fullLine} />
      <View style={styles.center}>
      <AppButton style={styles.button}title="Done" onPress={ async() => { 
                        if(doErrorCheck()){
                            await editPrescription();
                        }
                     }}/>
      </View>
             
      </AppScreen>
    );
}
const styles = StyleSheet.create({
    heading:{
        flexDirection:"row",
        width:220,
        marginLeft:20,
        paddingTop:10,
        justifyContent:'space-between',
     
     },
     headingIcon:{
         marginTop:10,
     
     },
     logo:{
        marginTop:10,
        marginLeft:35,
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
        marginLeft: 15,
        marginBottom: 15
     },
     fullLine: {
        backgroundColor: '#A2A2A2',
        height: 2,
        width: 500,
        marginBottom: 15
     },
     textStyle:{
        fontSize:18,
        color:"#D6F8FF",
        textTransform:'none',
        marginTop:10,
        marginLeft:31
     },
     inputText:{
        fontSize:20,
        fontFamily: Platform.OS === 'android' ? "monospace" : "Avenir-Roman",
        color:AppColour.black,
        marginTop:20,
        marginBottom:10,
        marginLeft:20,
     },rowcontianer:{
        flexDirection:'row'
     },image:{
        height:80,
        width:100,
        marginLeft: 20,
        marginBottom:10,
        borderRadius:50
     },button:{
        width:80,
     },center:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
     }
     
     })

export default EditHistoryScreen;