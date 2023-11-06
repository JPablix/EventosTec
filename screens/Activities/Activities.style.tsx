import { StyleSheet } from "react-native";
import { Colors } from '../../src/constants/Colors'

export const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
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
        justifyContent: "space-between",
        width: "100%",
        padding: 10,
    },
});