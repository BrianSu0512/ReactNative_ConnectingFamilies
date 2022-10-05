import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../AppScreen/HomeScreen';
import PersonalProfileScreen from '../AppScreen/PersonalProfileScreen';




const AppStack =  createStackNavigator();


const HomeNavigator = () => (
    <AppStack.Navigator mode="modal">
        <AppStack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="PersonalProfile" component={PersonalProfileScreen} options={{headerShown:false}}/>
    </AppStack.Navigator>
)

export default HomeNavigator;