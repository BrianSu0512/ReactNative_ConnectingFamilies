import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AppTab = createBottomTabNavigator();



import SettingScreen from '../AppScreen/SettingScreen';
import AppIcon from '../Components/AppIcon';
import HomeNavigator from './HomeNavigator';


const TabNavigator = () => (
    <AppTab.Navigator screenOptions={{activeTintColor:"red", headerShown: false}}>
        <AppTab.Screen name="Home" component={HomeNavigator} options={{tabBarIcon: () => <AppIcon size={30} name="home"/>}}/>
        <AppTab.Screen name="Setting" component={SettingScreen} options={{tabBarIcon: () => <AppIcon size={30} name="cog"/>, tabBarStyle: { display: 'none' }}}/>
    </AppTab.Navigator>
)

export default TabNavigator;
