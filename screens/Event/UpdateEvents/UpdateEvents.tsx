// Imports
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, KeyboardAvoidingView, Pressable, Image} from "react-native";
import moment from "moment";
import "moment/locale/es";
import { RouteProp, useNavigation } from "@react-navigation/native";
// Styles
import { styles } from "./UpdateEvents.style";
import LineTextInput from "../../../src/components/inputs/LineTextInput/LineTextInput";
import IconTextButton from "../../../src/components/buttons/IconTextButton/IconTextButton";
import DateTimeInput from "../../../src/components/inputs/DateTimeInput/DateTimeInput";
import NumericInput from "../../../src/components/inputs/NumericInput/NumericInput";
import { useErrorOutput } from "../../../src/context/ErrorOutput";
import { addEvent, updateEvent } from "../../../src/api/events/events";
import { getEventCategories, getEventCategory } from "../../../src/api/api/data";
import { handleDate } from "../../../src/utils/handleDate";

// Types
type RootStackParamList = {
    UpdateEvents: { event: EventProps };
};
type EditEventRouteProp = RouteProp<RootStackParamList, "UpdateEvents">;
// Interfaces
interface EventProps {
    _id: string;
    title: string;
    description: string;
    startTime: Date;
    endTime: Date;
    location: string;
    capacity: number;
    requiredCollaborators: number;
    category: string;
}
interface EditEventProps {
    route: EditEventRouteProp;
}

const UpdateEvents: React.FC<EditEventProps> = ({ route }) => {
    const { event } = route.params;
    // Navigation
    const navigation = useNavigation();
    // Error handling
    const { handleError } = useErrorOutput();
    // Category
    const getCategory = async () => {
        const response = await getEventCategory(event.category);
        console.log(response);
    };
    useEffect(() => {
    getCategory();
    }, []);

    // Inputs states
    const [data, setData] = useState<any>({ ...event });

    // Get categories
    const [categories, setCategories] = useState<any>([]);
    const getCategories = async () => {
        const response = await getEventCategories();
        setCategories(response.data);
    };
    useEffect(() => {
        getCategories();
    }, []);

    const handleUpdateEvent = async () => {
        const response = await updateEvent(data);
        handleError(response.data);
        if (response.status === 200) {
          navigation.goBack();
        }
      };

    return (
    <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="height">
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.cardTitle}>{event.title}</Text>
            <View style={styles.card}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>Nombre del Evento</Text>
                    <LineTextInput
                    value={data.title}
                    onChangeText={(text: string) => setData({ ...data, title: text })}
                    placeholder="Nombre con el que aparecerá"
                    />
                    <Text style={styles.inputTitle}>Descripción</Text>
                    <LineTextInput
                    value={data.description}
                    onChangeText={(text: string) => setData({ ...data, description: text })}
                    placeholder="Descripción del evento"
                    />
                    <Text style={styles.inputTitle}>Lugar del evento</Text>
                    <LineTextInput
                    value={data.location}
                    onChangeText={(text: string) => setData({ ...data, location: text })}
                    placeholder="Lugar en el que se realizará"
                    />
                    <Text style={styles.inputTitle}>Categoría del Evento</Text>
                    <LineTextInput
                    value={data.categoryName}
                    onChangeText={(text: string) => setData({ ...data, categoryName: text })}
                    placeholder="Categoría a la que pertenece"
                    />
                </View>
                    <Text style={styles.inputTitle}>Fecha y Hora de Inicio</Text>
                    <Text style={styles.infoText}>{handleDate(data.startTime.toString())}</Text>
                    <View style={styles.datetimeContainer}>
                        <DateTimeInput
                            mode="date"
                            dateTime={data.startTime}
                            setDatetime={(date: Date) => {
                                setData({ ...data, startTime: date });
                            }}
                        />
                        <DateTimeInput
                            mode="time"
                            dateTime={data.startTime}
                            setDatetime={(date: Date) => {
                                setData({ ...data, startTime: date });
                            }}
                        />
                    </View>
                    <Text style={styles.inputTitle}>Fecha y Hora de Finalización</Text>
                    <Text style={styles.infoText}>{handleDate(data.endTime.toString())}</Text>
                    <View style={styles.datetimeContainer}>
                        <DateTimeInput
                        mode="date"
                        dateTime={data.endTime}
                        setDatetime={(date: Date) => setData({ ...data, endTime: date })}
                        />
                        <DateTimeInput
                        mode="time"
                        dateTime={data.endTime}
                        setDatetime={(date: Date) => setData({ ...data, endTime: date })}
                        />
                    </View>
                    <Text style={styles.inputTitle}>Capacidad de participantes</Text>
                    <NumericInput
                        min={1}
                        max={15}
                        count={data.capacity}
                        setCount={(capacity: number) =>
                        setData({ ...data, capacity: capacity })
                        }
                    />
                    <Text style={styles.inputTitle}>Colaboradores necesarios</Text>
                    <NumericInput
                        min={1}
                        max={15}
                        count={data.requiredCollaborators}
                        setCount={(requiredCollaborators: number) =>
                        setData({ ...data, requiredCollaborators: requiredCollaborators })
                        }
                    />
                <View style={styles.buttonsContainer}>
                    <IconTextButton
                    text = "Cancelar "
                    onPress={() => navigation.navigate("Eventos Creados" as never)}
                    iconName="close"
                    iconPosition="right"
                    />
                    <IconTextButton 
                    text="Confirmar " 
                    onPress={() => handleUpdateEvent()}
                    iconName="check"
                    iconPosition="right"
                    />
                </View>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default UpdateEvents;