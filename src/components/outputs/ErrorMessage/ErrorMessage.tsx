import React, { useState } from 'react';
import { View, Modal, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';

//  Styles
import { styles } from "./ErrorMessage.style";

// Interfaces
interface ErrorMessageProps {
    visible: boolean;
    transparent?: boolean;
    message: any;
    setVisible: (visible: boolean) => void;
}

const ErrorMessage = ({ visible, content, transparent, onClose }) => {

    const handleClose = () => {
        onClose(!visible);
    };
    const { code, message, name } = content;
    return (
        <Modal
          animationType="slide"
          transparent={transparent}
          visible={visible}
        >
          <TouchableWithoutFeedback onPress={handleClose}>
            <View style={styles.modalOverlay}>
              <TouchableWithoutFeedback>
                <View style={styles.modalContent}>
                  <Text style={styles.text}>ATENCIÓN:</Text>
                  <Text>{message}</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      );
    };
//Exports
export default ErrorMessage; 