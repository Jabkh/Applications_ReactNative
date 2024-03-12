import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal, Button, StyleSheet, TextInput } from 'react-native';

const GroceryList = ({ items, onDelete, onEdit }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [editedItemName, setEditedItemName] = useState('');

  // Fonction pour ouvrir la modal d'édition d'un article
  const openEditModal = (id, name) => {
    setModalVisible(true);
    setSelectedItemId(id);
    setEditedItemName(name);
  };

  // Fonction pour gérer l'édition d'un article
  const handleEdit = () => {
    onEdit(selectedItemId, editedItemName);
    setModalVisible(false);
  };

  // Fonction pour afficher chaque élément de la liste des articles
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => onDelete(item.id)} style={[styles.button, styles.deleteButton]}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openEditModal(item.id, item.name)} style={[styles.button, styles.editButton]}>
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
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    padding: 5,
    borderRadius: 5,
    marginLeft: 5,
  },
  deleteButton: {
    color: '#faf0ca',
    backgroundColor: 'red',
  },
  editButton: {
    color: '#faf0ca',
    backgroundColor: 'orange',
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
  listcontainer: {
    backgroundColor: '#ee964b',
  }
});

export default GroceryList;
