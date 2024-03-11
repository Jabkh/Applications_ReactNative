import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  Button,
  StyleSheet,
  TextInput,
} from 'react-native';

const TodoList = ({ todos, onDelete, onEdit }) => {
  // État pour gérer la visibilité de la modal
  const [modalVisible, setModalVisible] = useState(false);
  // État pour stocker l'identifiant de la tâche sélectionnée
  const [selectedTodoId, setSelectedTodoId] = useState(null);
  // État pour stocker le texte édité de la tâche
  const [editedText, setEditedText] = useState('');

  // Fonction pour ouvrir la modal d'édition d'une tâche
  const openEditModal = (id, text) => {
    setModalVisible(true);
    setSelectedTodoId(id);
    setEditedText(text);
  };

  // Fonction pour gérer l'édition d'une tâche
  const handleEdit = () => {
    onEdit(selectedTodoId, editedText);
    setModalVisible(false);
  };

  // Fonction pour afficher chaque élément de la liste des tâches
  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      <Text style={styles.todoText}>{item.text}</Text>
      <View style={styles.buttonContainer}>
        {/* Bouton pour supprimer une tâche */}
        <TouchableOpacity
          onPress={() => onDelete(item.id)}
          style={[styles.button, styles.deleteButton]}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
        {/* Bouton pour éditer une tâche */}
        <TouchableOpacity
          onPress={() => openEditModal(item.id, item.text)}
          style={[styles.button, styles.editButton]}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // Rendu de TodoList
  return (
    <View style={styles.container}>
      {/* En-tête de la liste des tâches */}
      <Text style={styles.heading}>Todo List</Text>
      {/* Liste des tâches */}
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      {/* Modal pour éditer une tâche */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* Champ de texte pour l'édition de la tâche */}
            <TextInput
              style={styles.input}
              placeholder="Edit task"
              value={editedText}
              onChangeText={setEditedText}
            />
            {/* Boutons pour annuler ou sauvegarder l'édition */}
            <View style={styles.buttonContainer}>
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
              <Button title="Save" onPress={handleEdit} />
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  todoText: {
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
    backgroundColor: 'red',
  },
  editButton: {
    backgroundColor: 'orange',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
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
    backgroundColor: '#caf0f8',
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

export default TodoList;
