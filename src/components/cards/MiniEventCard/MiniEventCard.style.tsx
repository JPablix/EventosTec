
import { Animated, StyleSheet } from "react-native";
import { Colors } from '../../../constants/Colors'

export const styles = StyleSheet.create(
  {
    card: {
        display: "flex",  
        marginBottom: 20,
        borderRadius: 10,
        width: '80%',
        elevation: 10,
        shadowColor: Colors.black,
        backgroundColor: Colors.white,
    },
    pictureContainer: {
        display: "flex",
        alignItems: "center",
        width: '100%',      
    },
    pictures: {
        width: '100%',     
        height: 150,
        marginBottom: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },    
    infoContainer: {
        display: "flex",
        width:'100%',
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    title: {
        fontFamily: 'oswaldBold',
        color: Colors.secondary,
        fontSize: 20,
    },
    infoTitle: {
        fontFamily: 'oswaldBold',
    },
    infoText: {
        fontFamily: 'oswaldRegular',
        color: Colors.darkGrey,
    },
    siteInfo: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    datetimeInfo: {
        display: "flex",
        flexDirection: "column",
    },
    category: {
        fontFamily: 'oswaldBold',
        color: Colors.gray,
        fontSize: 20,
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    ownerName: {
        fontFamily: 'oswaldBold',
        color: Colors.gray,
        fontSize: 20,
        position: 'absolute',
        bottom: 10,
        left: 10,
    },
    footerContainerEditable: {
        display: "flex",
        flexDirection: "row",
        borderTopColor: Colors.gray,
        borderTopWidth: 2,
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    footerContainerNotEditable: {
        display: "flex",
        flexDirection: "row",
        borderTopColor: Colors.gray,
        borderTopWidth: 2,
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
}
)