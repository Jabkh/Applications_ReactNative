import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableWithoutFeedback, Keyboard, Pressable, Text } from 'react-native';

const GroceryForm = ({ onAdd }) => {
  const [name, setName] = useState('');

  // Fonction pour ajouter un nouvel article
  const handleAdd = () => {
    if (name.trim() !== '') { // Vérifie si le champ de saisie n'est pas vide
      onAdd(name); // Appelle la fonction onAdd avec le nom de l'article
      setName(''); // Réinitialise le champ de saisie
    }
  };

  // Fonction pour masquer le clavier lorsque l'utilisateur appuie à l'extérieur du champ de saisie
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        {/* Champ de saisie pour l'ajout d'un article */}
        <TextInput
          style={styles.input}
          placeholder="Enter item"
          value={name}
          onChangeText={setName}
          numberOfLines={3}
        />
        {/* Bouton d'ajout d'un article */}
        <Pressable
          onPress={handleAdd}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? '#dc2f02' : '#dc2f02', // Changement de couleur du bouton lorsqu'il est pressé
            },
            styles.wrapperCustom,
          ]}>
          {({pressed}) => (
            <Text style={styles.textButton}>{pressed ? 'Added!' : 'Add Grocery'}</Text> // Texte du bouton qui change en fonction de l'état pressé ou non
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
  },
  addButton:{
    backgroundColor: '#fff',
    textAlign:'center',
  },
  wrapperCustom: {
    textAlign:'center',
    borderRadius: 8,
    padding: 6,
  },
  textButton:{
    textAlign:'center',
    fontWeight:'bold',
    color:'#faf0ca'
  },
});

export default GroceryForm;
