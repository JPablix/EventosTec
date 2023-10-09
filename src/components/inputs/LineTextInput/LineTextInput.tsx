// Imports
import PropTypes from 'prop-types';
import { TextInput, Text, View } from 'react-native'
import React, { useState } from 'react'

// Styles
import { styles } from './LineTextInput.style'


const LineTextInput = (props) => {
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = () => {
        setIsFocused(false);
    };
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={[
                styles.textInput,
                isFocused ? styles.focusedInput : styles.blurredInput,
                ]}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={props.placeholder}
                value={props.value}
            />
        </View>
    )
}

// Props
LineTextInput.propTypes = {
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func,
    value: PropTypes.string,
};

// Exports
export default LineTextInput;