import React,{useState} from 'react';
import { View,StyleSheet,TouchableOpacity, Image,TextInput,ScrollView} from 'react-native';
import AppButton from '../Components/AppButton';
import AppColour from '../Components/AppColour';
import AppIcon from '../Components/AppIcon';
import AppText from '../Components/AppText';


import * as ImagePicker from 'expo-image-picker';
import DataManager from '../config/DataManager';



function AppPForm({onPress,navigation}) {
    const[name, setName] = useState('');
    const[age, setAge]=useState('');
    const[gender, setGender]=useState('');
    const[bloodType, setBloodType]=useState('');
    const[dob, setDob]=useState('');
    const[address, setAddress]=useState('');
    const[phone, setPhone]=useState('');
    const[image, setImage] = useState('null');
    const[eName, seteName]=useState('');
    const[relationship, setRelationship]=useState('');
    const[ephone, setePhone]=useState('');
    const[eAddress, seteAddress]=useState('');

    const[referto, setReferto]=useState('');
    const[referby, setReferby] = useState('');
    const[carer, setCarer] = useState('');
    const[roomNO, setRoomNO]=useState('');
    const[note, setNote]=useState('');

    const[medicare, setemedicare]=useState('');
    const[Insurant, setInsurant]=useState('');



    const[nameError, setNameError]=useState("");

    const[phoneError, setPhoneError]=useState("");
    const[imageError, setImageError]=useState("");

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();


        if (pickerResult.cancelled === true) {
            return;
        }
        setImage(pickerResult.uri);
       
    }

    const doErrorCheck = () => {
        setNameError( name.length>0 ? "": "Please set a valid Caption");
        setPhoneError(phone.length>0 ? "": "Please set a valid Phone number");
        setImageError(image? "": "Please pick an image");
        return ((name.length>0) && (phone.length>0) && (image)? true: false)
    }

    const addPatient = () => {
        let commonData = DataManager.getInstance();
        let user = commonData.getUserID();


        const patients = commonData.getAllPatients(user);
        const id = patients.length+1;

        const uid = commonData.getPatientCarerID(carer);


        const newdetial = {
            userid:uid,
            referTo:referto,
            referredBy:referby,
            rNbNO:roomNO,
            note:note,
            id:id,
            name:name,
            age:age,
            gender:gender,
            bloodType:bloodType,
            dob:dob,
            address:address,
            phone:phone,
            image:image,
            eName:eName,
            relationship:relationship,
            ePhone:ephone,
            eAddress:eAddress,
            medicare:medicare,
            Insurant:Insurant
        };

        
        commonData.addPatient(newdetial);
        const userdetials = commonData.getPatient(id);
        // const allP=commonData.getAllPatients()

        console.log("line102",userdetials)
        // console.log("all",allP)

    }

    const picture=image === 'null' ? <AppIcon name="image" size={80} />
                          : <Image source={{uri: image.path}} style={styles.image}/>
    return (
    <ScrollView>
    <View style={styles.rowcontianer1}>
        <TouchableOpacity style={styles.imageButton} onPress={openImagePickerAsync}> 
        {picture}
        </TouchableOpacity>

    </View>
    <View style={styles.fullLine} />
    <View style={styles.rowcontianer1}>
        <View style={styles.rowcontianer}>
        
        <AppText style={styles.subheading}>Patient's Name</AppText>
        <TextInput 
        style={styles.inputText}
        placeholder="Name"
        value={name}
        onChangeText={(inputText) => setName(inputText)}/>
        </View>
      
        <View style={styles.rowcontianer}>
        <AppText style={styles.subheading}>Carer's Name</AppText>
            <TextInput 
            style={styles.inputText}
            placeholder="Carer's Name"
            value={carer}
            onChangeText={(inputText) => setCarer(inputText)}/>
        </View>
    </View>

    <View style={styles.fullLine} />

    <View style={styles.rowcontianer1}>
        <View style={styles.rowcontianer}>
        
        <AppText style={styles.subheading}>Refer To</AppText>
        <TextInput 
         style={styles.inputText}
         placeholder="Refer To"
         value={referto}
         onChangeText={(inputText) => setReferto(inputText)}/>
        </View>
      
        <View style={styles.rowcontianer}>
        <AppText style={styles.subheading}>Referred By</AppText>
            <TextInput 
            style={styles.inputText}
            placeholder="Referred By"
            value={referby}
            onChangeText={(inputText) => setReferby(inputText)}/>
        </View>
    </View>

    <View style={styles.fullLine} />


    <AppText style={styles.subheading}>Room No. / Building</AppText>
        <TextInput 
        style={styles.inputText}
        placeholder="Room No. / Building"
        value={roomNO}
        onChangeText={(inputText) => setRoomNO(inputText)}/>
  
    <View style={styles.fullLine} />

        <AppText style={styles.subheading}>Note</AppText>
        <TextInput 
         style={styles.inputText}
         placeholder="Note"
         value={note}
         onChangeText={(inputText) => setNote(inputText)}/>
       
    <View style={styles.fullLine} />

    <AppText style={styles.Title}>Patient Details</AppText>

    <View style={styles.rowcontianer1}>
        <View style={styles.rowcontianer}>
        
        <AppText style={styles.subheading}>Gender</AppText>
        <TextInput 
         style={styles.inputText}
         placeholder="Gender"
         value={gender}
         onChangeText={(inputText) => setGender(inputText)}/>
        </View>
      
        <View style={styles.rowcontianer}>
        <AppText style={styles.subheading}>BloodType</AppText>
            <TextInput 
            style={styles.inputText}
            placeholder="BloodType"
            value={bloodType}
            onChangeText={(inputText) => setBloodType(inputText)}/>
        </View>
    </View>

    <View style={styles.fullLine} />

    <View style={styles.rowcontianer1}>
    <View style={styles.rowcontianer}>
    <AppText style={styles.subheading}>Date of Birth</AppText>
        <TextInput 
        style={styles.inputText}
        placeholder="Date of Birth"
        value={dob}
        onChangeText={(inputText) => setDob(inputText)}/>
    </View>
    <View style={styles.rowcontianer}>
        <AppText style={styles.subheading}>Age</AppText>
        <TextInput 
         style={styles.inputText}
         placeholder="Age"
         value={age}
         onChangeText={(inputText) => setAge(inputText)}/>
     </View>

    </View>

  
    
    <View style={styles.fullLine} />
    
    <View style={styles.rowcontianer}>
    <AppText style={styles.subheading}>Phone Number</AppText>
        <TextInput 
        style={styles.inputText}
        placeholder="Phone Number"
        value={phone}
        onChangeText={(inputText) => setPhone(inputText)}/>
    </View>

    <View style={styles.fullLine} />

    <View style={styles.rowcontianer}>
    <AppText style={styles.subheading}>Medicare Number</AppText>
        <TextInput 
        style={styles.inputText}
        placeholder="Medicare Number<"
        value={medicare}
        onChangeText={(inputText) => setemedicare(inputText)}/>
    </View>

    <View style={styles.fullLine} />

    <View style={styles.rowcontianer}>
    <AppText style={styles.subheading}>Insurant Number</AppText>
        <TextInput 
        style={styles.inputText}
        placeholder="Insurant Number"
        value={Insurant}
        onChangeText={(inputText) => setInsurant(inputText)}/>
    </View>

    <View style={styles.fullLine} />

    <AppText style={styles.subheading}>Address</AppText>
        <TextInput 
        style={styles.inputText}
        placeholder="Address"
        value={address}
        onChangeText={(inputText) => setAddress(inputText)}/>

<View style={styles.fullLine} />

    <AppText style={styles.Title}>Emergency Details</AppText>

    <View style={styles.rowcontianer1}>
            <View style={styles.rowcontianer}>
            
            <AppText style={styles.subheading}>Name</AppText>
            <TextInput 
            style={styles.inputText}
            value={eName}
            placeholder="Name"
            onChangeText={(inputText) => seteName(inputText)}/>
            </View>
        
            <View style={styles.rowcontianer}>
            <AppText style={styles.subheading}>Relationship</AppText>
                <TextInput 
                style={styles.inputText}
                placeholder="Relationship"
                value={relationship}
                onChangeText={(inputText) => setRelationship(inputText)}/>
            </View>
    </View>

    <View style={styles.fullLine} />

    <View style={styles.rowcontianer}>
    <AppText style={styles.subheading}>Phone Number</AppText>
        <TextInput 
        style={styles.inputText}
        value={ephone}
        placeholder="Phone Number"
        onChangeText={(inputText) => setePhone(inputText)}/>
    </View>

    <View style={styles.fullLine} />

    <AppText style={styles.subheading}>Address</AppText>
        <TextInput 
        style={styles.inputText}
        value={eAddress}
        placeholder="Address"
        onChangeText={(inputText) => seteAddress(inputText)}/>
   
    

      <View style={styles.fullLine} />
      <View style={styles.center}>
      <AppButton style={styles.button}title="Done" onPress={() => { 
                        if(doErrorCheck()){
                            addPatient();
                             onPress();
                        }
                     }}/>
      </View>
        </ScrollView>
    
         
 
    );
}
const styles = StyleSheet.create({
Title:{
   fontStyle:'italic',
   marginTop:10,
   marginLeft:15,
   fontSize:22
},
subheading:{
   fontSize:16,
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
   marginBottom: 10
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
   marginLeft:10,
},
rowcontianer:{
   flexDirection:'row'
},
rowcontianer1:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:350,
 },
 image:{
   height:80,
   width:100,
   marginLeft: 20,
   marginBottom:10,
   borderRadius:50
},
button:{
   width:80,
},
center:{
   justifyContent:'center',
   alignItems:'center',
   marginTop:20
}
})

export default AppPForm;