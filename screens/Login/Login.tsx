// Imports
import React, { useState } from "react";
import { View, Text, TextInput, Image } from "react-native";
import IconTextButton from "../../src/components/buttons/IconTextButton/IconTextButton";
import { useNavigation } from "@react-navigation/native";

// AuthContext
import { useAuth } from "../../src/context/AuthContext";

// Styles
import { styles } from "./Login.style";
import LineTextInput from "../../src/components/inputs/LineTextInput/LineTextInput";

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { onLogin, onRegister } = useAuth();
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.cardTitle}>Login</Text>
            <View style={styles.card}>
                <Text style={styles.inputTitle}>Correo</Text>
                <LineTextInput
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholder="Email"
                />
                <Text style={styles.inputTitle}>Contraseña</Text>
                <LineTextInput
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    placeholder="Password"
                />
                <View style={styles.buttonsContainer}>
                    <IconTextButton 
                    text="Login" onPress={() => onLogin(email, password)}/>
                    <IconTextButton
                    text = "Register "
                    iconName="chevron-right"
                    iconPosition="right"
                    onPress={() => navigation.navigate("Register" as never)}/>
                </View>
            </View>
        </View>
    )
}
export default Login