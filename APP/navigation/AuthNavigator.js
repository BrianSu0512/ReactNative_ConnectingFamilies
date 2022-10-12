import react from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../AppScreen/WelcomeScreen';
import LoginScreen from '../AppScreen/LoginScreen';
import RegisterScreen from '../AppScreen/RegisterScreen';
import SettingScreen from '../AppScreen/SettingScreen';
import TabNavigator from './TabNavigator';
import EditAccountScreen from '../AppScreen/EditAccountScreen';
import ChangePasswordScreen from '../AppScreen/ChangePasswordScreen';




const AppStack = createStackNavigator();

const AuthNavigator = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="EditAcc" component={EditAccountScreen} options={{headerShown:false}}/>  
        <AppStack.Screen name="ChangePass" component={ChangePasswordScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Home" component={TabNavigator} options={{headerShown:false}}/> 
        <AppStack.Screen name="Setting" component={TabNavigator} options={{headerShown:false}}/> 
    </AppStack.Navigator>
)

export default AuthNavigator;