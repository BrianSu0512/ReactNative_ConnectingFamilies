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


function EditPrescriptionScreen({route,navigation: { goBack },navigation}) {
    const prescriptionData =route.params.paramPatient
    const patientData = route.params.paramPatientData

    const[name, setName] = useState(prescriptionData.PrescripName);
    const[dose, setDose]=useState(prescriptionData.PrescripDose);
    const[routee, setRoutee]=useState(prescriptionData.PrescripRoute);
    const[frequency, setFrequency]=useState(prescriptionData.PrescripFrequency);
    const[beginDate, setBeginDate]=useState(prescriptionData.BeginDate);
    const[endDate, setEndDate]=useState(prescriptionData.EndDate);
    //const[time, setTime]=useState(prescriptionData.PrescripFrequency);

    const[nameError, setNameError]=useState("");
    const[doseError, setDoseError]=useState("");
    const[routeError, setRouteError]=useState("")
    const[frequencyError, setFrequencyError]=useState("");
    const[beginDateError, setBeginDateError]=useState("");

    const doErrorCheck = () => {
        console.log(prescriptionData);
        setNameError(name.length>0 ? "": "Please set a Name");
        setDoseError(dose.length>0 ? "": "Please set a valid Dose");
        setRouteError(routee.length>0? "": "Please set a valid Route");
        setFrequencyError(frequency.length>0? "": "Please set a valid Frequency")
        setBeginDateError(beginDate.length>0? "": "Please set a valid Begin Date")
        return ((name.length>0) && (dose.length>0) && (routee.length>0) && (frequency.length > 0) && (beginDate.length > 0))
    }

    const editPrescription = async () => {
        let commonData = DataManager.getInstance();
        const newdetail = {  
            id:prescriptionData.PrescripID,  
            name:name,
            dose:dose,
            route:routee,
            frequency:frequency
        };

        await commonData.editPatientData(newdetail, 'prescription');
        Alert.alert("Success", "Successfully edit patient's history", [{text: 'OK', onPress:()=>navigation.navigate('Prescription',{paramPatient:patientData})}])

    }

    /*<AppText style={styles.subheading}>Time (24 hour format, separate by comma)</AppText>
        <TextInput 
        style={styles.inputText}
        value={frequency}
        onChangeText={(inputText) => setFrequency(inputText)}/>
        <View style={styles.fullLine} />
        
      <AppText style={styles.subheading}>Begin Date</AppText>
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
   <AppText style={styles.Title}>Edit Prescription</AppText>
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
      <AppButton style={styles.button}title="Done" onPress={async () => { 
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
     }
     
     })

export default EditPrescriptionScreen;