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

    const getUsers=()=>{
        let commonData=DataManager.getInstance();
        return commonData.users;
    }

    const usersList=getUsers();

    const validateUser = ({name,password})=>{
        return(
            usersList.filter((user) => user.name === name && user.password === password).length>0
        );
    }

    const getUser = ({name}) => {
        return usersList.find((user) => user.name === name );
    }

    const createUser = ({name}) => {
        let commonData = DataManager.getInstance();
        let userID = getUser({name}).id;
        commonData.setUserID(userID);
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
                        console.log("shoe value",values.name);
                        console.log(getUser(values));
                                const userLevel=getUser(values).level
                            if(validateUser(values)){   
                                if(userLevel==='Privilege Level 1'){
                                    resetForm();
                                    createUser(values);
                                    navigation.navigate("Home",{
                                        screen:"Home",
                                        params: {
                                            paramId: getUser(values).id
                                         
                                        }
                                      
                                    }
                                        );
                                }else{
                                    console.log("level 2")
                                    resetForm();
                                    createUser(values);
                                    navigation.navigate("MHome",{
                                        screen:"Home",
                                        params: {
                                            screen:"MHome",
                                            paramId: getUser(values).id
                                         
                                        }
                                      
                                    }
                                        );
                                }
                               
                            }
                            else{
                                resetForm();
                                alert("Invalid Login Details")
                            }
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