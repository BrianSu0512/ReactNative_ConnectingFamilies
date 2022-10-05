import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight,TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AppColour from './AppColour';
import AppIcon from './AppIcon';

import AppText from './AppText';



function AppListItem({image, title, subtitle,thirdtitle,IconComponent, icon, onPress, onSwipeLeft}) {
    console.log(onPress)
    return (
        <Swipeable renderRightActions={onSwipeLeft}>
            <TouchableHighlight  underlayColor={AppColour.otherColorLite}>
                <View style={styles.container}>
        
                    {image && <Image source={image} style={styles.image}/>}
                    <View style={styles.textContainer}>
                        <AppText style={styles.title}> {title} </AppText>
                        {subtitle && <AppText style={styles.subtitle}> {subtitle} </AppText>}
                        {thirdtitle && <AppText style={styles.subtitle}> {thirdtitle} </AppText>}
                        
                    </View>
                    <View style={styles.iconContainer}>
                    <TouchableOpacity   onPress={onPress}>
                    <AppIcon name={icon} size={50} />
                    </TouchableOpacity>
                 
                    </View>
                   
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:10,
        backgroundColor:"red"
    },
    image:{
        height: 75,
        width: 75,
        borderRadius: 37,
        marginLeft: 10,
    },
    textContainer:{
        flexDirection:"column",
        marginLeft: 20,
        backgroundColor:"green"
    },
    title:{
        fontWeight:"bold",
        marginVertical: 5,
    },
    subtitle:{
        fontSize:15,
    },iconContainer:{
        marginLeft:90,
        justifyContent:'center',
        alignItems:'center'
    }
    
})

export default AppListItem;