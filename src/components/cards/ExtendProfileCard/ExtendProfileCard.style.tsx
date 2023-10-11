
import { StyleSheet } from "react-native";
import { Colors } from '../../../constants/Colors'

export const styles = StyleSheet.create(
  {
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
    profilePictureContainer: {
        display: "flex",
        alignItems: "center",
      },
    profilePicture: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 20,
        backgroundColor: Colors.grey,
        borderRadius: 100,
    },
    namesContainer: {
        display: "flex",
        alignItems: "center",
        marginBottom: 20,
    },
    nickName: {
        fontFamily: 'oswaldBold',
        color: Colors.black,
        fontSize: 20,
    },
    userName: {
        fontFamily: 'oswaldRegular',
        color: Colors.darkGrey,
        fontSize: 18,
    },
    infoContainer: {
        display: "flex",
        alignItems: "flex-start",
        marginBottom: 20,
    },
    infoTitle: {
        fontFamily: 'oswaldBold',
    },
    infoText: {
        fontFamily: 'oswaldRegular',
        color: Colors.darkGrey,
    },
}
)