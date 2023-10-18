import { StyleSheet } from "react-native";
import { Colors } from '../../../constants/Colors'

export const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        profileContainer: {
            backgroundColor: Colors.white,
        },
        imageBackground: {
            padding:20,
        },
        profileImage: {
            height:80,
            width:80,
            borderRadius:40,
            marginBottom:10
        },
        userName: {
            color: Colors.white,
            fontSize: 18,
            fontFamily: 'oswaldBold',
        },
        followInfo: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        followNumber: {
            color: Colors.white,
            fontSize: 14, 
            fontFamily: 'oswaldSemiBold',
            marginRight: 5
        },
        drawerItemContainer: {
            flex:1, 
            backgroundColor: Colors.white, 
            paddingTop: 10
        },
        footerContainer: {
            padding: 20, 
            borderTopWidth: 2, 
            borderTopColor: Colors.gray,
        },
        footerPressable: {
            paddingVertical: 15
        },
        footerTextContainer: {
            flexDirection:'row',
        },
        footerText: {
            fontSize: 15, 
            marginLeft: 15,
            fontFamily: 'oswaldRegular',
        },
        miniIcons: {
            fontSize: 14,
            color: Colors.white,
        },
        bottomIcons: {
            fontSize: 22,
            color: Colors.black,
        },
    }
);