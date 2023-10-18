// Imports
import React from 'react';
import { View, Text, Image, Pressable, ImageBackground} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from "../../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
// Styles
import { styles } from './CustomDrawer.style';

const CustomDrawer = (props) => {
    const { onLogout } = useAuth();
    const navigation = useNavigation();

    const userName = props.userName || "UserName";
    return (
        <View style={styles.container}>
            <DrawerContentScrollView 
                {...props}
                contentContainerStyle={styles.profileContainer}>
                <ImageBackground 
                    source={require('../../../images/patternExample.png')} 
                    style={styles.imageBackground}>
                    <Image 
                        source={require('../../../images/profileDefault.png')} 
                        style={styles.profileImage} />
                    <View style={{}}>
                        <Text style={styles.userName}>
                            {userName}
                        </Text>
                        <View style={styles.followInfo}>
                            <Text style={styles.followNumber}>999</Text>
                            <Ionicons name='person' style={styles.miniIcons} />
                        </View>
                    </View>
                </ImageBackground>    
                <View style={styles.drawerItemContainer}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={styles.footerContainer}>
                <Pressable onPress={() => {}} style={styles.footerPressable}>
                    <View 
                    style={styles.footerTextContainer}>
                        <Ionicons name="share-social-outline" style={styles.bottomIcons} />
                        <Text style={styles.footerText}>Tell a friend</Text>
                    </View>
                </Pressable>
                <Pressable 
                    onPress={() => {
                    onLogout();
                    props.navigation.closeDrawer();
                    }} 
                    style={styles.footerPressable}>
                    <View 
                    style={styles.footerTextContainer}>
                        <Ionicons name="exit-outline" style={styles.bottomIcons} />
                        <Text style={styles.footerText}>Sign Out</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
}
export default CustomDrawer;