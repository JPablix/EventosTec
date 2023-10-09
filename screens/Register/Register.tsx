// Imports
import { useState } from "react";
import { View, Text, ScrollView, KeyboardAvoidingView, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Styles
import { styles } from "./Register.style";

// AuthContext
import { useAuth } from "../../src/context/AuthContext";

// Components
import LineTextInput from "../../src/components/inputs/LineTextInput/LineTextInput";
import IconTextButton from "../../src/components/buttons/IconTextButton/IconTextButton";

const Register = () => {
    // Inputs states
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [userName, setUserName] = useState<string>("");
    const [isOrganization, setIsOrganization] = useState<boolean>(false);
    // Auth Context
    const { onRegister, onLogin } = useAuth();
    // Navigation
    const navigation = useNavigation();
    
    const handleRegister = async () => {
        const register = await onRegister(
            email,
            password,
            userName,
            isOrganization
        );
        if (!register) return;
        await onLogin(email, password);
        if (isOrganization) {
          navigation.navigate("SetOrganizationInfo" as never);
        } else {
          navigation.navigate("SetUserInfo" as never);
        }
      };


  return (
    <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="height">
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.cardTitle}>Registrarse</Text>
            <View style={styles.card}>
                <Text style={styles.inputTitle}>Nombre de Usuario</Text>
                <LineTextInput
                        value={userName}
                        onChangeText={(text) => setEmail(text)}
                        placeholder="Nombre a mostrar"
                    />
                <Text style={styles.inputTitle}>Correo</Text>
                <LineTextInput
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholder="Correo estudiantec"/>
                <Text style={styles.inputTitle}>Contraseña</Text>
                <LineTextInput
                        value={password}
                        onChangeText={(text) => setEmail(text)}
                        placeholder="Contraseña"/>
                <View style={styles.buttonsContainer}>
                  <IconTextButton
                  text = "Regresar a Login"
                  onPress={() => navigation.navigate("Login" as never)}/>
                  <IconTextButton 
                  text="Registrarse" 
                  onPress={handleRegister} />
                </View>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default Register;