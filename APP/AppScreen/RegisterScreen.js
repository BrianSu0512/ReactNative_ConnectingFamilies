import React from 'react';
import { View,StyleSheet,TouchableOpacity, Image} from 'react-native';
import AppButton from '../Components/AppButton';
import AppIcon from '../Components/AppIcon';
import AppInput from '../Components/AppIput';
import AppText from '../Components/AppText';
import AppTextInput from '../Components/AppTextInput';
import AppScreen from './AppScreen';

function RegisterScreen({navigation, props}) {
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
        <AppText style={styles.Title}>Register Form</AppText>
        <View style={styles.inputContainer}>
        
            <View style={styles.inputContent}>
            <AppText style={styles.subTitle}>User Name</AppText>
                <AppInput
                            placeholder="User Name"
                            keyboardType="name"
                            textContentType="username"
                />
                
            </View>

            <View style={styles.inputContent}>
            <AppText style={styles.subTitle}>EMail</AppText>
                <AppInput
                            placeholder="Email"
                            keyboardType="Email"
                            textContentType="Email"
                />
                
            </View>

            <View style={styles.inputContent}>
            <AppText style={styles.subTitle}>Password</AppText>
                <AppInput
                            placeholder="Password"
                            keyboardType="Password"
                            textContentType="Password"
                />
                
            </View>

            <View style={styles.inputContent}>
            <AppText style={styles.subTitle}>Confirm Password</AppText>
                <AppInput
                            placeholder="ConfirmPassword"
                            keyboardType="confirmPassword"
                            textContentType="confirmPassword"
                />
                
            </View>
            
        

        </View>
            
        <View style={styles.buttonContainer}>
            <AppButton style={styles.buttonText} title="Sign Up" />
        </View>
        

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
        color:"#1338BE",
        textTransform:'none'
    },
    buttonContainer:{
        width:220,
        marginTop:30,
        alignItems:'flex-end',
    },
    buttonText:{
        width:90,
        height:40,
        borderRadius:10,
        paddingLeft:10
        
    }
})

export default RegisterScreen;