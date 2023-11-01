// Imports
import { View, Image, Text } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

// Styles
import { styles } from "./Perfil.style";

// AuthContext
import { useAuth } from "../../src/context/AuthContext";

// Components
import ExtendProfileCard from "../../src/components/cards/ExtendProfileCard/ExtendProfileCard";
import IconTextButton from "../../src/components/buttons/IconTextButton/IconTextButton";
import React, { useState, useEffect, useCallback } from 'react';

const Inicio = () => {
  // Auth Context
  const {authState, onGetProfile} = useAuth();
  // Navigation
  const navigation = useNavigation();
  // Buffer for image
  const Buffer = require("buffer").Buffer;

  const [userData, setUserData] = useState({
    userNickname: authState.data.userName || "Edita para definir",
    userRealName: authState.data.name || "Edita para definir",
    userEmail: authState.data.email || "Edita para definir",
    userCarne: authState.data.carne || "Edita para definir",
    userPhone: authState.data.phone || "Edita para definir",
    description: authState.data.description || "Edita para definir",
    profilePicture: authState.data.profilePicture || "",
  });

  const updateProfileInfo = async () => {
    const response = await onGetProfile();
    setUserData({
      userNickname: response.userName || "Edita para definir",
      userRealName: response.name || "Edita para definir",
      userEmail: response.email || "Edita para definir",
      userCarne: response.carne || "Edita para definir",
      userPhone: response.phone || "Edita para definir",
      description: response.description || "Edita para definir",
      profilePicture: response.profilePicture || "",
    });
  };

  useFocusEffect(
    useCallback(() => {
      updateProfileInfo();
      console.log("Profile updated");
    }, [])
  );
  
  return (
    <View style={styles.container}>
      <ExtendProfileCard 
        userData={userData} 
        imageSource={{
          uri: `data:image/png;base64,${Buffer.from(
            userData.profilePicture
          ).toString("base64")}`,
        }}
      />
      <IconTextButton
        text="Editar Perfil"
        onPress={() => {
          navigation.navigate("UpdateUser" as never);
        }}
      />
    </View>
  );
};
export default Inicio;