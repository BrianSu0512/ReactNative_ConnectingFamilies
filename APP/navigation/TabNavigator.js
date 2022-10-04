import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AppTab = createBottomTabNavigator();

import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import MyMemoriesScreen from '../screens/MyMemoriesScreen';
import NewMemoryScreen from '../screens/NewMemoryScreen';
import AppIcon from '../components/AppIcon';
import HomeNavigator from './HomeNavigator';

const TabNavigator = () => (
    <AppTab.Navigator screenOptions={{activeTintColor:"red", headerShown: false}}>
        <AppTab.Screen name="Home" component={HomeNavigator} options={{tabBarIcon: () => <AppIcon size={50} name="home"/>}}/>
        <AppTab.Screen name="New Memory" component={NewMemoryScreen} options={{tabBarIcon: () => <AppIcon size={50} name="plus-circle-outline"/>}}/>
        <AppTab.Screen name="Logout" component={WelcomeScreen} options={{tabBarIcon: () => <AppIcon size={50} name="logout"/>, tabBarStyle: { display: 'none' }}}/>
    </AppTab.Navigator>
)

export default TabNavigator;
