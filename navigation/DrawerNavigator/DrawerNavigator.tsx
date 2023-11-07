// Imports
import React, { useCallback, useEffect, useState } from 'react';
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { drawerNavigatorOptions } from './DrawerNavigationOptions';
import { useFocusEffect } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
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
import AllEvents from '../../screens/Event/AllEvents/AllEvents';
import OwnEvents from '../../screens/Event/OwnEvents/OwnEvents';
import UpdateEvents from '../../screens/Event/UpdateEvents/UpdateEvents';
import MyEvents from '../../screens/Event/MyEvents/MyEvents';
// Components
import CustomDrawer from '../../src/components/drawers/CustomDrawer/CustomDrawer';
// Context
import { useAuth } from "../../src/context/AuthContext";
import ActivityCreator from '../../screens/Activities/ActivityCreator/ActivityCreator';
// Stack Screens
function AuthStackScreen() {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
}
// Types
type UserProfile = {
  userName: string;
  isOrganization: boolean;
  profilePicture: {
    uri: string;
  };
};

function DrawerNavigator() {
  // Navigation
  const Drawer = createDrawerNavigator();
  // Auth Data
  const {authState, onGetProfile} = useAuth();
  useEffect(() => {
  }, [authState.authenticated]);
  // Profile Picture
  const Buffer = require("buffer").Buffer;
  const defaultProfilePicture = require('../../src/assets/profileDefault.png');
  // User Data
  const [userData, setUserData] = useState<UserProfile>({
    userName: "User",  
    isOrganization: false, 
    profilePicture: { uri: "  "	 },
  });
  const updateProfileInfo = async () => {
    const response = await onGetProfile();
    setUserData({
      userName: response.userName || "User",
      isOrganization: response.isOrganization || false,
      profilePicture: {
        // @ts-ignore
        uri: response.profilePicture
        ? `data:image/png;base64,${Buffer.from(
          response.profilePicture
          ).toString("base64")}`
          : Image.resolveAssetSource(defaultProfilePicture).uri,
      }
    });
  };

  return (
    <Drawer.Navigator 
      drawerContent={props => 
        <CustomDrawer {...props} 
          updateDrawer={updateProfileInfo} 
          userName={userData.userName} 
          image={userData.profilePicture}
          />
        }
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
          }}
          />
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
          name="Actividades"
          component={Activities}
          options={{
            drawerItemStyle: {display: 'none'},
          }}
          />
          <Drawer.Screen
          name="Añadir Actividad"
          component={ActivityCreator}
          options={{
            drawerItemStyle: {display: 'none'},
          }}
          />
          <Drawer.Screen
          name="Eventos"
          component={AllEvents}
          options={{
            drawerItemStyle: {display: 'none'},
          }}/>
          <Drawer.Screen
          name="Creación de Eventos"
          component={EventCreator}
          options={{
            drawerItemStyle: {display: 'none'},
          }}/>
          <Drawer.Screen
          name="UpdateEvents"
          component={UpdateEvents}
          options={{
            drawerItemStyle: {display: 'none'},
            //headerShown: false,
          }}/>
          
          {/* Pantallas que se muestran siempre */}
          <Drawer.Screen 
          name="Búsqueda" 
          component={Busqueda} 
          options={{
            drawerIcon: ({color}) => (<Ionicons name='search' size={24} color={color}/>),
          }}/>
          <Drawer.Screen 
          name="Mis Eventos" 
          component={MyEvents} 
          options={{
            drawerIcon: ({color}) => (<Ionicons name='ios-people-sharp' size={24} color={color}/>),
          }}/>
          <Drawer.Screen 
          name="Perfil" 
          component={Perfil} 
          options={{
            drawerIcon: ({color}) => (<Ionicons name='person' size={24} color={color}/>)
          }}/>
          {/* Pantallas que se muestran cuando el usuario es organización */}
          {userData.isOrganization && (
            <>
              <Drawer.Screen 
              name="Eventos Creados" 
              component={OwnEvents} 
              options={{
              drawerIcon: ({color}) => (<Ionicons name='ios-calendar-sharp' size={24} color={color}/>)
              }}/>
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

function onGetProfile() {
  throw new Error('Function not implemented.');
}
