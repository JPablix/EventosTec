import { StyleSheet } from "react-native";
import { Colors } from '../../../constants/Colors'

export const styles = StyleSheet.create(
  {
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    button: {
      minWidth: 80,
      borderRadius: 20,
      padding: 10,
      elevation: 10,
      backgroundColor: Colors.secondary,
    },
    textStyle: {
      alignItems: 'center',
      color: Colors.white,
      fontSize: 18,
      fontFamily: 'oswaldBold',
      textAlign: 'center',
    },
  }
);