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
});