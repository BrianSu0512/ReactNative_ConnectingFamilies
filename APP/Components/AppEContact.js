import React from 'react';
import { View,StyleSheet,TouchableOpacity,Text,FlatList, Alert,Image } from 'react-native';
import { date } from 'yup';
import AppButton from './AppButton';
import AppColour from './AppColour';
import AppIcon from './AppIcon';
import AppListItem from './AppListItem';
import AppText from './AppText';

function AppEContact({data}) {
    console.log(data)
    return (
        <View>
                   <View style={styles.profileContainer}>
                    <AppListItem image={data.image} title={data.name} subtitle={data.gender} thirdtitle={data.phone} />
        </View>

        <View style={styles.botttomcontainer}>
        <AppText style={styles.subtitle}>Emergency Details</AppText>
        </View>
        

        <View style={styles.contentcontainer}>
       <View style={styles.culumncontainer}>
        <AppText style={styles.subtitle}>Name</AppText>
        <AppText style={styles.subtitle}>Relationship</AppText>
        <AppText style={styles.subtitle}>Phone</AppText>
    
       </View>
       <View style={styles.culumncontainer}>
        <AppText style={styles.text}>{data.eName}</AppText>
        <View style={styles.line} />
        <AppText style={styles.text}>{data.relationship}</AppText>
        <View style={styles.line} />
        <AppText style={styles.text}>{data.ePhone}</AppText>
        <View style={styles.line} />
       </View>
       </View>

       <View style={styles.botttomcontainer}>
        <AppText style={styles.subtitle}>Address</AppText>
       <AppText style={styles.text}>{data.eAddress}</AppText>
       <View style={styles.line1} />
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
    contentcontainer:{
       flexDirection:'row',
       justifyContent:'space-between',
       width:350,
       marginLeft:15,
       marginTop:10

 
    },botttomcontainer:{
        marginLeft:15,
    },
    text:{
        fontSize:18,
        marginTop:10,
    },subtitle:{
        fontSize:20,
        marginTop:10,
    }
})


export default AppEContact;