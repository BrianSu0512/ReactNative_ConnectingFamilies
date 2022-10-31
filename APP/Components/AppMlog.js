import React  , {useState}from 'react';
import { View,StyleSheet,TouchableOpacity,Text,FlatList, Alert,Image,Switch} from 'react-native';

import AppColour from '../Components/AppColour';
import AppIcon from '../Components/AppIcon';
import AppText from '../Components/AppText';

import { CheckBox } from 'react-native-elements'; // 0.16.0
import AppCheckbox from './AppCheckbox';

function AppMlog({prescription,check}) {

    const [time1, setTime1]=useState(check)

    const [time2, setTime2]=useState(check)

    const [time3, setTime3]=useState(check)
    return (
        
       <View style={styles.container}>
        
            <View style={styles.rowBetweencontainer}>
            <View style={styles.culumncontainer}>
            <AppText style={styles.subtitle}>Medicine Name</AppText>
            <AppText>{prescription.name}</AppText>
            </View>

            <View style={styles.culumncontainer}>

            <View style={styles.rowcontainer}>
            <AppText style={styles.subtitle}>Dose: </AppText>
            <AppText style={styles.subtitle}>{prescription.dose}</AppText>
            </View>

            <View style={styles.rowcontainer}>
            <AppText style={styles.subtitle}>Route: </AppText>
            <AppText style={styles.subtitle}>{prescription.route}</AppText>
            </View>

            <View style={styles.rowcontainer}>
            <AppText style={styles.subtitle}>Frequency: </AppText>
            <AppText style={styles.subtitle}>{prescription.frequency}</AppText>
            </View>
            

      
            </View>
            </View>

            <View style={styles.line}></View>

            <View style={styles.rowBetweencontainer}>
                <AppText>Time</AppText>
                <AppText>6:00</AppText>
                <AppText>12:00</AppText>
                <AppText>18:00</AppText>
            </View>

            <View style={styles.checkboxcontainer}>

            <CheckBox
            checked={time1}
            onPress={()=>setTime1(!time1)}/>

            <CheckBox
            checked={time2}
            onPress={()=>setTime2(!time2)}/>

            <CheckBox
            checked={time3}
            onPress={()=>setTime3(!time3)}/>

        
            </View>


            <View style={styles.rowcontainer}>
            <AppText>Note: </AppText>
            <AppText style={styles.note}>{prescription.note}</AppText>
            </View>

           
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
     rowBetweencontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
     },checkboxcontainer:{
        flexDirection:'row',
        marginLeft:80,
        justifyContent:'space-between',
        width:255,
        
     },
    rowcontainer:{
       flexDirection:'row',
 
    },subtitle:{
        fontSize:15,
    },note:{
        fontSize:15,
        marginTop:3
    },title:{
        paddingTop:5,
        marginLeft:20
    },
    hairline: {
        backgroundColor: '#A2A2A2',
        height: 2,
        width: 340,
        marginLeft: 15
    },line:{
        backgroundColor: AppColour.black,
        height: 2,
        width: 325,
        margin:5,
    }
})

export default AppMlog;