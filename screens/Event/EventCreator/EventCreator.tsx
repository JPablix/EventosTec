// Imports
import React, { useState } from "react";
import { View, Text, ScrollView, KeyboardAvoidingView, Pressable, Image} from "react-native";
import moment from "moment";
import "moment/locale/es";
// Styles
import { styles } from "./EventCreator.style";
import { FontAwesome } from "@expo/vector-icons";
import LineTextInput from "../../../src/components/inputs/LineTextInput/LineTextInput";
import { useNavigation } from "@react-navigation/native";
import IconTextButton from "../../../src/components/buttons/IconTextButton/IconTextButton";
import DateTimeInput from "../../../src/components/inputs/DateTimeInput/DateTimeInput";
import NumericInput from "../../../src/components/inputs/NumericInput/NumericInput";
import { useErrorOutput } from "../../../src/context/ErrorOutput";
import { addEvent } from "../../../src/api/events/events";

const EventCreator = ({ route }) => {
    const { handleError } = useErrorOutput();
    const navigation = useNavigation();
    const nada = "";
    // Manejo de fechas
    const handleDate = (date: string | undefined) => {
        return moment(date).locale("es").format("LLLL");
    };
    // Manejo de eventos
    const handleCreateEvent = async () => {
        const response = await addEvent(data);
        handleError(response.data);
      };

    const [data, setData] = useState<any>({
        title: "",
        description: "",
        startTime: new Date(),
        endTime: new Date(),
        location: "",
        capacity: 1,
        requiredCollaborators: 1,
        categoryName: "",
    });

    return (
    <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="height">
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.cardTitle}>Creación de Eventos</Text>
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
                    onPress={() => navigation.navigate("Eventos" as never)}
                    iconName="close"
                    iconPosition="right"
                    />
                    <IconTextButton 
                    text="Confirmar " 
                    onPress={() => {
                        handleCreateEvent(),
                        navigation.navigate("Eventos" as never);
                    }}
                    iconName="check"
                    iconPosition="right"
                    />
                </View>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default EventCreator;