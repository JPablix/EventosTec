// Imports
import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import IconTextButton from "../../src/components/buttons/IconTextButton/IconTextButton";

// AuthContext
import { useAuth } from "../../src/context/AuthContext";

// Styles
import { styles } from "./Login.style";

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { onLogin, onRegister } = useAuth();
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.inputTitle}>Email</Text>
                <TextInput
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholder="Email"
                />
                <Text style={styles.inputTitle}>Password</Text>
                <TextInput
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    placeholder="Password"
                />
                <IconTextButton text="Login" onPress={() => onLogin(email, password)} />
            </View>
        </View>
    )
}
export default Login