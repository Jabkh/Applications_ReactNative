import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoApp from './components/TodoApp/TodoApp';
import ContactListModal from './components/Contact/ContactListModal';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Todo" component={TodoApp} options={{ title: 'Todo' }} />
        <Tab.Screen name="Contact" component={ContactListModal} options={{ title: 'Contact' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
