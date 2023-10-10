// Imports
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Inicio from '../../screens/Inicio/Inicio';
import Busqueda from '../../screens/Busqueda/Busqueda';
import Perfil from '../../screens/Perfil/Perfil';
import About from '../../screens/About/About';
import Login from '../../screens/Login/Login';
import Register from '../../screens/Register/Register';

// Components
import CustomDrawer from '../../src/components/drawers/CustomDrawer/CustomDrawer';

// Context
import { AuthProvider, useAuth } from "../../src/context/AuthContext";

function AuthStackScreen() {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
}

function DrawerNavigator() {
  const Drawer = createDrawerNavigator();
  const {authState} = useAuth();

  useEffect(() => {
  }, [authState.authenticated]);

  return (
    <Drawer.Navigator 
      drawerContent={props => <CustomDrawer {...props}/>}
      screenOptions={{
        drawerActiveBackgroundColor: '#4298da',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#000',
        drawerLabelStyle: {
          marginLeft: -25, 
          fontSize: 16,
        },
      }}>
      {/* Pantallas que se muestran solo cuando el usuario no está autenticado */}
      {!authState.authenticated && (
          <Drawer.Screen 
          name="Auth" 
          component={AuthStackScreen} 
          options={{ 
            headerShown: false,
          }}/>
      )}
      {/* Pantallas que se muestran cuando el usuario está autenticado */}
      {authState.authenticated && (
        <>
          <Drawer.Screen 
          name="Inicio" 
          component={Inicio} 
          options={{
            drawerIcon: ({color}) => (<Ionicons name='home' size={23} color={color} />)
          }}/>
          <Drawer.Screen 
          name="Búsqueda" 
          component={Busqueda} 
          options={{
            drawerIcon: ({color}) => (<Ionicons name='search' size={23} color={color} />)
          }}/>
          <Drawer.Screen 
          name="Perfil" 
          component={Perfil} 
          options={{
            drawerIcon: ({color}) => (<Ionicons name='person' size={23} color={color} />)
          }}/>
          <Drawer.Screen 
          name="About" 
          component={About} 
          options={{
          drawerIcon: ({color}) => (<Ionicons name='information-circle' size={23} color={color} />)
          }}/>
        </>
      )}
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;