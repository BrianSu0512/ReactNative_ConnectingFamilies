import React from 'react';
import { View,StyleSheet,TouchableOpacity, Alert, Image} from 'react-native';
import AppButton from '../Components/AppButton';
import AppIcon from '../Components/AppIcon';
import AppInput from '../Components/AppIput';
import AppText from '../Components/AppText';
import AppTextInput from '../Components/AppTextInput';
import AppScreen from './AppScreen';
import { Formik } from 'formik';
import * as Yup from 'yup'; 

const schema = Yup.object().shape( 
    {
        email: Yup.string().required().label("Email"),
        name: Yup.string().required().label("Name"),
        password: Yup.string().required().min(4).max(8).label("Password"),
        confirmPass: Yup.string().required().min(4).max(8).label("Confirm Password"),
    }
);

function RegisterScreen({navigation, props}) {

    const registerUser = async ({email,name,password}) => {
        const UserEmail = email;
        const UserName = name;
        const UserPassword = password;

        var InsertAPIURL = "https://medidecks.homes/api/Register.php";
    
        var header={
            'Accept':'application/json',
            'Content-Type':'application/json'
        };
    
        var Data={
            userEmail: UserEmail,
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
        if(getData == 'success'){
            Alert.alert("Account registered successfully")
        }else{
            Alert.alert("Failed to register account")
        }
    }
    return (
        <AppScreen>
             <View style={styles.heading}>
            
                <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
                
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
                    initialValues={{email:'', name:'', password:'', confirmPass:''}}
                    onSubmit = {(values, {resetForm})=> {
                        if(values.password != values.confirmPass){
                            Alert.alert("Password and Confirm Password are not the same.")
                        }else{
                            registerUser(values)
                        }
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
                            placeholder="Email Address"
                            keyboardType="email"
                            textContentType="email"
                            value={values.email}
                            onBlur= {()=> setFieldTouched("email")}
                            onChangeText = {handleChange("email")}
                />
                
                </View>

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

            <View style={styles.inputContent}>
                       
                       <AppTextInput
                           icon="lock"
                           style={styles.inputStlye}
                           autoCapitalize="none"
                           secureTextEntry
                           autoCorrect={false}
                           placeholder="Confirm Password"
                           keyboardType="confirmPass"
                           textContentType="confirmPass"
                           value={values.confirmPass}
                           onBlur= {()=> setFieldTouched("confirmPass")}
                           onChangeText = {handleChange("confirmPass")}
                        />
            </View>

            {touched.password && 
                        <AppText style={styles.errorMessage}>{errors.password}</AppText>}

        </View>
            
        <View style={styles.buttonContainer}>
            <AppButton style={styles.buttonText} title="Register" onPress={handleSubmit}/>
        </View>
        
        </>
            )}
            </Formik>

        <View style={styles.textContainer}>

            <TouchableOpacity  onPress={() => navigation.navigate("Login") }>

            <AppText style={styles.textStyle}> Already have an account ! </AppText>
            
            </TouchableOpacity>
        </View>
            
        </AppScreen>
        
    );
}
const styles = StyleSheet.create({
    heading:{
        flexDirection:"row",
        width:230,
        marginLeft:20,
        paddingTop:10,
        justifyContent:'space-between',

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
    inputContainer:{
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:30,
        height:400,

    },
    inputContent:{
        height:100,
        
    },
    inputStlye:{
        marginLeft:10,
        width:300,
    },
    Title:{
        fontStyle:'italic',
        marginTop:10,
        marginLeft:15,
        fontSize:22
    },
    subTitle:{
        fontSize:18,
    },
    textContainer:{
        marginTop:40,
        alignItems:'center',
        
    },
    textStyle:{
        fontSize:18,
        color:"#D6F8FF",
        textTransform:'none'
    },
    buttonContainer:{
        width:220,
        marginTop:30,
        alignItems:'flex-end',
    },
    buttonText:{
        width:80,
        height:40,
        borderRadius:10,
        paddingLeft:10
        
    }
})

export default RegisterScreen;