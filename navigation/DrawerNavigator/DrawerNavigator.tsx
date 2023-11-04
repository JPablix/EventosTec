// Imports
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { drawerNavigatorOptions } from './DrawerNavigationOptions';

// Screens
import Inicio from '../../screens/Inicio/Inicio';
import Busqueda from '../../screens/Busqueda/Busqueda';
import Perfil from '../../screens/Perfil/Perfil';
import About from '../../screens/About/About';
import Login from '../../screens/Login/Login';
import Register from '../../screens/Register/Register';
import UpdateUser from '../../screens/UpdateUser/UpdateUser';
import Activities from '../../screens/Activities/Activities';
import EventCreator from '../../screens/Event/EventCreator/EventCreator';
import AllEvents from '../../screens/Event/EventCreator/AllEvents/AllEvents';

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


function OptionsStackScreen() {
  const OptionsStack = createStackNavigator();
  return (
    <OptionsStack.Navigator screenOptions={{}}>
      
    </OptionsStack.Navigator>
  )
}

function DrawerNavigator() {
  const Drawer = createDrawerNavigator();
  const {authState, onLogout} = useAuth();

  //Datos del Usuario
  const userName = authState.data?.userName;
  const organization = authState.data?.isOrganization;

  useEffect(() => {
  }, [authState.authenticated]);

  return (
    <Drawer.Navigator 
      drawerContent={props => <CustomDrawer {...props}userName={userName}/>}
      screenOptions={drawerNavigatorOptions as any}
      initialRouteName="Inicio"
      >
      {/* Pantallas que se muestran solo cuando el usuario no está autenticado */}
      {!authState.authenticated && (
        <>
          <Drawer.Screen 
          name="Auth" 
          component={AuthStackScreen} 
          options={{ 
            headerShown: false,
          }}/>
        </>
      )}
      {/* Pantallas que se muestran cuando el usuario está autenticado */}
      {authState.authenticated && (
        <>
          {/* Pantalla principal*/}
          <Drawer.Screen 
          name="Inicio" 
          component={Inicio} 
          options={{
            drawerIcon: ({color}) => (<Ionicons name='home' size={24} color={color}/>),
          }}/>
          {/* Pantallas que son invocadas por otras*/}
          <Drawer.Screen
          name="UpdateUser"
          component={UpdateUser}
          options={{
            drawerItemStyle: {display: 'none'},
            headerShown: false,
          }}
          />
          <Drawer.Screen
          name="Activities"
          component={Activities}
          options={{
            drawerItemStyle: {display: 'none'},
            headerShown: false,
          }}
          />
          <Drawer.Screen
          name="AllEvents"
          component={AllEvents}
          options={{
            drawerItemStyle: {display: 'none'},
            headerShown: false,
          }}/>
          <Drawer.Screen
          name="EventCreator"
          component={EventCreator}
          options={{
            drawerItemStyle: {display: 'none'},
            headerShown: false,
          }}/>
          
          {/* Pantallas que se muestran siempre */}
          <Drawer.Screen 
          name="Búsqueda" 
          component={Busqueda} 
          options={{
            drawerIcon: ({color}) => (<Ionicons name='search' size={24} color={color}/>),
          }}/>
          <Drawer.Screen 
          name="Perfil" 
          component={Perfil} 
          options={{
            drawerIcon: ({color}) => (<Ionicons name='person' size={24} color={color}/>)
          }}/>
          {/* Pantallas que se muestran cuando el usuario es organización */}
          {organization && (
            <>

            </>
          )}
          <Drawer.Screen 
          name="About" 
          component={About} 
          options={{
          drawerIcon: ({color}) => (<Ionicons name='information-circle' size={24} color={color}/>)
          }}/>
        </>
      )}
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;