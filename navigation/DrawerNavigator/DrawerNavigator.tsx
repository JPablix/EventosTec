// Imports
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import Inicio from '../../screens/Inicio/Inicio';
import Busqueda from '../../screens/Busqueda/Busqueda';
import Perfil from '../../screens/Perfil/Perfil';
import About from '../../screens/About/About';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Inicio" component={Inicio} />
      <Drawer.Screen name="Búsqueda" component={Busqueda} />
      <Drawer.Screen name="Perfil" component={Perfil} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;