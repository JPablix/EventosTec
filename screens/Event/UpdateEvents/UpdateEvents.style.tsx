import { StyleSheet } from "react-native";
import { Colors } from '../../../src/constants/Colors'

export const styles = StyleSheet.create({
    cardTitle: {
        fontFamily: 'oswaldBold',
        color: Colors.white,
        fontSize: 30,
        marginBottom: 20,
    },
    container: {
        flexGrow: 1,
        alignItems: "center",
        backgroundColor: Colors.primary,
    },
    keyboardAvoidingView: {
        flex: 1,
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
    itemContainer: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
      },
    inputTitle: {
        fontFamily: 'oswaldBold',
    },
    infoText: {
        fontFamily: 'oswaldRegular',
        color: Colors.darkGrey,
    },
    inputContainer: {
        display: 'flex',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageButton: {
        height: 150,
        width: 150,
        borderRadius: 75, 
    },
    profileImage: {
        height: 150,
        width: 150,
        borderRadius: 75, 
    },
    addButton: {
        width: 30, 
        height: 30, 
        borderRadius: 15,
        bottom: 10, 
        right: 10,
        position: 'absolute',
        backgroundColor: Colors.secondary,
    },
    addIcon: {
        fontSize: 20,
        color: Colors.white,
        textAlign: 'center',
        marginTop: 5,
    },
    datetimeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
});