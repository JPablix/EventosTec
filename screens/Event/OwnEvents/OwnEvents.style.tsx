import { StyleSheet } from "react-native";
import { Colors } from '../../../src/constants/Colors'

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    width: "100%",
  },
  itemContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  noEvents: {
    fontFamily: 'oswaldBold',
  },
  addEvent: {
    fontFamily: 'oswaldBold',
    color: Colors.gray,
    fontSize: 20,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  adviceContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});