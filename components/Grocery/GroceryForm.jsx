import React, { useState } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, Pressable } from 'react-native';

const GroceryForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAdd = () => {
    if (name.trim() !== '') {
      onAdd(name, quantity);
      setName('');
      setQuantity('');
    }
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter item"
          value={name}
          onChangeText={setName}
          numberOfLines={3}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter quantity"
          value={quantity}
          onChangeText={setQuantity}
          keyboardType="numeric"
        />
        <Pressable
          onPress={handleAdd}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? '#dc2f02' : '#dc2f02',
            },
            styles.wrapperCustom,
          ]}>
          {({pressed}) => (
            <Text style={styles.textButton}>{pressed ? 'Added!' : 'Add Grocery'}</Text>
          )}
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#f77f00',
    fontSize: 20,
    textAlign:'center',
    marginBottom: 10,
  },
  wrapperCustom: {
    textAlign:'center',
    borderRadius: 8,
    padding: 6,
  },
  textButton:{
    textAlign:'center',
    fontWeight:'bold',
    color:'#faf0ca',
  },
});

export default GroceryForm;
