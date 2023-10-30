import { StyleSheet } from "react-native";
import { Colors } from '../../../constants/Colors'

export const styles = StyleSheet.create({
  inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      width: "90%",
      borderRadius: 25,
      borderBottomWidth: 1,
      borderBottomColor: Colors.gray,
      backgroundColor: Colors.gray,
  },
  textInput: {
    borderRadius: 5,
    height: 40,
    width: "90%",
    borderBottomEndRadius: 0,
    borderBottomWidth: 1,
    padding: 10,
  },
  focusedInput: {
    borderBottomColor: Colors.secondary,
  },
  blurredInput: {
    borderBottomColor: Colors.gray,
  },
  closeButtonParent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});