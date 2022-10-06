import React from 'react';
import { View,StyleSheet,TouchableOpacity,Text,FlatList, Alert,Image } from 'react-native';
import { date } from 'yup';
import AppButton from '../Components/AppButton';
import AppColour from '../Components/AppColour';
import AppIcon from '../Components/AppIcon';
import AppText from '../Components/AppText';

function AppProfile({data,onPress}) {
    return (
     <View>

<View style={styles.rowcontainer}>

        {data.image && <Image source={data.image} style={styles.picture}/>}

        <View style={styles.culumncontainer}>
        <View style={styles.buttoncontainer}>
        <AppIcon style={styles.buttonicon} name="calendar-edit" size={20} />
        <AppButton style={styles.buttonText} title="Medical History"/>
        </View>
        <View style={styles.buttoncontainer}>
        <AppIcon style={styles.buttonicon} name="calendar-edit" size={20} />
        <AppButton style={styles.buttonText} title="Prescription"/>
        </View>
        <View style={styles.buttoncontainer}>
        <AppIcon style={styles.buttonicon} name="calendar-edit" size={20} />
        <AppButton style={styles.buttonText} title="Medication Log"/>
        </View>
        </View>
       </View>

       <View style={styles.contentcontainer}>
       <View style={styles.culumncontainer}>
        <AppText style={styles.subtitle}>Age</AppText>
        <AppText style={styles.subtitle}>Gender</AppText>
        <AppText style={styles.subtitle}>Blood Type</AppText>
        <AppText style={styles.subtitle}>Date of Birth</AppText>
        <AppText style={styles.subtitle}>Phone number</AppText>
       </View>
       <View style={styles.culumncontainer}>
        <AppText style={styles.text}>{data.age}</AppText>
        <View style={styles.line} />
        <AppText style={styles.text}>{data.gender}</AppText>
        <View style={styles.line} />
        <AppText style={styles.text}>{data.bloodType}</AppText>
        <View style={styles.line} />
        <AppText style={styles.text}>{data.dob}</AppText>
        <View style={styles.line} />
        <AppText style={styles.text}>{data.phone}</AppText>
        <View style={styles.line} />
       </View>
       </View>
        
        <View style={styles.botttomcontainer}>
        <AppText style={styles.subtitle}>Address</AppText>
       <AppText style={styles.text}>{data.address}</AppText>
       <View style={styles.line1} />
        </View>

        <View style={styles.emergencyButton} >
        <AppButton title="Emergency Contact" 
        onPress={onPress}/>
        </View>
     </View>
    
       
    );
}

const styles = StyleSheet.create({
   
    line: {
        backgroundColor: '#A2A2A2',
        height: 1,
        width: 150,
        
        
    },
    line1: {
        backgroundColor: '#A2A2A2',
        height: 1,
        width: 330,
        
        
    },
    picture:{
        width:100,
        height:100,
    },
    culumncontainer:{
       flexDirection:'column',
       
 
    },
    rowcontainer:{
       flexDirection:'row',
       justifyContent:'space-between',
       width:300,
       backgroundColor:"red",
       marginLeft:35,
       marginTop:10

 
    },
    contentcontainer:{
       flexDirection:'row',
       justifyContent:'space-between',
       width:350,
       backgroundColor:"red",
       marginLeft:15,
       marginTop:10

 
    },botttomcontainer:{
        marginLeft:15,
       marginTop:10
    },
    buttoncontainer:{
        flexDirection:'row'     
    },
    buttonText:{ 
       backgroundColor:'green',
       fontSize:13,
       width:105,
       marginLeft:5
 
    },buttonicon:{
        marginTop:10,
        height:50,
    },emergencyButton:{
        marginTop:10
    },
    text:{
        fontSize:18,
        marginTop:10,
    },subtitle:{
        fontSize:20,
        marginTop:10,
    }
})

export default AppProfile;