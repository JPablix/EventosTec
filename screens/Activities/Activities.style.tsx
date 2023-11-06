import { StyleSheet } from "react-native";
import { Colors } from '../../src/constants/Colors'

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        width: "100%",
    },
    itemContainer: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
    },
    adviceContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noEvents: {
        fontFamily: 'oswaldBold',
    },
    buttonsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        padding: 10,
        position: 'absolute',
        bottom: 20,
        right: 10,
        left: 10,
    },
});