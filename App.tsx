// Imports
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext';

// Navigation
import DrawerNavigator from './navigation/DrawerNavigator/DrawerNavigator';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar style='auto'/>
      <AuthProvider>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaView>
  );
}


