// ContactListModal.js
import React, { useState } from 'react';
import { Modal, Text, FlatList, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import contacts from './data/contacts.json';
import { useNavigation } from '@react-navigation/native';

const ContactListModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

    // Fonction pour naviguer vers les détails du contact
    const navigateToContactDetails = (contact) => {
      setModalVisible(false); // Ferme la modal
      navigation.navigate('ContactDetails', { contact }); // Navigue vers les détails du contact
    };

    const renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => navigateToContactDetails(item)}>
        <View style={styles.contactItem}>
          <Text style={styles.contactName}>{item.name}</Text>
          <Text style={styles.contactInfo}>Phone: {item.phone}</Text>
          <Text style={styles.contactInfo}>Address: {item.adresse}</Text>
          {/* Bouton pour afficher les détails du contact */}
          <TouchableOpacity onPress={() => navigateToContactDetails(item)}>
            <Text style={styles.detailsButton}>View Details</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      />
      {/* Bouton pour ouvrir la modal */}
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.heading}>Open Contact List</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.heading}>Contact List</Text>
            {/* Liste de contacts */}
            <FlatList
              data={contacts} // Utilisation des données importées
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            {/* Bouton pour fermer la modal */}
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#5e35b1',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxHeight: '80%',
  },
  contactItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    marginBottom: 10,
  },
  contactName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5e35b1',
  },
  contactInfo: {
    fontSize: 16,
    color: '#333',
  },
  closeButton: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  detailsButton: {
    color: '#007bff',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default ContactListModal;