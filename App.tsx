// Imports
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { AuthProvider } from './src/context/AuthContext';

// Fonts
import { useFonts } from "@expo-google-fonts/oswald";

import { Fonts } from './src/constants/Fonts';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator/DrawerNavigator';

export default function App() {
  const [fontsLoaded] = useFonts(Fonts);
  if (!fontsLoaded) {
    return null;
  }

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


