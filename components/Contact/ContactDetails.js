import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';

const ContactDetails = ({ route }) => {
  const { contact } = route.params;

  const handlePhoneCall = () => {
    // Utilise Linking pour ouvrir l'application d'appel du téléphone
    Linking.openURL(`tel:${contact.phoneNumber}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{contact.name}</Text>
      <Text>Phone Number: 
        <TouchableOpacity onPress={handlePhoneCall}>
          <Text style={styles.phoneNumber}>{contact.phoneNumber}</Text>
        </TouchableOpacity>
      </Text>
      <Text>Address: {contact.address}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  phoneNumber: {
    color: 'blue', 
    textDecorationLine: 'underline', 
  },
});

export default ContactDetails;
