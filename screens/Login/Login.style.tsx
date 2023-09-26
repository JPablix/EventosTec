import { StyleSheet } from "react-native";
import { Colors } from '../../src/constants/Colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  inputTitle: {
    fontFamily: 'oswaldBold',
  },
});