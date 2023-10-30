// Imports
import { View, Text } from "react-native";
// Styles
import { styles } from "./Busqueda.style";
// Components
import MiniProfileCard from "../../src/components/cards/MiniProfileCard/MiniProfileCard";
import MiniEventCard from "../../src/components/cards/MiniEventCard/MiniEventCard";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Busqueda = ({ navigation }) => {

  const activityList = [
    {
      _id: "5d3a503c2f4b3a8c14b8d83a", 
      startTime: "2021-07-24T00:00:00.000Z",
      title: "Actividad 1",
    },
    {
      _id: "5d2a503c2f4b3a8c14b8d83a",
      startTime: "2021-09-24T00:00:00.000Z",
      title: "Actividad 2",
    },
  ];
  const handleCardPress = (activityList) => {
    navigation.navigate('Activities', { activityList });
  };  
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.itemContainer}>
      
        <MiniProfileCard 
          nickName="JPablix" 
          name="Jose Granados" 
          career="Ingeniería en Computación" 
          carnet="2022028503"
          imageSource={require("../../src/assets/profileDefault.png")}/>
        <MiniEventCard 
          title="No quería tomar, pero..." 
          description="Esta es la descripción de un evento"
          date="09 de Noviembre"
          time="20:00"
          location="Bar Einstein"
          pictureSource={require("../../src/assets/eventDefault.png")}
          onCardPress={() => handleCardPress(activityList)}/>
        <MiniProfileCard 
          nickName="Mela" 
          name="Melany García" 
          career="Administración de Empresas" 
          carnet="2022097546"/>
        <MiniEventCard 
          title= "Fiesta de cumpleaños"
          description="Esta es la descripción de un evento"
          date="20 de Septiembre"
          time="18:00"
          location="Casa de Mela"
          onCardPress={() => handleCardPress(activityList)}/>
    
      </ScrollView>
    </View>
  );
};
export default Busqueda;