import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactList from './ContactList';
import ContactScreen from './ContactScreen';

const Stack = createStackNavigator();

const ContactStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="ContactList" component={ContactList} options={{ title: 'Contact List' }} />
        <Stack.Screen name="Contacts" component={ContactScreen} options={{ title: 'Contact Details' }} />
      </Stack.Navigator>
  );
};

export default ContactStack;
