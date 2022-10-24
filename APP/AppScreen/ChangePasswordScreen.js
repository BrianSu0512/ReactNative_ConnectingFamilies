 import React,{useState} from 'react';
import { View,StyleSheet,TouchableOpacity, Image,Alert,TextInput } from 'react-native';
import AppButton from '../Components/AppButton';
import AppColour from '../Components/AppColour';
import AppIcon from '../Components/AppIcon';
import AppInput from '../Components/AppIput';
import AppListItem from '../Components/AppListItem';
import AppText from '../Components/AppText';
import AppTextInput from '../Components/AppTextInput';
import DataManager from '../config/DataManager';
import AppScreen from './AppScreen';

function ChangePasswordScreen({navigation,navigation: { goBack },route}) {
    const data=route.params.paramPersonalData;

    const[password, setPassword] = useState("");
    const[newPassword, setNewPassword]=useState("");
    const[cpassword, setCPassword]=useState("");

    const[passwordError, setPasswordError]=useState("");
    const[newPasswordError, setNewPasswordError]=useState("");
    const[cpasswordError, setCPasswordError]=useState("");
 

    const doErrorCheck = () => {
        setPasswordError( password.length>0 ? "": "Please enter the current password");
        setNewPasswordError(newPassword.length>0 ? "": "Please enter a valid new password");
        setCPasswordError(cpassword.match(newPassword) ? "": "Password do NOT match");
        return ((password.length>0) && (newPassword.length>0) && ((cpassword.match(newPassword)))? true: false)
    }

    const editPersonal = async () => {
        commonData = DataManager.getInstance();
        const newdetail = {      
            password:newPassword,
        };
        await commonData.editAccount(newdetail, 'password')
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
   <AppText style={styles.Title}>Change Password</AppText>
   <View style={styles.hairline} />


   <AppText style={styles.subheading}>Current Password</AppText>
   <TextInput 
      style={styles.inputText}
      value={password}
      autoCapitalize="none"
      secureTextEntry
      autoCorrect={false}
      keyboardType="password"
      textContentType="password"
      onChangeText={(inputText) => setPassword(inputText)}/>
      {passwordError.length>0 ? <AppText style={{margin:5, color:"red", fontSize:16}}>{passwordError}</AppText>: <></>}

        <View style={styles.fullLine} />

        <AppText style={styles.subheading}>New Password</AppText>
        <TextInput 
         style={styles.inputText}
         value={newPassword}
         autoCapitalize="none"
      secureTextEntry
      autoCorrect={false}
      keyboardType="password"
      textContentType="password"
         onChangeText={(inputText) => setNewPassword(inputText)}/>
         {newPasswordError.length>0 ? <AppText style={{margin:5, color:"red", fontSize:16}}>{newPasswordError}</AppText>: <></> }

        <View style={styles.fullLine} />

        <AppText style={styles.subheading}>Confirm New Password</AppText>
        <TextInput 
        style={styles.inputText}
        value={cpassword}
        autoCapitalize="none"
       secureTextEntry
       autoCorrect={false}
       keyboardType="password"
       textContentType="password"
        onChangeText={(inputText) => setCPassword(inputText)}/>
        {cpasswordError.length>0 ? <AppText style={{margin:5, color:"red", fontSize:16}}>{cpasswordError}</AppText>: <></> }

      <View style={styles.fullLine} />

    <View style={styles.center}>
    <AppButton style={styles.button} title="Done" onPress={() => { 
                        if(doErrorCheck()&& (password ===data.UserPass)  ){
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
    inputText:{
       fontSize:20,
       fontFamily: Platform.OS === 'android' ? "monospace" : "Avenir-Roman",
       color:AppColour.black,
       marginTop:20,
       marginBottom:10,
       marginLeft:20,
       backgroundColor:AppColour.primaryColour,
       width:200,
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
        marginTop:50

    }
    
    })
    

export default ChangePasswordScreen;