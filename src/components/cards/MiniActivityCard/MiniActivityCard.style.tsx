import { Animated, StyleSheet } from "react-native";
import { Colors } from '../../../constants/Colors'

export const styles = StyleSheet.create(
  {
    card: {
        display: "flex",   
        marginBottom: 20,
        borderRadius: 10,
        padding: 10,
        width: '80%',
        elevation: 10,
        shadowColor: Colors.black,
        backgroundColor: Colors.white,
    },
    title: {
        fontFamily: 'oswaldBold',
        color: Colors.secondary,
        fontSize: 20,
    },
    infoTitle: {
        fontFamily: 'oswaldBold',
    },
    infoText: {
        fontFamily: 'oswaldRegular',
        color: Colors.darkGrey,
    },
    datetimeInfo: {
        display: "flex",
        flexDirection: "column",
    }
  });