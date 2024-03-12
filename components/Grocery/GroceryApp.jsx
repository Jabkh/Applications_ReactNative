import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import GroceryList from './GroceryList';
import GroceryForm from './GroceryForm';
import Header from './Header';

const GroceryApp = () => {
  const [items, setItems] = useState([]);

  // Fonction pour ajouter un nouvel article
  const handleAddItem = (name, quantity) => {
    setItems([...items, { id: Date.now(), name, quantity }]);
  };

  // Fonction pour supprimer un article
  const handleDeleteItem = id => {
    setItems(items.filter(item => item.id !== id));
  };

  // Fonction pour éditer un article
  const handleEditItem = (id, newName, newQuantity) => {
    setItems(
      items.map(item => {
        if (item.id === id) {
          return { ...item, name: newName, quantity: newQuantity };
        }
        return item;
      }),
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <GroceryForm onAdd={handleAddItem} />
      <GroceryList
        items={items}
        onDelete={handleDeleteItem}
        onEdit={handleEditItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6bd60',
  },
});

export default GroceryApp;
