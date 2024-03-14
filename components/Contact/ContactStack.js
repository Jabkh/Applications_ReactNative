import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ContactListModal from './ContactListModal';
import ContactDetails from './ContactDetails';

const Stack = createStackNavigator();

const ContactStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ContactList" component={ContactListModal} options={{ title: 'Contact List' }} />
      <Stack.Screen name="ContactDetails" component={ContactDetails} options={{ title: 'Contact Details' }} />
    </Stack.Navigator>
  );
};

export default ContactStack;
