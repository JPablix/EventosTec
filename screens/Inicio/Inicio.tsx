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
      <View>
        
      </View>
    </View>
  );
};
export default Inicio;