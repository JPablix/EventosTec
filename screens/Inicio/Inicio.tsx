// Imports
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
// Styles
import { styles } from "./Inicio.style";
// Components
import IconTextButton from "../../src/components/buttons/IconTextButton/IconTextButton";

const Inicio = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Inicio</Text>
      <IconTextButton
        text="Crear evento"
        iconName="plus"
        onPress={() => navigation.navigate("EventCreator" as never)}
      />
    </View>
  );
};
export default Inicio;