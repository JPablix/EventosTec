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

const MiniEventCard = (props) => {
    const start = handleDate(props.startTime);

    const handleCardPress = () => {
        props.onCardPress(props.eventId._id);
    }
    
    return (
        <View style={styles.card}>
            <View style={styles.pictureContainer}>
                <Image style={styles.pictures} source={props.pictureSource ? props.pictureSource : require("../../../assets/eventDefault.png")} />
                <Text style={styles.category}>{props.category}</Text>
                <Text style={styles.ownerName}>{props.owner.userName}</Text>
            </View>
        <Pressable onPress={handleCardPress}>  
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.infoTitle}>Descripción</Text>
                <Text style={styles.infoText}>{props.description}</Text>
                <View style={styles.siteInfo}>
                    <View style={styles.datetimeInfo}>
                        <Text style={styles.infoTitle}>Fecha</Text>
                        <Text style={styles.infoText}>{start}</Text>
                    </View>
                    <View style={styles.datetimeInfo}>
                        <Text style={styles.infoTitle}>Lugar</Text>
                        <Text style={styles.infoText}>{props.location}</Text>
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
                    onPress={() => deleteEvent(props.eventId._id)}
                />
            </View>
        ) : (
            <View style={styles.footerContainer}>
                <IconTextButton
                    text="Inscribirse"
                    iconName="pencil"
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
  title: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  startTime: PropTypes.string,
  location: PropTypes.string,
  pictureSource: PropTypes.any,
  onCardPress: PropTypes.func,
  owner: PropTypes.any,
  onEditPress: PropTypes.func,
  eventId: PropTypes.any,
  editable: PropTypes.bool,
};

export default MiniEventCard;
function onGetProfile() {
    throw new Error('Function not implemented.');
}

