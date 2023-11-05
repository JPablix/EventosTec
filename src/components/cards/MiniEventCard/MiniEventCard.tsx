// Imports
import { Text, View, Image, Pressable} from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';
import { handleDate } from '../../../utils/handleDate';
import { useNavigation } from '@react-navigation/native';
// Styles
import { styles } from './MiniEventCard.style'
// Components
import IconTextButton from '../../buttons/IconTextButton/IconTextButton';

const MiniEventCard = (props) => {
    const navigation = useNavigation();
    const start = handleDate(props.startTime);



    return (
        <View style={styles.card}>
            <View style={styles.pictureContainer}>
                <Image style={styles.pictures} source={props.pictureSource ? props.pictureSource : require("../../../assets/eventDefault.png")} />
                <Text style={styles.category}>{props.category}</Text>
                <Text style={styles.ownerName}>{props.owner.userName}</Text>
            </View>
        <Pressable onPress={props.onCardPress}>
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
        {!props.onEditPress ? null :
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
                    onPress={() => console.log("Borrando evento")}
                />
            </View>
        }
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
  eventId: PropTypes.string,
};

export default MiniEventCard;
