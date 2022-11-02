import React from 'react';
import { View,StyleSheet,TouchableOpacity, Image,Alert,FlatList} from 'react-native';
import AppColour from '../Components/AppColour';

import AppListItem from '../Components/AppListItem';
import AppText from '../Components/AppText';
import DataManager from '../config/DataManager';
import AppScreen from './AppScreen';


function CarerScreen({navigation}) {

    const getCarers = () => {
        let commonData = DataManager.getInstance();
        let Carers=commonData.getAllCarers()
        return Carers;
    }

    const data=getCarers();

    return (
        <AppScreen>
             <View style={styles.heading}>
           
                <View>
                    <Image source={require("../assets/logo.jpg")} style={styles.logo}/>
                    <AppText style={styles.logoText}>Connecting Families</AppText>
                </View>
          
        </View>
        <AppText style={styles.Title}>All Carers</AppText>
        <View style={styles.hairline} />
        

        <FlatList
            style={styles.list}
            data={data}
            keyExtractor={Users=>Users.UserID}
            renderItem={({item})=>
            <AppListItem title={item.UserName} subtitle={item.UserEmail} thirdtitle={item.UserPH} icon="chevron-right" onPress={() => navigation.navigate("CPatient",{paramCarer:item.UserID})} onPress1={() => navigation.navigate("CProfile",{paramPatient:item})}
            />   
        }
        />

        </AppScreen>
        
    );
}
const styles = StyleSheet.create({
    heading:{
        flexDirection:"row",
        width:230,
        alignItems:'center',
        marginLeft:110,

    },
    logo:{
        marginTop:10,
        marginLeft:30,
        width:50,
        height:50,
    },
    logoText:{
        fontSize:13,
        paddingLeft:5,
        fontStyle:'italic'
    },
    Title:{
        fontStyle:'italic',
        marginTop:10,
        marginLeft:15,
        fontSize:22
    },
    subheading:{
        fontSize:18,
        marginLeft:10,
    },
    hairline: {
        backgroundColor: '#A2A2A2',
        height: 2,
        width: 340,
        marginLeft: 15
    },fullLine: {
        backgroundColor: '#A2A2A2',
        height: 2,
        width: 500,
        marginTop:10,
        marginBottom: 10
    },
      profileContainer:{
        marginTop: 10,
        height: 90,
        justifyContent:"center",
    },
    textStyle:{
        fontSize:18,
        color:"#1338BE",
        textTransform:'none',
        marginTop:10,
        marginLeft:31
    },
    
})

export default CarerScreen;