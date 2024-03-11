import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Navbar from './Navbar';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = text => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const handleDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEditTodo = (id, newText) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, text: newText };
        }
        return todo;
      }),
    );
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <TodoForm onAdd={handleAddTodo} />
      <TodoList
        todos={todos}
        onDelete={handleDeleteTodo}
        onEdit={handleEditTodo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90e0ef',
  },
});

export default TodoApp;
