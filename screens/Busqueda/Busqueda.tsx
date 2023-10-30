// Imports
import { View, Text } from "react-native";
// Styles
import { styles } from "./Busqueda.style";
// Components
import MiniProfileCard from "../../src/components/cards/MiniProfileCard/MiniProfileCard";
import MiniEventCard from "../../src/components/cards/MiniEventCard/MiniEventCard";
import { ScrollView } from "react-native-gesture-handler";

const Busqueda = () => {
  const image = require("../../src/assets/eventDefault.png");
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.itemContainer}>
      
        <MiniProfileCard 
          nickName="JPablix" 
          name="Jose Granados" 
          career="Ingeniería en Computación" 
          carnet="2022028503"/>
        <MiniEventCard 
          title="No quería tomar, pero..." 
          description="Esta es la descripción de un evento"
          date="09 de Noviembre"
          time="20:00"
          location="Bar Einstein"
          pictureSource={image}/>
        <MiniProfileCard 
          nickName="Mela" 
          name="Melany García" 
          career="Administración de Empresas" 
          carnet="2022097546"/>
        <MiniEventCard />
    
      </ScrollView>
    </View>
  );
};
export default Busqueda;