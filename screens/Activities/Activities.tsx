// Imports
import { View, Text, ScrollView } from "react-native";
// Styles
import { styles } from "./Activities.style";
// Components
import MiniActivityCard from "../../src/components/cards/MiniActivityCard/MiniActivityCard";
import { getEventActivities } from "../../src/api/events/events";
import { useEffect, useState } from "react";

const Activities = ({ route }: any) => {
  const activityId = route.params.id;
  const [activities, setActivities] = useState<any>([]);
  
  const handleGetActivities = async () => {
    const response = await getEventActivities(activityId);
    setActivities(response.data);
  };

  useEffect(() => {
    handleGetActivities();
  }, []);
  
    return (
    <View style={styles.container}>
        {activities.length > 0 ?  (
          <ScrollView contentContainerStyle={styles.itemContainer}>
            {activities.map((activity, key) => (
              <MiniActivityCard key={key} {...activity} />
            ))}
          </ScrollView>
        ) : (
          <View style={styles.adviceContainer}>
            <Text style={styles.noEvents}>No hay actividades disponibles.</Text>
          </View>
        )}
    </View>
  );
};

export default Activities;