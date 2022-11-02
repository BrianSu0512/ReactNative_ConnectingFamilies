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


function AddPrescriptionScreen({route,navigation: { goBack },navigation}) {
    const patientData =route.params.paramPatient

    const[name, setName] = useState('');
    const[dose, setDose]=useState('');
    const[routee, setRoutee]=useState('');
    const[frequency, setFrequency]=useState('');
    const[beginDate, setBeginDate]=useState('');
    const[endDate, setEndDate]=useState('');
    const[time, setTime]=useState('');

    const[nameError, setNameError]=useState("");
    const[doseError, setDoseError]=useState("");
    const[routeeError, setRouteeError]=useState('');
    const[frequencyError, setFrequencyError]=useState('');
    const[beginDateError, setBeginDateError]=useState('');
    const[endDateError, setEndDateError]=useState('');
    const[timeError, setTimeError]=useState('');

    const doErrorCheck = () => {
        setNameError(name.length>0 ? "": "Please set a valid Prescription Name");
        setDoseError(dose.length>0 ? "": "Please set a valid Dosage");
        setRouteeError(routee.length>0 ? "": 'Please set a valid Prescription Route')
        setFrequencyError(frequency.length>0 ? "" : "Please set a valid Frequency")
        setBeginDate(beginDate.length>0 ? "" : "Please set a date for when prescription intake begin")
        setTimeError(timeError>0? "": "Please set at least 1 time in the day to give medicine")
        return ((name.length>0) && (dose.length>0) &&(routee.length>0)&&(frequency.length>0) )
    }

    const addPrescription = async () => {
        let commonData = DataManager.getInstance();

        const newdetial = {
            pId:patientData.PatientID,
            name:name,
            dose:dose,
            route:routee,
            frequency:frequency,
            date:'2001-04-25',
            stopDate:'0000-00-00',
            time:time
        };

        await commonData.addPatientData(newdetial, 'prescription');

        await commonData.getPatientData('GetPrescription');
        Alert.alert("Success", "Successfully add patient's data", [{text: 'OK', onPress:()=>navigation.navigate('Prescription',{paramPatient:patientData})}])
    }

    /*<AppText style={styles.subheading}>Begin Date</AppText>
        <TextInput 
        style={styles.inputText}
        value={beginDate}
        onChangeText={(inputText) => setBeginDate(inputText)}/>
        <View style={styles.fullLine} />

        <AppText style={styles.subheading}>End Date</AppText>
        <TextInput 
        style={styles.inputText}
        value={endDate}
        onChangeText={(inputText) => setEndDate(inputText)}/>
        <View style={styles.fullLine} />*/

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
   <AppText style={styles.Title}>Add Prescription</AppText>
   <View style={styles.hairline} />

   <AppText style={styles.subheading}>Prescription Name</AppText>
   <TextInput 
      style={styles.inputText}
      value={name}
      onChangeText={(inputText) => setName(inputText)}/>

        <View style={styles.fullLine} />

        <AppText style={styles.subheading}>Dosage</AppText>
        <TextInput 
         style={styles.inputText}
         value={dose}
         onChangeText={(inputText) => setDose(inputText)}/>

        <View style={styles.fullLine} />

        <AppText style={styles.subheading}>Route</AppText>
        <TextInput 
        style={styles.inputText}
        value={routee}
        onChangeText={(inputText) => setRoutee(inputText)}/>
                <View style={styles.fullLine} />

        <AppText style={styles.subheading}>Frequency</AppText>
        <TextInput 
        style={styles.inputText}
        value={frequency}
        onChangeText={(inputText) => setFrequency(inputText)}/>
        <View style={styles.fullLine} />

      <View style={styles.center}>
      <AppButton style={styles.button}title="Done" onPress={() => { 
                        if(doErrorCheck()){
                            addPrescription();
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

export default AddPrescriptionScreen;