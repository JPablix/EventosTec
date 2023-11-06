// Imports
import { View, Text, ScrollView } from "react-native";
import PropTypes from 'prop-types';
// Styles
import { styles } from "./MiniActivityCard.style";
import { handleDate } from "../../../utils/handleDate";

const MiniActivityCard = ({ route }) => {
  const { activity } = route.params;

  const start = handleDate(activity.startTime);

  return (
    <View style={styles.card}>
        <Text style={styles.title}>{activity.title}</Text>
        <Text style={styles.infoText}>{activity.description == null ? "Sin descricpión" : activity.description}</Text>
        <View style={styles.datetimeInfo}>
        <Text style={styles.infoTitle}>Inicio:</Text>
        <Text style={styles.infoText}>{start}</Text>
        </View>
    </View>
  );
};

export default MiniActivityCard;