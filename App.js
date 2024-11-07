import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim().length > 0) {
      setTasks([...tasks, { id: Math.random().toString(), value: task }]);
      setTask('');
    } else {
      Alert.alert('Erreur', 'Veuillez entrer une tâche valide');
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ma Todo List</Text>
      
      <TaskInput 
        task={task}
        onChangeText={setTask}
        onAddTask={addTask}
      />

      <TaskList 
        tasks={tasks}
        onDeleteTask={removeTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 80,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});