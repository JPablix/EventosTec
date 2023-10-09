//Imports
import React from 'react'
import PropTypes from 'prop-types';
import {View, Text, Pressable} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

//Styles
import { styles } from './IconTextButton.style'

const IconTextButton = (props) => {
  return (
    <View style={styles.container}>
        <Pressable
            style={[styles.button]}
            onPress={() => props.onPress()}
        >
            <Text style={styles.textStyle}>
                {props.iconPosition === 'left' && (
                    <FontAwesome 
                    name={props.iconName} 
                    style={styles.textStyle}/>
                )}
                {props.text}
                {props.iconPosition === 'right' && (
                    <FontAwesome 
                    name={props.iconName}
                    style={styles.textStyle}/>
                )}
            </Text>
        </Pressable>
    </View>
  )
}

//Props
IconTextButton.propTypes = {
    text: PropTypes.string,
    iconName: PropTypes.string,
    iconPosition: PropTypes.string,
    onPress: PropTypes.func.isRequired,
};

//Exports
export default IconTextButton;