import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './APP/navigation/AuthNavigator';
import { View, StyleSheet } from 'react-native';


export default function App() {
  return (
        <NavigationContainer>
          <AuthNavigator/>
        </NavigationContainer>
  );
}


