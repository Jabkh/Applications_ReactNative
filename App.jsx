import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Importez Ionicons
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Importez FontAwesome
import Entypo from 'react-native-vector-icons/Entypo'; // Importez Entypo
import TodoApp from './components/TodoApp/TodoApp';
import ContactListModal from './components/Contact/ContactListModal';
import GroceryApp from './components/Grocery/GroceryApp';
import CalculApp from './components/Calculatrice/CalculApp';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Todo"
          component={TodoApp}
          options={{
            title: 'TodoList',
            tabBarLabel: 'TodoList',
            tabBarIcon: ({ color }) => (
              <FontAwesome name="list" color={color} size={26} /> 
            ),
          }}
        />
        <Tab.Screen
          name="Grocery"
          component={GroceryApp}
          options={{
            title: 'GroceryList',
            tabBarLabel: 'GroceryList',
            tabBarIcon: ({ color }) => (
              <FontAwesome name="shopping-cart" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={ContactListModal}
          options={{
            title: 'Contact',
            tabBarLabel: 'Contact',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-group" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Calculator"
          component={CalculApp}
          options={{
            title: 'Calculatrice',
            tabBarLabel: 'Calculatrice',
            tabBarIcon: ({ color }) => (
              <Entypo name="calculator" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
