// Imports
import { View, Text, ScrollView } from "react-native";
// Styles
import { styles } from "./Activities.style";
// Components
import MiniActivityCard from "../../src/components/cards/MiniActivityCard/MiniActivityCard";

const Activities = ({ route }) => {
    const { activityList } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {activityList.map(activity => 
                <MiniActivityCard key={activity._id} {...activity} />
            )}
    </ScrollView>
  );
};
export default Activities;