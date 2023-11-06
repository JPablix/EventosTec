// Imports
import { View, Text, ScrollView } from "react-native";
// Styles
import { styles } from "./Activities.style";
// Components
import MiniActivityCard from "../../src/components/cards/MiniActivityCard/MiniActivityCard";
import IconTextButton from "../../src/components/buttons/IconTextButton/IconTextButton";




const Activities = ({ route }) => {
    
    const { activityList } = route.params;
    console.log(activityList);
    if (!activityList || activityList.length === 0) {
      return (
        <View style={styles.adviceContainer}>
          <Text style={styles.noEvents}>No hay actividades disponibles.</Text>
        </View>
      );
    }
    return (
    <ScrollView contentContainerStyle={styles.container}>
      {!activityList ? (
        <ScrollView contentContainerStyle={styles.itemContainer}>
          {activityList.map((activity,key) => (
             <MiniActivityCard key={key} {...activity} />
          ))}
        </ScrollView>
      ) : (
        <View style={styles.adviceContainer}>
          <Text style={styles.noEvents}>No hay eventos disponibles.</Text>
        </View>
      )}
      <View style={styles.buttonsContainer}>
        <IconTextButton
          text="Agregar Actividad "
          iconName="plus"
          iconPosition="right"
          onPress={() => console.log("Agregar actividad")}
        />
        <IconTextButton
          text="Eliminar Evento "
          iconName="trash"
          iconPosition="right"
          onPress={() => console.log("Borrar actividad")}
        />
      </View>
      
    </ScrollView>
  );
};



export default Activities;