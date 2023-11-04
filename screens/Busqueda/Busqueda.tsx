// Imports
import { View, Text, ScrollView } from "react-native";
import { useState } from "react";
// Styles
import { styles } from "./Busqueda.style";
// Components
import LineTextInput from "../../src/components/inputs/LineTextInput/LineTextInput";
import IconTextButton from "../../src/components/buttons/IconTextButton/IconTextButton";

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
      
        <IconTextButton
          text="Eventos"
          iconName="plus"
          onPress={() => navigation.navigate("Eventos" as never)}/>
        
    
      </ScrollView>
    </View>
  );
};
export default Busqueda;