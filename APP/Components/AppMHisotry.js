import React from 'react';
import { View,StyleSheet,TouchableOpacity,Text,FlatList, Alert,Image } from 'react-native';
import { date } from 'yup';
import AppButton from '../Components/AppButton';
import AppColour from '../Components/AppColour';
import AppIcon from '../Components/AppIcon';
import AppText from '../Components/AppText';

function AppMHisotry({data}) {
    console.log("Line10ss",data)
    return (
       <View style={styles.container}>
            <AppText style={styles.subtitle}>Pathogenic diagnosis</AppText>
             <AppText style={styles.title}>{data.diagnosis}</AppText>
             <View style={styles.rowcontainer}>
            <View style={styles.rowcontainer}>
            <AppText style={styles.subtitle}>Date: </AppText>
            <AppText style={styles.subtitle}>{data.Date}</AppText>
            </View>
            <View style={styles.rowcontainer}>
            <AppText style={styles.subtitle}>Referred By: </AppText>
            <AppText style={styles.subtitle}>{data.StopDate}</AppText>
            </View>
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
        borderRadius:10,
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