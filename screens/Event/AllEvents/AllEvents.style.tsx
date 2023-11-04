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
  cardTitle: {
    fontFamily: 'oswaldBold',
    color: Colors.white,
    fontSize: 30,
    marginBottom: 20,
  },
  logoImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: Colors.primary,
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