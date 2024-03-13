import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, text, style }) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 40,
    backgroundColor: '#e5e5e5',
    paddingVertical: 20,
    paddingHorizontal: 30,
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: 20,
  },
});

export default CustomButton;
