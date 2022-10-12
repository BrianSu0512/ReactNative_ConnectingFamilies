import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AppTab = createBottomTabNavigator();



import SettingScreen from '../AppScreen/SettingScreen';
import AppIcon from '../Components/AppIcon';
import HomeNavigator from './HomeNavigator';
import AppColour from '../Components/AppColour';
import ScanScreen from '../AppScreen/ScanScreen';


const TabNavigator = () => (
    <AppTab.Navigator tabBarOptions={{activeTintColor:AppColour.white, activeBackgroundColor:AppColour.thirdColor}}>
        <AppTab.Screen name="Home" component={HomeNavigator} options={{tabBarIcon: () => <AppIcon size={30} name="home" backgroundColor={AppColour.otherColor}/> }}/>
        <AppTab.Screen name="Scan" component={ScanScreen} options={{tabBarIcon: () => <AppIcon size={30} name="data-matrix-scan" backgroundColor={AppColour.otherColor}/> }}/>
        <AppTab.Screen name="Setting" component={SettingScreen} options={{tabBarIcon: () => <AppIcon size={30} name="cog" backgroundColor={AppColour.otherColor}/>, tabBarStyle: { display: 'none' }}} />
    </AppTab.Navigator>
)

export default TabNavigator;
