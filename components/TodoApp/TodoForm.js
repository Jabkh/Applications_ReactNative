import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const TodoForm = ({onAdd}) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim() !== '') {
      onAdd(text);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={text}
        onChangeText={setText}
        multiline={true}
        numberOfLines={3}
      />
      <Button title="Add Task" onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
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
});

export default TodoForm;
