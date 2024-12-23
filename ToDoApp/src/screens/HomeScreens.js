import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import TaskItem from '../components/TaskItem';
import GlobalStyles from '../styles/GlobalStyles';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    console.log('HomeScreen Mounted');
    return () => {
      console.log('HomeScreen Unmounted');
    };
  }, []);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <View style={GlobalStyles.container}> {/* Gunakan GlobalStyles */}
    <Text style={GlobalStyles.title}>To-Do List</Text>
    <TextInput
      style={GlobalStyles.input}
      placeholder="Add a new task"
      value={newTask}
      onChangeText={setNewTask}
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <TaskItem task={item} onDelete={() => deleteTask(index)} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default HomeScreen;
