// Imports
import { useState } from "react";
import { View, Text, ScrollView, KeyboardAvoidingView, TextInput, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { updateProfileInfo } from "../../src/api/users/users";
import * as ImagePicker from "expo-image-picker";

// Styles
import { styles } from "./UpdateUser.style";

// AuthContext
import { useAuth } from "../../src/context/AuthContext";

// Components
import LineTextInput from "../../src/components/inputs/LineTextInput/LineTextInput";
import IconTextButton from "../../src/components/buttons/IconTextButton/IconTextButton";
import FontAwesome from "@expo/vector-icons/build/FontAwesome";

const UpdateUser = ({ route }) => {

    const Buffer = require("buffer").Buffer;
    
    const [data, setData] = useState<any>({
        name: "",
        carne: "",
        phone: "",
        description: "",
        profilePicture: "",
    });

    // Auth Context
    const {authState, onRegister, onLogin } = useAuth();
    // Navigation
    const navigation = useNavigation();

    // Image Picker
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            });
            if (!result.canceled) {
            const imageUri = result.assets[0].uri;
            const response = await fetch(imageUri);
            const blob = await response.blob();
        
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = async () => {
                // @ts-ignore
                const base64data = reader.result.split(",")[1];
                const binaryData = Buffer.from(base64data, "base64");
                setData({ ...data, profilePicture: binaryData });
            };
        }
    };

    const handleUpdateProfileInfo = async () => {
        const response = await updateProfileInfo(data);
        console.log({ ...response.data, code: response.status },);
      };
    return (
        <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="height">
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.cardTitle}>Editar Perfil</Text>
                <View style={styles.card}>
                    <View style={styles.imageContainer}>
                        <Pressable style={styles.imageButton} onPress={pickImage}>
                            <Image
                                source={
                                data.profilePicture !== ""
                                    ? {
                                        uri: `data:image/png;base64,${Buffer.from(
                                        data.profilePicture
                                        ).toString("base64")}`,
                                    }
                                    : require("../../src/assets/profileDefault.png")
                                }
                                style={styles.profileImage}
                            />
                            <View style={styles.addButton}>
                                <FontAwesome name="edit" style={styles.addIcon}/>
                            </View>
                        </Pressable>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputTitle}>Nombre Completo</Text>
                        <LineTextInput
                        value={data.name}
                        onChangeText={(text: string) => setData({ ...data, name: text })}
                        placeholder="Nombre como sale en la cédula"
                        />
                        <Text style={styles.inputTitle}>Carnet</Text>
                        <LineTextInput
                        value={data.carne}
                        onChangeText={(text: string) => setData({ ...data, carne: text })}
                        placeholder="Carnet Estudiantil"
                        />
                        <Text style={styles.inputTitle}>Número Celular</Text>
                        <LineTextInput
                        value={data.phone}
                        onChangeText={(text: string) => setData({ ...data, phone: text })}
                        placeholder="Número de celular funcional"
                        />
                        <Text style={styles.inputTitle}>Biografía</Text>
                        <LineTextInput
                        value={data.description}
                        onChangeText={(text: string) => setData({ ...data, description: text })}
                        placeholder="Hola soy..."
                        />
                    </View>
                    <View style={styles.buttonsContainer}>
                        <IconTextButton
                        text = "Cancelar "
                        onPress={() => navigation.navigate("Perfil" as never)}
                        iconName="close"
                        iconPosition="right"
                        />
                        <IconTextButton 
                        text="Confirmar " 
                        onPress={() => {
                            handleUpdateProfileInfo();
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
export default UpdateUser;