// React Native
import { StyleSheet } from "react-native";
// Colors
import { Colors } from "../../../constants/Colors";
// Fonts
import { Fonts } from "../../../constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    fontFamily: 'oswaldBold',
    color: Colors.secondary,
    textTransform: "uppercase",
  },
  trackActive: {
    backgroundColor: Colors.blue,
  },
  trackInactive: {
    backgroundColor: Colors.grey,
  },
  thumbActive: {
    backgroundColor: Colors.grey,
  },
  thumbInactive: {
    backgroundColor: Colors.blue,
  },
});