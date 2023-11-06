// Imports
import { View, Text, ScrollView } from "react-native";
import { useState } from "react";
// Styles
import { styles } from "./Busqueda.style";
// Components
import LineTextInput from "../../src/components/inputs/LineTextInput/LineTextInput";
import IconTextButton from "../../src/components/buttons/IconTextButton/IconTextButton";

const Busqueda = ({ navigation }) => {
  


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