import { StyleSheet } from "react-native";
import { Colors } from '../../../constants/Colors'

export const styles = StyleSheet.create({
    inputContainer: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray,
      },
      textInput: {
        borderRadius: 5,
        backgroundColor: Colors.gray,
        height: 40,
        borderBottomEndRadius: 0,
        borderBottomWidth: 1,
        padding: 5,
      },
      focusedInput: {
        borderBottomColor: Colors.secondary,
      },
      blurredInput: {
        borderBottomColor: Colors.gray,
      },
});