import React from 'react';
import { View,StyleSheet,TouchableOpacity,Text,FlatList, Alert,Image } from 'react-native';
import { date } from 'yup';
import { Swipeable } from 'react-native-gesture-handler';
import AppButton from '../Components/AppButton';
import AppColour from '../Components/AppColour';
import AppIcon from '../Components/AppIcon';
import AppText from '../Components/AppText';
import DataManager from '../config/DataManager';

    
function AppMHisotry({onSwipeLeft,data,onPress,onPress1,level}) {
    const checkEndDate= (date)=> {
        let onGoing = date
        if(date == '0000-00-00'){
            onGoing = 'Ongoing'
        }
        return onGoing;
    }

    var onGoing = checkEndDate(data.EndDate)


    const contain= level==='Privilege Level 1'
        ?  <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
    <View style={styles.rowcontainer}>
    <View>
    <AppText style={styles.subtitle}>Pathogenic diagnosis</AppText>
    <AppText style={styles.title}>{data.Diagnosis}</AppText>
    </View>
    <TouchableOpacity onPress={onPress1}>
    <AppIcon name="pencil-outline" size={20} style={{marginDown:10}}/>
    </TouchableOpacity>
    </View>
    
    
     <View style={styles.rowcontainer}>
    <View style={styles.rowcontainer}>
    <AppText style={styles.subtitle}>Date: </AppText>
    <AppText style={styles.subtitle}>{data.BeginDate}</AppText>
    </View>
    <View style={styles.rowcontainer}>
    <AppText style={styles.subtitle}>Stop Date: </AppText>
    <AppText style={styles.subtitle}>{onGoing}</AppText>
    </View>
    </View>
    </TouchableOpacity>
    
            </View>
    
        :  <Swipeable renderRightActions={onSwipeLeft}>
        <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
    <View style={styles.rowcontainer}>
    <View>
    <AppText style={styles.subtitle}>Pathogenic diagnosis</AppText>
    <AppText style={styles.title}>{data.Diagnosis}</AppText>
    </View>
    <TouchableOpacity onPress={onPress1}>
    <AppIcon name="pencil-outline" size={20} style={{marginDown:10}}/>
    </TouchableOpacity>
    </View>
    
    
     <View style={styles.rowcontainer}>
    <View style={styles.rowcontainer}>
    <AppText style={styles.subtitle}>Date: </AppText>
    <AppText style={styles.subtitle}>{data.BeginDate}</AppText>
    </View>
    <View style={styles.rowcontainer}>
    <AppText style={styles.subtitle}>Stop Date: </AppText>
    <AppText style={styles.subtitle}>{onGoing}</AppText>
    </View>
    </View>
    </TouchableOpacity>
    
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
    rowcontainer:{
       flexDirection:'row',
       justifyContent:'space-between',
 
 
    },subtitle:{
        fontSize:15,
    },title:{
        paddingTop:5,
        marginLeft:20
    }
})

export default AppMHisotry;