// Imports
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

// Screens
import Inicio from '../../screens/Inicio/Inicio';
import Busqueda from '../../screens/Busqueda/Busqueda';
import Perfil from '../../screens/Perfil/Perfil';
import About from '../../screens/About/About';

// Components
import CustomDrawer from '../../src/components/drawers/CustomDrawer/CustomDrawer';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator 
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#4298da',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#000',
        drawerLabelStyle: {
          marginLeft: -25, 
          fontSize: 16,
        },
      }}>
      <Drawer.Screen 
        name="Inicio" 
        component={Inicio} 
        options={{
        drawerIcon: ({color}) => (
          <Ionicons name='home' size={23} color={color} />
        )
      }}/>
      <Drawer.Screen 
        name="Búsqueda" 
        component={Busqueda} 
        options={{
        drawerIcon: ({color}) => (
          <Ionicons name='search' size={23} color={color} />
        )
      }}/>
      <Drawer.Screen 
        name="Perfil" 
        component={Perfil} 
        options={{
        drawerIcon: ({color}) => (
          <Ionicons name='person' size={23} color={color} />
        )
      }}/>
      <Drawer.Screen 
        name="About" 
        component={About} 
        options={{
        drawerIcon: ({color}) => (
          <Ionicons name='information-circle' size={23} color={color} />
        )
      }}/>
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;