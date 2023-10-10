// Imports
import { useState } from "react";
import { View, Text, ScrollView, KeyboardAvoidingView, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Styles
import { styles } from "./UpdateUser.style";

// AuthContext
import { useAuth } from "../../src/context/AuthContext";

// Components
import LineTextInput from "../../src/components/inputs/LineTextInput/LineTextInput";
import IconTextButton from "../../src/components/buttons/IconTextButton/IconTextButton";
import SwitchInput from "../../src/components/inputs/SwitchInput/SwitchInput";

const UpdateUser = () => {
    // Inputs states
    const [data, setData] = useState<any>({
        name: "",
        carnet: "",
        phone: "",
        description: "",
        profilePicture: "",
    });
    // Auth Context
    const { onRegister, onLogin } = useAuth();
    // Navigation
    const navigation = useNavigation();

    return (
        <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="height">
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.cardTitle}>Editar Perfil</Text>
                <View style={styles.card}>
                    <Text style={styles.inputTitle}>Nombre Completo</Text>
                    <LineTextInput
                            value={data.name}
                            onChangeText={(text: string) => setData({ ...data, name: text })}
                            placeholder="Nombre como sale en la cédula"
                        />
                    <Text style={styles.inputTitle}>Carnet</Text>
                    <LineTextInput
                        value={data.carnet}
                        onChangeText={(text: string) => setData({ ...data, carne: text })}
                        placeholder="Carnet Estudiantil"
                        />
                    <Text style={styles.inputTitle}>Número Celular</Text>
                    <LineTextInput
                            value={data.phone}
                            onChangeText={(text: string) => setData({ ...data, phone: text })}
                            placeholder="Número de celular funcional"/>
                    <Text style={styles.inputTitle}>Biografía</Text>
                    <LineTextInput
                            value={data.description}
                            onChangeText={(text: string) => setData({ ...data, description: text })}
                            placeholder="Hola soy..."/>
                    <View style={styles.buttonsContainer}>
                    <IconTextButton
                    text = " Login"
                    onPress={() => navigation.navigate("Login" as never)}
                    iconName="chevron-left"
                    iconPosition="left"
                    />
                    <IconTextButton 
                    text="Confirmar" 
                    onPress={nada => {
                        console.log("Cambiar Datos");
                    }}
                    />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};
export default UpdateUser;