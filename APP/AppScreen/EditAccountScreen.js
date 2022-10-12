import React,{useState} from 'react';
import { View,StyleSheet,TouchableOpacity, Image,TextInput} from 'react-native';
import AppButton from '../Components/AppButton';
import AppColour from '../Components/AppColour';
import AppIcon from '../Components/AppIcon';
import AppInput from '../Components/AppIput';
import AppListItem from '../Components/AppListItem';
import AppText from '../Components/AppText';
import AppTextInput from '../Components/AppTextInput';

import * as ImagePicker from 'expo-image-picker';
import DataManager from '../config/DataManager';
import AppScreen from './AppScreen';

function EditAccountScreen({navigation,navigation: { goBack },route}) {
    const data=[route.params.paramPersonalData];
    console.log("line14",data[0][0])

    const[name, setName] = useState(data[0][0].name);
    const[email, setEmail]=useState(data[0][0].email);
    const[phone, setPhone]=useState(data[0][0].phone);
    const[image, setImage] = useState(data[0][0].image);



    const[nameError, setNameError]=useState("");
    const[emailError, setEmailError]=useState("");
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
        setEmailError(email.length>0 ? "": "Please set a valid Email");
        setPhoneError(phone.length>0 ? "": "Please set a valid Phone number");
        setImageError(image? "": "Please pick an image");
        return ((name.length>0) && (email.length>0) && (phone.length>0) && (image)? true: false)
    }

    const editPersonal = () => {
        let commonData = DataManager.getInstance();
        let user = commonData.getUserID();

        const id = data[0][0].id
        console.log("line86", id)
        const newdetial = {
            
            name:name,
            email:email,
            phone:phone,
            id: id,
            image: image.path,
            password:data[0][0].password,
            level:data[0][0].level
        };

        
        commonData.editUser(newdetial);
        const userdetials = commonData.getUser(user);

        console.log("line102",userdetials)

    }

    const picture=image>0 ?<Image source={image} style={styles.image}/>
                         :<Image source={{uri: image.path}} style={styles.image}/>

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
   <AppText style={styles.Title}>Edit Account</AppText>
   <View style={styles.hairline} />

   <TouchableOpacity style={styles.imageButton} onPress={openImagePickerAsync}>
      {picture}             
   </TouchableOpacity>

   <AppText style={styles.subheading}>User Name</AppText>
   <TextInput 
      style={styles.inputText}
      value={name}
      onChangeText={(inputText) => setName(inputText)}/>

        <View style={styles.fullLine} />

        <AppText style={styles.subheading}>Email</AppText>
        <TextInput 
         style={styles.inputText}
         value={email}
         onChangeText={(inputText) => setName(inputText)}/>

        <View style={styles.fullLine} />

        <AppText style={styles.subheading}>Phone Number</AppText>
        <TextInput 
        style={styles.inputText}
        value={phone}
        onChangeText={(inputText) => setName(inputText)}/>

      <View style={styles.fullLine} />
      <View style={styles.center}>
      <AppButton style={styles.button}title="Done" onPress={() => { 
                        if(doErrorCheck()){
                            editPersonal();
                            navigation.navigate("Setting",{screen: "Setting"})
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
},fullLine: {
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
   borderRadius:"50%"
},button:{
   width:80,
},center:{
   justifyContent:'center',
   alignItems:'center',
   marginTop:20
}

})

export default EditAccountScreen;