// Imports
import { Text, View, Image} from 'react-native'
import React, { Component } from 'react'
import PropTypes from 'prop-types';
// Styles
import { styles } from './MiniEventCard.style'

const MiniEventCard = (props) => {
    
    return (
    <View style={styles.card}>
        <View style={styles.pictureContainer}>
            <Image style={styles.pictures} source={props.pictureSource} /> 
        </View>
        <View style={styles.infoContainer}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.infoTitle}>Descripción</Text>
            <Text style={styles.infoText}>{props.description}</Text>
            <View style={styles.siteInfo}>
                <View style={styles.datetimeInfo}>
                    <Text style={styles.infoTitle}>Fecha</Text>
                    <Text style={styles.infoText}>{props.date + ", " + props.time}</Text>
                </View>
                <View style={styles.datetimeInfo}>
                    <Text style={styles.infoTitle}>Lugar</Text>
                    <Text style={styles.infoText}>{props.location}</Text>
                </View>
            </View>
        </View>
      </View>
    )
};

//Props
MiniEventCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  location: PropTypes.string,
  pictureSource: PropTypes.any,
};

export default MiniEventCard;
