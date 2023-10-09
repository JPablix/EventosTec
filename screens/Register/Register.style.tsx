import { StyleSheet } from "react-native";
import { Colors } from '../../src/constants/Colors'

export const styles = StyleSheet.create({
    cardTitle: {
        fontFamily: 'oswaldBold',
        color: Colors.white,
        fontSize: 30,
        marginBottom: 20,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.primary,
    },
    card: {
        padding: 20,
        borderRadius: 10,
        width: '80%',
        elevation: 10,
        shadowColor: Colors.black,
        backgroundColor: Colors.white,
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    inputTitle: {
        fontFamily: 'oswaldBold',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
});