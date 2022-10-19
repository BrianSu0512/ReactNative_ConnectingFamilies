import React from 'react';
import { View,StyleSheet,TouchableOpacity, Animated } from 'react-native';
import { date } from 'yup';
import AppButton from '../Components/AppButton';
import AppColour from '../Components/AppColour';
import AppIcon from '../Components/AppIcon';
import AppText from '../Components/AppText';
import { Swipeable } from 'react-native-gesture-handler';

function AppPrescription({prescription,history,onPress,onSwipeLeft,level}) {

    const contain= level==='Privilege Level 1'
    

    ?<View style={styles.container}>

<View style={styles.headcontainer}>
<View style={styles.culumncontainer}>
<AppText style={styles.subtitle}>Medicine Name</AppText>
<AppText style={styles.title}>{prescription.name}</AppText>
</View>
<TouchableOpacity onPress={onPress}>
<AppIcon style={styles.buttonicon} name="calendar-edit" size={20} />
</TouchableOpacity>


</View>

<View style={styles.culumncontainer}>
<View style={styles.rowcontainer}>
<AppText style={styles.subtitle}>Date: </AppText>
<AppText style={styles.subtitle}>{history[0].Date}</AppText>
</View>
<View style={styles.rowcontainer}>
<AppText style={styles.subtitle}>Stop Date: </AppText>
<AppText style={styles.subtitle}>{history[0].StopDate}</AppText>
</View>
</View>


    </View>

   :  <Swipeable renderRightActions={onSwipeLeft}>
        <View style={styles.container}>

        <View style={styles.headcontainer}>
        <View style={styles.culumncontainer}>
        <AppText style={styles.subtitle}>Medicine fffName</AppText>
        <AppText style={styles.title}>{prescription.name}</AppText>
        </View>
        <TouchableOpacity onPress={onPress}>
        <AppIcon style={styles.buttonicon} name="calendar-edit" size={20} />
        </TouchableOpacity>


        </View>

        <View style={styles.culumncontainer}>
        <View style={styles.rowcontainer}>
        <AppText style={styles.subtitle}>Date: </AppText>
        <AppText style={styles.subtitle}>{history[0].Date}</AppText>
        </View>
        <View style={styles.rowcontainer}>
        <AppText style={styles.subtitle}>Stop Date: </AppText>
        <AppText style={styles.subtitle}>{history[0].StopDate}</AppText>
        </View>
        </View>

        </View>
        </Swipeable>
    
    return (
        <View>
        {contain}
        </View>


 
    );
}
const styles = StyleSheet.create({
    container:{
        marginTop:10,
        width:350,
        marginLeft:13,
        borderStyle: 'dashed',
        borderWidth:1,
        borderColor:'black',
        borderRadius:5,
        padding:10
     },
     culumncontainer:{
        flexDirection:'column',
        
  
     },
     headcontainer:{
        flexDirection:'row',
        justifyContent:'space-between'
     },
    rowcontainer:{
       flexDirection:'row',
 
    },subtitle:{
        fontSize:15,
    },title:{
        paddingTop:5,
        marginLeft:20
    }
})

export default AppPrescription;