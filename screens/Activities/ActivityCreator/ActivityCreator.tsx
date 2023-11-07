// Imports
import React, { useState } from "react";
import { View, Text, ScrollView, KeyboardAvoidingView, Pressable, Image} from "react-native";
import moment from "moment";
import "moment/locale/es";
// Styles
import { styles } from "./ActivityCreator.style";
import { FontAwesome } from "@expo/vector-icons";
import LineTextInput from "../../../src/components/inputs/LineTextInput/LineTextInput";
import { useNavigation } from "@react-navigation/native";
import IconTextButton from "../../../src/components/buttons/IconTextButton/IconTextButton";
import DateTimeInput from "../../../src/components/inputs/DateTimeInput/DateTimeInput";
import NumericInput from "../../../src/components/inputs/NumericInput/NumericInput";
import { useErrorOutput } from "../../../src/context/ErrorOutput";
import { addEvent, addEventActivity } from "../../../src/api/events/events";

const ActivityCreator = ({ route }) => {
    // Event ID
    const eventId = route.params.id;
    // Error handling
    const { handleError } = useErrorOutput();
    // Navigation
    const navigation = useNavigation();
    // Manejo de fechas
    const handleDate = (date: string | undefined) => {
        return moment(date).locale("es").format("LLLL");
    };
    // Data handling
    const [data, setData] = useState<any>({
        title: "",
        description: "",
        startTime: new Date(),
        endTime: new Date(),
        location: "",
        collaborator: "",
        eventId: eventId,   // Tiene que sacarlo de route
    });

    const handleCreateActivity = async () => {
        const response = await addEventActivity(data);
        if (response.status === 200) {
            handleError(response.data);
          navigation.goBack();
        }
      };

    return (
    <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="height">
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.card}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>Nombre de la actividad</Text>
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
                <View style={styles.buttonsContainer}>
                    <IconTextButton
                    text = "Cancelar "
                    onPress={() => navigation.navigate("Eventos Creados" as never)} 
                    iconName="close"
                    iconPosition="right"
                    />
                    <IconTextButton 
                    text="Confirmar " 
                    onPress={() => {
                        handleCreateActivity(),
                        navigation.navigate("Eventos Creados" as never);
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
export default ActivityCreator;