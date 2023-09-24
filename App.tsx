// Imports
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// Navigation
import DrawerNavigator from './navigation/DrawerNavigator/DrawerNavigator';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar/>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}


