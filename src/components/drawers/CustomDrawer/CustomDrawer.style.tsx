import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        profileContainer: {
            backgroundColor: '#4298da',
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
            color: '#fff',
            fontSize: 18
        },
        followInfo: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        followNumber: {
            color: '#fff', 
            fontSize: 14, 
            marginRight: 5
        },
        drawerItemContainer: {
            flex:1, 
            backgroundColor:'#fff', 
            paddingTop: 10
        },
        footerContainer: {
            padding: 20, 
            borderTopWidth: 1, 
            borderTopColor: '#ccc'
        },
        footerPressable: {
            paddingVertical: 15
        },
        footerTextContainer: {
            flexDirection:'row'
        },
        footerText: {
            fontSize: 15, 
            marginLeft: 15
        },
    }
);