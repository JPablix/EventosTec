// Imports
import React, { useCallback, useEffect, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from "react-native";
import { getAllEvents } from "../../../src/api/events/events";
import { getEventCategory } from "../../../src/api/api/data";
// Styles
import { styles } from "./AllEvents.style";
// Components
import MiniEventCard from "../../../src/components/cards/MiniEventCard/MiniEventCard";
import IconTextButton from "../../../src/components/buttons/IconTextButton/IconTextButton";
import LineTextInput from "../../../src/components/inputs/LineTextInput/LineTextInput";

const AllEvents = () => {
  // Hook de navegación de React Navigation
  const navigation = useNavigation();

  // Estados para manejar los eventos y la carga de los mismos
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchPrompt, setSearchPrompt] = useState('');

  // Función para obtener los eventos y sus categorías correspondientes
  const getEventsAndCategories = async () => {
    try {
      // Obtener todos los eventos
      const eventsResponse = await getAllEvents();
      const eventsData = eventsResponse.data;

      // Crear un conjunto único de IDs de categoría para minimizar las solicitudes de red
      const categoryIds = new Set(eventsData.map(event => event.category));

      // Crear un objeto para mapear IDs de categoría a nombres
      const categories = {};

      // Solicitar la información de cada categoría y almacenarla en el objeto
      for (let categoryId of categoryIds) {
        const categoryResponse = await getEventCategory(categoryId);
        categories[categoryId as any] = categoryResponse.name;
      }

      // Actualizar los eventos con los nombres de las categorías
      const updatedEvents = eventsData.map(event => ({
        ...event,
        categoryName: categories[event.category],
      }));

      setEvents(updatedEvents);
    } catch (error) {
      console.error('Error fetching events and categories:', error);
    }
  };
  useFocusEffect(
    useCallback(() => {
      getEventsAndCategories();
    }, [])
  );
  // Función para filtrar los eventos según la búsqueda
  const filterEvents = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredEvents(events); // Si no hay término de búsqueda, mostrar todos los eventos
    } else {
      const lowercasedFilter = searchTerm.toLowerCase();
      const filteredData = events.filter(item => 
        item.title.toLowerCase().includes(lowercasedFilter)
      );
      setFilteredEvents(filteredData);
    }
  };

  // Efecto para actualizar los eventos filtrados cuando cambia la búsqueda
  useEffect(() => {
    filterEvents(searchPrompt);
  }, [searchPrompt, events]);

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <LineTextInput
            value={searchPrompt}
            placeholder="Buscar..."
            icon="search"
            deleteButton={true}
            onChangeText={(text) => setSearchPrompt(text)}
        />
      </View>
      {filteredEvents.length > 0 ? (
        <ScrollView contentContainerStyle={styles.itemContainer}>
          {filteredEvents.map((event) => (
            <MiniEventCard 
              key={event.id}
              {...event} 
              category={event.categoryName}
            />
          ))}
        </ScrollView>
      ) : (
        <View style={styles.adviceContainer}>
          <Text style={styles.noEvents}>No hay eventos disponibles.</Text>
        </View>
      )}
      <View style={styles.addEvent}>
        <IconTextButton
            text="Crear Evento "
            iconName="plus"
            iconPosition="right"
            onPress={() => navigation.navigate("EventCreator" as never)}
          />
      </View>
    </View>
  );
};

export default AllEvents;