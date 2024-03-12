import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal, Button, StyleSheet, TextInput } from 'react-native';

const GroceryList = ({ items, onDelete, onEdit }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [editedItemName, setEditedItemName] = useState('');
  const [editedItemQuantity, setEditedItemQuantity] = useState('');
  const [editedItemIndex, setEditedItemIndex] = useState(null); // Nouvel état pour l'index de l'article édité

  // Fonction pour ouvrir la modal d'édition d'un article
  const openEditModal = (id, name, quantity, index) => { // Ajouter l'index comme paramètre
    setModalVisible(true);
    setSelectedItemId(id);
    setEditedItemName(name);
    setEditedItemQuantity(quantity);
    setEditedItemIndex(index); // Mettre à jour l'index de l'article édité
  };

  // Fonction pour gérer l'édition d'un article
  const handleEdit = () => {
    onEdit(selectedItemId, editedItemName, editedItemQuantity); // Passer la quantité à la fonction onEdit
    setModalVisible(false);
  };

  // Fonction pour augmenter la quantité spécifique à l'article
  const increaseQuantity = () => {
    const updatedItems = [...items];
    updatedItems[editedItemIndex].quantity = String(parseInt(editedItemQuantity) + 1);
    setEditedItemQuantity(String(parseInt(editedItemQuantity) + 1));
    setItems(updatedItems);
  };

  // Fonction pour diminuer la quantité spécifique à l'article
  const decreaseQuantity = () => {
    if (parseInt(editedItemQuantity) > 0) {
      const updatedItems = [...items];
      updatedItems[editedItemIndex].quantity = String(parseInt(editedItemQuantity) - 1);
      setEditedItemQuantity(String(parseInt(editedItemQuantity) - 1));
      setItems(updatedItems);
    }
  };

  // Fonction pour afficher chaque élément de la liste des articles
  const renderItem = ({ item, index }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => decreaseQuantity(index)} style={styles.quantityButton}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TextInput
          style={[styles.input, styles.quantityInput]}
          value={item.quantity}
          onChangeText={text => handleQuantityChange(text, index)}
          keyboardType="numeric"
        />
        <TouchableOpacity onPress={() => increaseQuantity(index)} style={styles.quantityButton}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => onDelete(item.id)} style={[styles.button, styles.deleteButton]}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openEditModal(item.id, item.name, item.quantity, index)} style={[styles.button, styles.editButton]}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.listcontainer}>
      <Text style={styles.heading}>Grocery List</Text>
      <FlatList
        style={styles.listItem}
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              placeholder="Edit item"
              value={editedItemName}
              onChangeText={setEditedItemName}
            />
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <TextInput
                style={[styles.input, styles.quantityInput]}
                placeholder="Edit quantity"
                value={editedItemQuantity}
                onChangeText={setEditedItemQuantity}
                keyboardType="numeric"
              />
              <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <Button title="Cancel" onPress={() => setModalVisible(false)} color="#dc2f02" />
              <Button title="Save" onPress={handleEdit} color="#dc2f02" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  heading: {
    color: '#faf0ca',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  listItem: {
    color: '#faf0ca',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#dc2f02',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#f77f00',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 20,
  },
  quantityInput: {
    width: 60,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  deleteButton: {
    backgroundColor: 'red',
  },
  editButton: {
    backgroundColor: 'orange',
  },
  listcontainer: {
    backgroundColor: '#ee964b',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#f4d35e',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default GroceryList;
