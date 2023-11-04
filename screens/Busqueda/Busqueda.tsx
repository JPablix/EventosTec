// Imports
import { View, Text, ScrollView } from "react-native";
import { useState } from "react";
// Styles
import { styles } from "./Busqueda.style";
// Components
import MiniProfileCard from "../../src/components/cards/MiniProfileCard/MiniProfileCard";
import MiniEventCard from "../../src/components/cards/MiniEventCard/MiniEventCard";
import LineTextInput from "../../src/components/inputs/LineTextInput/LineTextInput";

const Busqueda = ({ navigation }) => {
  const [searchPrompt, setsearchPrompt] = useState('');
  
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
      <View style={styles.itemContainer}>
        <LineTextInput
          value={searchPrompt}
          placeholder="Buscar..."
          icon="search"
          deleteButton={true}
          onChangeText={(text) => console.log(text)}
        />
      </View>
      <ScrollView contentContainerStyle={styles.itemContainer}>
      
        
        
    
      </ScrollView>
    </View>
  );
};
export default Busqueda;