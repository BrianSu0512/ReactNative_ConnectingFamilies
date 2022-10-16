import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight,TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AppColour from './AppColour';
import AppIcon from './AppIcon';

import AppText from './AppText';



function AppListItem({image, title, subtitle,thirdtitle,IconComponent, icon, onPress,onPress1, onSwipeLeft}) {

    const picture=image>0 ?<Image source={image} style={styles.image}/>
    :<Image source={{uri: image}} style={styles.image}/>

    return (
        <Swipeable renderRightActions={onSwipeLeft}>
           
                <View style={styles.container}>
                <TouchableOpacity   onPress={onPress1}>
                    <View style={styles.container}>
                    {picture}
                    <View style={styles.textContainer}>
                        <AppText style={styles.title}> {title} </AppText>
                        {subtitle && <AppText style={styles.subtitle}> {subtitle} </AppText>}
                        {thirdtitle && <AppText style={styles.subtitle}> {thirdtitle} </AppText>}
                   
                    </View>
                    </View>
                    
                    </TouchableOpacity>
                    <View style={styles.iconContainer}>
                    <TouchableOpacity   onPress={onPress}>
                    <AppIcon name={icon} size={50} />
                    </TouchableOpacity>
                 
                    </View>
                   
                </View>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:10,
        justifyContent:'space-between'
    },
    image:{
        height: 75,
        width: 75,
        borderRadius: 37,
        marginLeft: 10,
        marginTop:10
    },
    textContainer:{
        flexDirection:"column",
        marginLeft: 20,
        paddingTop:5,
    },
    title:{
        fontWeight:"bold",
        marginVertical: 5,
    },
    subtitle:{
        fontSize:15,
    },iconContainer:{
        justifyContent:'center',
        alignItems:'center'
    }
    
})

export default AppListItem;