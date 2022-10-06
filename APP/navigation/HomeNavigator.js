import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../AppScreen/HomeScreen';
import PersonalProfileScreen from '../AppScreen/PersonalProfileScreen';
import EmergencyContactScreen from '../AppScreen/EmergencyContactScreen';
import MedicalHistoryScreen from '../AppScreen/MedicalHistoryScreen';




const AppStack =  createStackNavigator();


const HomeNavigator = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="PersonalProfile" component={PersonalProfileScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Emergency" component={EmergencyContactScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="MedicalHistory" component={MedicalHistoryScreen} options={{headerShown:false}}/>

    </AppStack.Navigator>
)

export default HomeNavigator;