
import { StyleSheet } from "react-native";
import { Colors } from '../../../constants/Colors'

export const styles = StyleSheet.create(
  {
    card: {
        display: "flex",
        flexDirection: 'row',  
        alignItems: 'center',  
        padding: 10,
        marginBottom: 20,
        borderRadius: 10,
        width: '80%',
        elevation: 10,
        shadowColor: Colors.black,
        backgroundColor: Colors.white,
    },
    profilePictureContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
      },
    profilePicture: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        backgroundColor: Colors.gray,
        borderRadius: 100,
    },
    namesContainer: {
        flex: 1,       
        justifyContent: 'center',
        paddingLeft: 10, 
    },
    nickName: {
        fontFamily: 'oswaldBold',
        color: Colors.black,
        fontSize: 20,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 30, 
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