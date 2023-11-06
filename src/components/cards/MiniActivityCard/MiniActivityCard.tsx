// Imports
import { View, Text, ScrollView } from "react-native";
import PropTypes from 'prop-types';
// Styles
import { styles } from "./MiniActivityCard.style";
import { handleDate } from "../../../utils/handleDate";

const MiniActivityCard = (props) => {

  const start = handleDate(props.startTime);

  return (
    <View style={styles.card}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.infoText}>{props.description}</Text>
        <View style={styles.datetimeInfo}>
          <Text style={styles.infoTitle}>Inicio:</Text>
          <Text style={styles.infoText}>{start}</Text>
        </View>
    </View>
  );
};

MiniActivityCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  startTime: PropTypes.string,
};

export default MiniActivityCard;