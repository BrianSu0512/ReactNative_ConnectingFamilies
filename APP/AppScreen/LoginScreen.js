import React from 'react';
import { View,StyleSheet,TouchableOpacity, Image} from 'react-native';
import AppButton from '../Components/AppButton';
import AppIcon from '../Components/AppIcon';
import AppText from '../Components/AppText';
import AppTextInput from '../Components/AppTextInput';
import AppScreen from './AppScreen';

function LoginScreen(props) {
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
                    <Image source={require("../assets/icon.png")} style={styles.logo}/>
                    <AppText style={styles.logoText}>Connecting Families</AppText>
                </View>
          
        </View>

        <View style={styles.inputContainer}>
            <View style={styles.inputContent}>
                <AppTextInput
                            icon="account-circle-outline"
                            style={styles.inputStlye}
                            placeholder="User Name"
                            keyboardType="name"
                            textContentType="username"
                />
                
                </View>
            <View style={styles.inputContent}>
                       
                       <AppTextInput
                           icon="lock"
                           style={styles.inputStlye}
                           placeholder="Password"
                           keyboardType="password"
                           textContentType="password"
            />
               
            </View>

        </View>
            
        <View style={styles.buttonContainer}>
            <AppButton style={styles.buttonText} title="Log In" />
        </View>
        

        <View style={styles.textContainer}>

            <TouchableOpacity  onPress={() => navigation.navigate("RegisterScreen") }>

            <AppText style={styles.textStyle}> Haven't an accouont ? ? ?</AppText>
            
            </TouchableOpacity>
        </View>
            
        </AppScreen>
        
    );
}
const styles = StyleSheet.create({
    heading:{
        flexDirection:"row",
        width:250,
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
        color:"#D6F8FF",
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