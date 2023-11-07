// Imports
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView } from "react-native";
import { getAllEvents } from "../../../src/api/events/events";
import { getEventCategory } from "../../../src/api/api/data";
// Styles
import { styles } from "./AllEvents.style";
// Components
import MiniEventCard from "../../../src/components/cards/MiniEventCard/MiniEventCard";
import LineTextInput from "../../../src/components/inputs/LineTextInput/LineTextInput";

const AllEvents = ({ navigation }) => {
  // Navigation
  const handleEditPress = (event) => {
    navigation.navigate("UpdateEvents", { event });
  };

  const handleAddPress = (id) => {
    navigation.navigate("Actividades", { id });
  };

  const [events, setEvents] = useState([]); 
  const [searchPrompt, setSearchPrompt] = useState('');

  const fetchAndSetEvents = async () => {
    try {
      const eventsResponse = await getAllEvents();
      let eventsData = eventsResponse.data;

      if (searchPrompt) {
        const searchTerm = searchPrompt.toLowerCase();
        eventsData = eventsData.filter(event => 
          event.title.toLowerCase().includes(searchTerm)
        );
      }

      const categoryIds = new Set(eventsData.map(event => event.category));
      const categories = {};

      for (let categoryId of categoryIds) {
        const categoryResponse = await getEventCategory(categoryId);
        categories[categoryId as any] = categoryResponse.name;
      }

      const updatedEvents = eventsData.map(event => ({
        ...event,
        categoryName: categories[event.category],
      }));

      setEvents(updatedEvents);
    } catch (error) {
      console.error('Error fetching events and categories:', error);
    }
  };

  useEffect(() => {
    fetchAndSetEvents();
  }, [searchPrompt]); 

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <LineTextInput
          value={searchPrompt}
          placeholder="Buscar..."
          icon="search"
          deleteButton={true}
          onChangeText={setSearchPrompt} 
        />
      </View>
      {events.length > 0 ? (
        <ScrollView contentContainerStyle={styles.itemContainer}>
          {events.map((event,key) => (
            <MiniEventCard
            key={key}
            {...event} 
            event={event}
            editable={false}
            //onEditPress={() => handleEditPress(event)}
            onCardPress={(id) => handleAddPress(id)}
            />
          ))}
        </ScrollView>
      ) : (
        <View style={styles.adviceContainer}>
          <Text style={styles.noEvents}>No hay eventos disponibles.</Text>
        </View>
      )}
    </View>
  );
};

export default AllEvents;