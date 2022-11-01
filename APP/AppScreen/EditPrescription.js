import React , {useState} from 'react';
import { View,StyleSheet,TouchableOpacity,Text,TextInput , Alert,Image,SectionList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
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
    const pID =route.params.paramPatient
    console.log('fsdf',pID)


    const id =route.params.paramPatientid

    console.log('dsd',id)

   

    const getlevel = () => {
        let commonData = DataManager.getInstance();
        let userid = commonData.getUserID();
        let level=commonData.getLevel(userid);
        return level;    
    }
    const level =getlevel()

  const getMHisotry = () => {
    let commonData = DataManager.getInstance();
    let userHistory=commonData.getHisotry(pID);
    return userHistory;    
}

     const history =getMHisotry();
   
    const getPrescription = () => {
        let commonData = DataManager.getInstance();
        let userPrescription=commonData.getSpecificPres(id);
        return userPrescription;    
    }


    const prescription=getPrescription();
   

    const[name, setName] = useState(prescription[0].name);
    const[dose, setDose]=useState(prescription[0].dose);
    const[routee, setRoutee]=useState(prescription[0].route);
    const[frequency, setFrequency]=useState(prescription[0].frequency);
    const[note, setNote]=useState(prescription[0].note);



    const[nameError, setNameError]=useState("");
    const[doseError, setDoseError]=useState("");



    const doErrorCheck = () => {
        setNameError( name.length>0 ? "": "Please set a Name");
        setDoseError(dose.length>0 ? "": "Please set a valid Dose");
     
        return ((name.length>0) && (dose.length>0) )
    }

    const editPrescription = () => {
        let commonData = DataManager.getInstance();

     
        const newdetial = {
            
            id:id,  
            pId:pID,
            name:name,
            dose:dose,
            route:routee,
            frequency:frequency,
            note:note,
            time:["6:00","12:00","18:00"]
        };

        
        commonData.editPrescription(newdetial);
        let all = commonData.getPrescription(pID);
        console.log("line show ", all)
        

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
   <AppText style={styles.Title}>Edit Prescription</AppText>
   <View style={styles.hairline} />

   <ScrollView>
   <AppText style={styles.subheading}>name</AppText>
   <TextInput 
      style={styles.inputText}
      value={name}
      onChangeText={(inputText) => setName(inputText)}/>

        <View style={styles.fullLine} />

        <AppText style={styles.subheading}>Dose</AppText>
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

        <AppText style={styles.subheading}>Note</AppText>
        <TextInput 
        style={styles.inputText}
        value={note}
        onChangeText={(inputText) => setNote(inputText)}/>

        

      <View style={styles.fullLine} />
      <View style={styles.center}>
      <AppButton style={styles.button}title="Done" onPress={() => { 
                        if(doErrorCheck()){
                            editPrescription();
                            navigation.navigate('Prescription',{paramPatient:id})
                        }
                     }}/>
      </View>
            
   </ScrollView>

   
             
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