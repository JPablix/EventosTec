import { StyleSheet } from "react-native";
import { Colors } from '../../../constants/Colors'

export const styles = StyleSheet.create({
    inputContainer: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.grey,
      },
      textInput: {
        height: 40,
        borderBottomWidth: 1,
        padding: 5,
      },
      focusedInput: {
        borderBottomColor: Colors.secondary,
      },
      blurredInput: {
        borderBottomColor: Colors.grey,
      },
});