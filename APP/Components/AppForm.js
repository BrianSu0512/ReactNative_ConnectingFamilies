import React,{useState} from 'react';
import { View,StyleSheet,TouchableOpacity, Image,TextInput,ScrollView} from 'react-native';
import AppButton from '../Components/AppButton';
import AppColour from '../Components/AppColour';

import AppText from '../Components/AppText';


import * as ImagePicker from 'expo-image-picker';
import DataManager from '../config/DataManager';


function AppForm({data,onPress,navigation}) {
    const[name, setName] = useState(data.name);
    const[age, setAge]=useState(data.age);
    const[gender, setGender]=useState(data.gender);
    const[bloodType, setBloodType]=useState(data.bloodType);
    const[dob, setDob]=useState(data.dob);
    const[address, setAddress]=useState(data.address);
    const[phone, setPhone]=useState(data.phone);
    const[image, setImage] = useState(data.image);

    const[eName, seteName]=useState(data.eName);
    const[relationship, setRelationship]=useState(data.relationship);
    const[ephone, setePhone]=useState(data.ePhone);
    const[eAddress, seteAddress]=useState(data.eAddress);



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
        setImage({path: pickerResult.uri});
       
    }

    const doErrorCheck = () => {
        setNameError( name.length>0 ? "": "Please set a valid Caption");
        setPhoneError(phone.length>0 ? "": "Please set a valid Phone number");
        setImageError(image? "": "Please pick an image");
        return ((name.length>0) && (phone.length>0) && (image)? true: false)
    }

    const editProfile = () => {
        let commonData = DataManager.getInstance();
        let user = commonData.getUserID();

        const id = data.id


        const userdetial = commonData.getPatients(id);


        const newdetial = {
            userid:data.userid,
            referTo:data.referTo,
            referredBy:data.referredBy,
            rNbNO:data.rNbNO,
            note:data.note,
            id:data.id,
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
            eAddress:eAddress
        };

        
        commonData.editPatient(newdetial);
        const userdetials = commonData.getPatient(id);
        const allP=commonData.getAllPatients()

        // console.log("line102",userdetials)
        // console.log("all",allP)

    }

    const picture=image>0 ?<Image source={image} style={styles.image}/>
                          : <Image source={{uri: image.path}} style={styles.image}/>
    return (
        <ScrollView>
                <TouchableOpacity style={styles.imageButton} onPress={openImagePickerAsync}>
     {picture}     
   </TouchableOpacity>

    <View style={styles.rowcontianer}>
        <AppText style={styles.subheading}>Patient's Name</AppText>
        <TextInput 
        style={styles.inputText}
        value={name}
        onChangeText={(inputText) => setName(inputText)}/>
    </View>
    <View style={styles.fullLine} />

    <View style={styles.rowcontianer1}>
        <View style={styles.rowcontianer}>
        
        <AppText style={styles.subheading}>Gender</AppText>
        <TextInput 
         style={styles.inputText}
         value={gender}
         onChangeText={(inputText) => setGender(inputText)}/>
        </View>
      
        <View style={styles.rowcontianer}>
        <AppText style={styles.subheading}>BloodType</AppText>
            <TextInput 
            style={styles.inputText}
            value={bloodType}
            onChangeText={(inputText) => setBloodType(inputText)}/>
        </View>
    </View>
   

  

    <View style={styles.fullLine} />

    <View style={styles.rowcontianer1}>
    <View style={styles.rowcontianer}>
    <AppText style={styles.subheading}>Date of birth</AppText>
        <TextInput 
        style={styles.inputText}
        value={dob}
        onChangeText={(inputText) => setDob(inputText)}/>
    </View>
    <View style={styles.rowcontianer}>
        <AppText style={styles.subheading}>Age</AppText>
        <TextInput 
         style={styles.inputText}
         value={age}
         onChangeText={(inputText) => setAge(inputText)}/>
     </View>

    </View>

  
    
    <View style={styles.fullLine} />
    
    <View style={styles.rowcontianer}>
    <AppText style={styles.subheading}>Phone Number</AppText>
        <TextInput 
        style={styles.inputText}
        value={phone}
        onChangeText={(inputText) => setPhone(inputText)}/>
    </View>

    <View style={styles.fullLine} />

    <AppText style={styles.subheading}>Address</AppText>
        <TextInput 
        style={styles.inputText}
        value={address}
        onChangeText={(inputText) => setAddress(inputText)}/>

    <AppText style={styles.Title}>Emergency Details</AppText>
   <View style={styles.hairline} />

    <View style={styles.rowcontianer1}>
            <View style={styles.rowcontianer}>
            
            <AppText style={styles.subheading}>Name</AppText>
            <TextInput 
            style={styles.inputText}
            value={eName}
            onChangeText={(inputText) => seteName(inputText)}/>
            </View>
        
            <View style={styles.rowcontianer}>
            <AppText style={styles.subheading}>Relationship</AppText>
                <TextInput 
                style={styles.inputText}
                value={relationship}
                onChangeText={(inputText) => setRelationship(inputText)}/>
            </View>
    </View>

    <View style={styles.rowcontianer}>
    <AppText style={styles.subheading}>Phone Number</AppText>
        <TextInput 
        style={styles.inputText}
        value={ephone}
        onChangeText={(inputText) => setePhone(inputText)}/>
    </View>

    <View style={styles.fullLine} />

    <AppText style={styles.subheading}>Address</AppText>
        <TextInput 
        style={styles.inputText}
        value={eAddress}
        onChangeText={(inputText) => seteAddress(inputText)}/>
   
    

      <View style={styles.fullLine} />
      <View style={styles.center}>
      <AppButton style={styles.button}title="Done" onPress={() => { 
                        if(doErrorCheck()){
                            editProfile();
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

export default AppForm;