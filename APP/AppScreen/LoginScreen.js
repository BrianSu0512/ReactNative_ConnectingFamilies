import React from 'react';
import { View,StyleSheet,TouchableOpacity, Image} from 'react-native';
import AppButton from '../Components/AppButton';
import AppIcon from '../Components/AppIcon';
import AppText from '../Components/AppText';
import AppTextInput from '../Components/AppTextInput';
import AppScreen from './AppScreen';

import { Formik } from 'formik';

import * as Yup from 'yup'; 
import DataManager from '../config/DataManager';


const schema = Yup.object().shape( 
    {
    name: Yup.string().required().label("Name"),
    password: Yup.string().required().min(4).max(8).label("Password"),
    }
    );

function LoginScreen({navigation, props}) {

    const validateUser = async ({name,password})=>{
        const UserName = name;
        const UserPassword = password;
        let commonData = DataManager.getInstance();

        var InsertAPIURL = "https://medidecks.homes/api/Login.php";
    
        var header={
            'Accept':'application/json',
            'Content-Type':'application/json'
        };
    
        var Data={
            userName: UserName,
            userPass: UserPassword
        };

        const res = await fetch(InsertAPIURL,
            {
                method:'POST',
                headers:header,
                body: JSON.stringify(Data)
            });
        
        const getData = await res.json();

        if(getData != 'failed'){
            await commonData.addCurUser(getData)
            const curUser = commonData.getCurUser();
            if(curUser.UserPriv == '1'){
                await commonData.getPatient();
                await commonData.getPatientData('GetPrescription');
                commonData.getPatientData('GetHistory');
                commonData.getPatientData('GetLog');
                commonData.getPatientData('GetEmergency')
                navigation.navigate({
                    name: 'Home',
                })
            }else if(curUser.UserPriv == '2'){
                await commonData.getPatients();
                await commonData.getPatientData('GetPrescription');
                commonData.getPatientData('GetHistory');
                commonData.getPatientData('GetLog');
                commonData.getPatientData('GetEmergency')
                navigation.navigate({
                    name: 'MHome',
                })
            }
            
        }else{
            alert("Wrong detail");
        }
    }

    return (
        <AppScreen>
             <View style={styles.heading}>
            
                <TouchableOpacity >
                
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

        <Formik
                    initialValues={{name:'', password:'',}}
                    onSubmit = {(values, {resetForm})=> {
                        validateUser(values)
                        resetForm();
                        }}
                    validationSchema={schema}
                    >

        {({values,handleChange, handleSubmit,errors, setFieldTouched, touched})=> (
        <>

        <View style={styles.inputContainer}>
            <View style={styles.inputContent}>
                <AppTextInput
                            icon="account-circle-outline"
                            style={styles.inputStlye}
                            autoCapitalize="none"
                            placeholder="User Name"
                            keyboardType="name"
                            textContentType="username"
                            value={values.name}
                            onBlur= {()=> setFieldTouched("name")}
                            onChangeText = {handleChange("name")}
                />
                
                </View>
            <View style={styles.inputContent}>
                       
                       <AppTextInput
                           icon="lock"
                           style={styles.inputStlye}
                           autoCapitalize="none"
                           secureTextEntry
                           autoCorrect={false}
                           placeholder="Password"
                           keyboardType="password"
                           textContentType="password"
                           value={values.password}
                           onBlur= {()=> setFieldTouched("password")}
                           onChangeText = {handleChange("password")}
                        />
                
               
            </View>
            {touched.password && 
                        <AppText style={styles.errorMessage}>{errors.password}</AppText>}

        </View>
            
        <View style={styles.buttonContainer}>
            <AppButton style={styles.buttonText} title="Log In" onPress={handleSubmit}/>
        </View>
        

        <View style={styles.textContainer}>

            <TouchableOpacity  onPress={() => navigation.navigate("Register") }>

            <AppText style={styles.textStyle}> Haven't an account ? ? ?</AppText>
            
            </TouchableOpacity>
        </View>
        </>
            )}
            </Formik>
            
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
    inputContainer:{
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:100,
        height:200

    },
    inputContent:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection: 'row',
        
    },
    inputStlye:{
        marginLeft:10,
        width:300,
    },
    textContainer:{
        marginTop:150,
        alignItems:'center',
        
    },
    textStyle:{
        fontSize:18,
        color:"#1338BE",
        textTransform:'none'
    },
    buttonContainer:{
        width:220,
        marginTop:50,
        alignItems:'flex-end',
    },
    buttonText:{
        width:80,
        height:40,
        borderRadius:10,
        paddingLeft:10
        
    }
})

export default LoginScreen;