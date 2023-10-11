// Imports
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Styles
import { styles } from "./Perfil.style";

// Components
import ExtendProfileCard from "../../src/components/cards/ExtendProfileCard/ExtendProfileCard";
import IconTextButton from "../../src/components/buttons/IconTextButton/IconTextButton";

const Inicio = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ExtendProfileCard/>
      <IconTextButton
      text = "Editar Perfil"
      onPress={() => navigation.navigate("UpdateUser" as never)}/>
    </View>
  );
};
export default Inicio;