// Imports
import { Text, View, Image} from 'react-native'
import React, { Component } from 'react'
import PropTypes from 'prop-types';
// Styles
import { styles } from './ExtendProfileCard.style'

const ExtendProfileCard = (props) => {
    return (
      <View style={styles.card}>
        <View style={styles.profilePictureContainer}>
            <Image style={styles.profilePicture} source={props.imageSource} /> 
        </View>
        <View style={styles.namesContainer}>
            <Text style={styles.nickName}>{props.userData.userNickname}</Text>
            <Text style={styles.userName}>{props.userData.userRealName}</Text>
        </View>
        <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Correo</Text>
            <Text style={styles.infoText}>{props.userData.userEmail}</Text>
            <Text style={styles.infoTitle}>Carnet</Text>
            <Text style={styles.infoText}>{props.userData.userCarne}</Text>
            <Text style={styles.infoTitle}>Número Celular</Text>
            <Text style={styles.infoText}>{props.userData.userPhone}</Text>
            <Text style={styles.infoTitle}>Biografía</Text>
            <Text style={styles.infoText}>{props.userData.description}</Text>
        </View>
      </View>
    )
};

//Props
ExtendProfileCard.propTypes = {
  userData: PropTypes.object,
  imageSource: PropTypes.any,
};

export default ExtendProfileCard;
