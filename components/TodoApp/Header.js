import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navbarText}>Todo App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#0077b6',
    padding: 15,
  },
  navbarText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Navbar;
