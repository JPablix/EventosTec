// Imports
import { View, Text, ScrollView, KeyboardAvoidingView, Pressable, Image } from "react-native";
// Styles
import { styles } from "./EventCreator.style";
import { FontAwesome } from "@expo/vector-icons";
import LineTextInput from "../../../src/components/inputs/LineTextInput/LineTextInput";
import { useNavigation } from "@react-navigation/native";
import IconTextButton from "../../../src/components/buttons/IconTextButton/IconTextButton";

const EventCreator = ({ route }) => {
    const navigation = useNavigation();
    const nada = "";
    return (
        <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="height">
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.cardTitle}>Creación de Eventos</Text>
            <View style={styles.card}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>Nombre del Evento</Text>
                    <LineTextInput
                    value={nada}
                    //onChangeText={(text: string) => setData({ ...data, name: text })}
                    placeholder="Nombre con el que aparecerá"
                    />
                    <Text style={styles.inputTitle}>Descripción</Text>
                    <LineTextInput
                    value={nada}
                    //onChangeText={(text: string) => setData({ ...data, carne: text })}
                    placeholder="Carnet Estudiantil"
                    />
                    <Text style={styles.inputTitle}>Lugar del Evento</Text>
                    <LineTextInput
                    value={nada}
                    //onChangeText={(text: string) => setData({ ...data, phone: text })}
                    placeholder="Número de celular funcional"
                    />
                    <Text style={styles.inputTitle}>Fecha y Hora</Text>
                    <LineTextInput
                    value={nada}
                    //onChangeText={(text: string) => setData({ ...data, description: text })}
                    placeholder="Hola soy..."
                    />
                </View>
                <View style={styles.buttonsContainer}>
                    <IconTextButton
                    text = "Cancelar "
                    onPress={() => navigation.navigate("Inicio" as never)}
                    iconName="close"
                    iconPosition="right"
                    />
                    <IconTextButton 
                    text="Confirmar " 
                    onPress={() => {
                        
                        navigation.navigate("Perfil" as never);
                    }}
                    iconName="check"
                    iconPosition="right"
                    />
                </View>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default EventCreator;