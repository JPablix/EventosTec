// Imports
import { Text, View, Image} from 'react-native'
import React, { Component } from 'react'
// Styles
import { styles } from './ExtendProfileCard.style'

const ExtendProfileCard = () => {
    return (
      <View style={styles.card}>
        <View style={styles.profilePictureContainer}>
            <Image style={styles.profilePicture} source={require('../../../images/profileDefault.png')} /> 
        </View>
        <View style={styles.namesContainer}>
            <Text style={styles.nickName}>NickName</Text>
            <Text style={styles.userName}>UserName</Text>
        </View>
        <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Correo</Text>
            <Text style={styles.infoText}>correo@estudiantec.cr</Text>
            <Text style={styles.infoTitle}>Carnet</Text>
            <Text style={styles.infoText}>202000000</Text>
            <Text style={styles.infoTitle}>Número Celular</Text>
            <Text style={styles.infoText}>+506 0000 0000</Text>
            <Text style={styles.infoTitle}>Biografía</Text>
            <Text style={styles.infoText}>Hola soy...</Text>
        </View>
      </View>
    )
};
export default ExtendProfileCard;