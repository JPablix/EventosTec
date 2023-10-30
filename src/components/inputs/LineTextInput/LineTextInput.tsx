// Imports
import PropTypes from 'prop-types';
import { TextInput, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
// Styles
import { styles } from './LineTextInput.style'


const LineTextInput = (props) => {
    const [icon, setIcon] = useState(true);
    const [text, setText] = useState("");
    
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <View style={[styles.inputContainer, { width: props.icon ? "90%" : "100%" }]}>
            <TextInput
                style={[
                styles.textInput,
                isFocused ? styles.focusedInput : styles.blurredInput,]}
                value={text}
                onFocus={() => {
                    setIcon(false)
                    handleFocus
                }}
                onBlur={() => {
                    setIcon(true)
                    handleBlur
                }}
                placeholder={props.placeholder}
                onChangeText={(value) => {
                    setText(value)
                    props.onChangeText(value)
                }}
            />
            <Pressable  
                style={styles.closeButtonParent}
                onPress={() => {
                    setText("")
                    props.onChangeText("")}}>
                <FontAwesome name={icon ? props.icon : props.deleteButton ? "close" : ""} size={16} color="black"/>
            </Pressable>
        </View>
    )
}

// Props
LineTextInput.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    icon: PropTypes.string,
    deleteButton: PropTypes.bool,
    onChangeText: PropTypes.func || null,
};

// Exports
export default LineTextInput;