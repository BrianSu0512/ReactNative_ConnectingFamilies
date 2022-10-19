import React from 'react';
import { View,StyleSheet,TouchableOpacity,Text,FlatList, Alert,Image } from 'react-native';
import { date } from 'yup';
import AppButton from '../Components/AppButton';
import AppColour from '../Components/AppColour';
import AppIcon from '../Components/AppIcon';
import AppText from '../Components/AppText';
import AppListItem from './AppListItem';



function AppProfile({data,onPress,onPress1,onPress2,onPress3,level}) {

    const profile= level==='Privilege Level 1'
    ?   <View>

    <View style={styles.rowcontainer}>

    
            <AppListItem image={data.image} title={data.name}/>
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
            <AppText style={styles.subtitle}>Privilege Level</AppText>
           <AppText style={styles.text}>{data.level}</AppText>
           <View style={styles.line1} />
            </View>
         </View>
    :     <View>

    <View style={styles.rowcontainer}>
    
    <AppListItem image={data.image} title={data.name}/>
    
            <View style={styles.culumncontainer}>
            <View style={styles.buttoncontainer}>
            <AppIcon style={styles.buttonicon} name="folder-multiple-plus-outline" size={20} />
            <AppButton style={styles.buttonText} style1={styles.buttonText} title="Medical History" onPress={onPress1}/>
            </View>
            <View style={styles.buttoncontainer}>
            <AppIcon  style={styles.buttonicon} name="file-sign" size={20} />
            <AppButton style={styles.buttonText} style1={styles.buttonText} title="Prescription" onPress={onPress2}/>
            </View>
            <View style={styles.buttoncontainer}>
            <AppIcon style={styles.buttonicon} name="calendar-edit" size={20} />
            <AppButton style={styles.buttonText}style1={styles.buttonText} title="Medication Log" onPress={onPress3}/>
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
    return (
        <View>
            {profile}
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
       width:330,
       marginLeft:20,
       marginTop:10

 
    },
    contentcontainer:{
       flexDirection:'row',
       justifyContent:'space-between',
       width:350,
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
       backgroundColor:'transparent',
       fontSize:12,
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