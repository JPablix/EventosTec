// Imports
import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Styles
import { styles } from "./Perfil.style";

// AuthContext
import { useAuth } from "../../src/context/AuthContext";

// Components
import ExtendProfileCard from "../../src/components/cards/ExtendProfileCard/ExtendProfileCard";
import IconTextButton from "../../src/components/buttons/IconTextButton/IconTextButton";
import React, { useState, useEffect } from 'react';

const Inicio = () => {
  // Auth Context
  const {authState} = useAuth();
  // Navigation
  const navigation = useNavigation();

  const Buffer = require("buffer").Buffer;

  const [userData, setUserData] = useState({
    userNickname: authState.data.userName || "Edita para definir",
    userRealName: authState.data.name || "Edita para definir",
    userEmail: authState.data.email || "Edita para definir",
    userCarne: authState.data.carne || "Edita para definir",
    userPhone: authState.data.phone || "Edita para definir",
    description: authState.data.description || "Edita para definir",
    profilePicture: authState.data.profilePicture || "Edita para definir",
  });

  const handleUpdateUserData = () => {
    const newUserData = {
        userNickname: authState.data.userName || "Se actualizó",
        userRealName: authState.data.name || "Se actualizó",
        userEmail: authState.data.email || "Se actualizó",
        userCarne: authState.data.carne || "Se actualizó",
        userPhone: authState.data.phone || "Se actualizó",
        description: authState.data.description || "Se actualizó",
        profilePicture: authState.data.profilePicture || "Se actualizó",
      };
      setUserData(newUserData);
    };
  
    React.useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        handleUpdateUserData();
        console.log("Se actualizó. Nombre:", authState.data.name);
      });
      return unsubscribe;
    }, [navigation]);

  return (
    <View style={styles.container}>
      <ExtendProfileCard userData={userData} />
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