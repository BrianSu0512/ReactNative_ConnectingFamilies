import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../AppScreen/HomeScreen';
import PersonalProfileScreen from '../AppScreen/PersonalProfileScreen';
import EmergencyContactScreen from '../AppScreen/EmergencyContactScreen';
import MedicalHistoryScreen from '../AppScreen/MedicalHistoryScreen';
import PrescriptionScreen from '../AppScreen/PrescriptionScreen';
import MedicalLogScreen from '../AppScreen/MedicalLogScreen';
import MHomeScreen from '../AppScreen/MHomeScreen';
import CPatientScreen from '../AppScreen/CPatientScreen';
import MPersonalProfileScreen from '../AppScreen/MPersonProfile';
import EditProfileScreen from '../AppScreen/EditProfileScreen';
import AddHistoryScreen from '../AppScreen/AddHistoryScreen';
import EditHistoryScreen from '../AppScreen/EditHistoryScreen';
import AddPrescriptionScreen from '../AppScreen/AddPrescription';
import EditPrescriptionScreen from '../AppScreen/EditPrescription';
import AddPatientScreen from '../AppScreen/AddPatientScreen';


const AppStack =  createStackNavigator();


const HomeNavigator = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="MHome" component={MHomeScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="PersonalProfile" component={PersonalProfileScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="MPersonalProfile" component={MPersonalProfileScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="EditProfile" component={EditProfileScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="EditHistoryScreen" component={EditHistoryScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="EditPrescription" component={EditPrescriptionScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="CPatient" component={CPatientScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="AddHistory" component={AddHistoryScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="AddPrescription" component={AddPrescriptionScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Emergency" component={EmergencyContactScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="MedicalHistory" component={MedicalHistoryScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Prescription" component={PrescriptionScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="MedicalLog" component={MedicalLogScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="AddPatient" component={AddPatientScreen} options={{headerShown:false}}/>
    </AppStack.Navigator>
)

export default HomeNavigator;