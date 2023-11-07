// Imports
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { Text, View, Image, Pressable} from 'react-native'
import { handleDate } from '../../../utils/handleDate';
import { useNavigation } from '@react-navigation/native';
// Styles
import { styles } from './MiniEventCard.style'
// Components
import IconTextButton from '../../buttons/IconTextButton/IconTextButton';
import { deleteEvent } from '../../../api/events/events';
import { useAuth } from '../../../context/AuthContext';

import {
    joinUserToEvent,
    leaveUserFromEvent,
  } from "../../../api/events/events";

const MiniEventCard = (props) => {

    const start = handleDate(props.event.startTime);
    const handleCardPress = () => {
        props.onCardPress(props.event._id);
    }
    
    return (
        <View style={styles.card}>
            <View style={styles.pictureContainer}>
                <Image style={styles.pictures} source={props.pictureSource ? props.pictureSource : require("../../../assets/eventDefault.png")} />
                <Text style={styles.category}>{props.event.categoryName}</Text>
                <Text style={styles.ownerName}>{props.event.owner.userName}</Text>
            </View>
        <Pressable onPress={handleCardPress}>  
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{props.event.title}</Text>
                <Text style={styles.infoTitle}>Descripción</Text>
                <Text style={styles.infoText}>{props.event.description}</Text>
                <View style={styles.siteInfo}>
                    <View style={styles.datetimeInfo}>
                        <Text style={styles.infoTitle}>Fecha</Text>
                        <Text style={styles.infoText}>{start}</Text>
                    </View>
                    <View style={styles.datetimeInfo}>
                        <Text style={styles.infoTitle}>Lugar</Text>
                        <Text style={styles.infoText}>{props.event.location}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
        {props.editable ? (
            <View style={styles.footerContainer}>
                <IconTextButton
                    text="Editar "
                    iconName="pencil"
                    iconPosition="right"
                    onPress={() => props.onEditPress()}
                />
                <IconTextButton
                    text="Borrar "
                    iconName="trash"
                    iconPosition="right"
                    onPress={() => deleteEvent(props.event._id)}
                />
            </View>
        ) : (
            <View style={styles.footerContainer}>
                <IconTextButton
                    text="Ingresar "
                    iconName="question"
                    iconPosition="right"
                    onPress={() => console.log()}
                />
            </View>
        )}
        </View>
    )
};

//Props
MiniEventCard.propTypes = {
  pictureSource: PropTypes.any,
  onCardPress: PropTypes.func,
  onEditPress: PropTypes.func,
  editable: PropTypes.bool,
};

export default MiniEventCard;