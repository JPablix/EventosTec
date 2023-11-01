// React Native
import { StyleSheet } from "react-native";
// Colors
import { Colors } from "../../../constants/Colors";
// Fonts
import { Fonts } from "../../../constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    borderRadius: 16,
    gap: 16,
    padding: 20,
  },
  inputsContainer: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 16,
    overflow: "hidden",
    elevation: 8,
    backgroundColor: Colors.white,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: Colors.secondary,
    color: Colors.white,
  },
  buttonText: {
    textAlign: "center",
    color: Colors.white,
    fontFamily: 'oswaldBold',
  },
  textInput: {
    backgroundColor: Colors.white,
    textAlign: "center",
    flex: 1,
    fontFamily: 'oswaldBold',
  },
});