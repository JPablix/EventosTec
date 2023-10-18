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
    color: Colors.primary,
    textTransform: "uppercase",
  },
  trackActive: {
    backgroundColor: Colors.primary,
  },
  trackInactive: {
    backgroundColor: Colors.gray,
  },
  thumbActive: {
    backgroundColor: Colors.secondary,
  },
  thumbInactive: {
    backgroundColor: Colors.primary,
  },
});