// Imports
import { Text, View, Image} from 'react-native'
import React, { Component } from 'react'
import PropTypes from 'prop-types';
// Styles
import { styles } from './MiniProfileCard.style'

const MiniProfileCard = (props) => {
    return (
      <View style={styles.card}>
        <View style={styles.profilePictureContainer}>
            <Image style={styles.profilePicture} source={props.imageSource} /> 
        </View>
        <View style={styles.infoContainer}>
            <Text style={styles.nickName}>{props.nickName}</Text>
            <Text style={styles.infoText}>{props.name}</Text>
            <Text style={styles.infoTitle}>Carnet</Text>
            <Text style={styles.infoText}>{props.carnet}</Text>
            <Text style={styles.infoTitle}>Carrera</Text>
            <Text style={styles.infoText}>{props.career}</Text>
        </View>
      </View>
    )
};

//Props
MiniProfileCard.propTypes = {
  nickName: PropTypes.string,
  name: PropTypes.string,
  carnet: PropTypes.string,
  career: PropTypes.string,
  imageSource: PropTypes.any,
};

export default MiniProfileCard;
