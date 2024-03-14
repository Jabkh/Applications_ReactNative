import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';

const ContactScreen = ({ route }) => {
  const { contact } = route.params;

  const handleCall = () => {
    // Vérifiez si le numéro de téléphone est disponible
    if (contact.phoneNumber) {
      const phoneNumber = contact.phoneNumber.replace(/\s/g, ''); // Supprime les espaces du numéro de téléphone
      const phoneUrl = `tel:${phoneNumber}`; // Crée l'URL pour l'application d'appel du téléphone
      Linking.openURL(phoneUrl); // Ouvre l'URL dans l'application d'appel du téléphone
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{contact.name}</Text>
      <Text>Phone Number: {contact.phoneNumber}</Text>
      {/* Bouton pour appeler */}
      <TouchableOpacity onPress={handleCall} style={styles.callButton}>
        <Text style={styles.callButtonText}>Call</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  callButton: {
    marginTop: 20,
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  callButtonText: {
    fontSize: 18,
    color: 'white',
  },
});

export default ContactScreen;
