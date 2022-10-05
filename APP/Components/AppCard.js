import React from 'react';
import { Image, View, StyleSheet,TouchableOpacity} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import AppButton from './AppButton';
import AppIcon from './AppIcon';

import AppText from './AppText';


function AppCard({image,name,referTo, referredBy, rNbNO, note,onPress}) {
    return (
    <View style={styles.container}>
        
        <TouchableOpacity onPress={onPress}>
        <View style={styles.rowcontainer}>
        {image && <Image source={image} style={styles.image}/>}
        <AppText style={styles.nametext}>{name}</AppText>
        <AppIcon style={styles.icon} name="calendar-edit" size={20} />
        </View>
        <View style={styles.rowcontainer}>
        <View style={styles.rowcontainer}>
        <AppText style={styles.text}>ReferTo: </AppText>
        <AppText style={styles.text}>{referTo}</AppText>
        </View>
        <View style={styles.rowcontainer}>
        <AppText style={styles.text}>Referred By: </AppText>
        <AppText style={styles.text}>{referredBy}</AppText>
        </View>
        </View>
        <AppText style={styles.text}>Room and Building Number:</AppText>
        <AppText style={styles.text}>{rNbNO}</AppText>
        <AppText style={styles.text}>Note:</AppText>
        <AppText style={styles.text}>{note}</AppText>
        </TouchableOpacity>

        <View style={styles.rowcontainer}>
        
        <View style={styles.buttoncontainer}>
        <AppIcon style={styles.buttonicon} name="calendar-edit" size={20} />
        <AppButton style={styles.buttonText} title="Medical History"/>
        </View>
        <View style={styles.buttoncontainer}>
        <AppIcon style={styles.buttonicon} name="calendar-edit" size={20} />
        <AppButton style={styles.buttonText} title="Prescription"/>
        </View>
        
        </View>
      

    </View>

   
    );
}
const styles = StyleSheet.create({
    container:{
        borderRadius:10,
        overflow:'hidden',
        width:320,
        borderColor:'black',
        borderWidth:2,
        marginTop:20,
        marginLeft:30
 
    },
    rowcontainer:{
       flexDirection:'row',
       justifyContent:'space-between',
 
    },buttoncontainer:{
        flexDirection:'row',
        marginTop:5
    },
    buttonText:{ 
       backgroundColor:'transparent',
 
    },image:{
        height: 45,
        width: 45,
        borderRadius: 37,
        marginLeft: 10,
    },
    text:{
        fontSize: 15,
        paddingLeft:5,
        paddingRight:5
    },
    nametext:{
        fontSize: 18,
        paddingTop:10,
    },icon:{
        paddingTop:10,
        height:50,
    },buttonicon:{
        paddingTop:12,
        height:50,
    }
    
})
export default AppCard;