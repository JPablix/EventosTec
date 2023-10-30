// Imports
import { View, Text, ScrollView } from "react-native";
// Styles
import { styles } from "./MiniActivityCard.style";

const MiniActivityCard = ({ title, startTime, description}) => {
    

  return (
    <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.infoText}>{description}</Text>
        <View style={styles.datetimeInfo}>
        <Text style={styles.infoTitle}>Hora:</Text>
        <Text style={styles.infoText}>{startTime}</Text>
        </View>
    </View>
  );
};
export default MiniActivityCard;