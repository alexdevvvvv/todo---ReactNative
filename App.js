import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Alert, 
  ImageBackground 
} from 'react-native';
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

  const updateTask = (taskId, newValue) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, value: newValue } : task
    ));
  };

  return (
    <ImageBackground 
      source={require('./assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.overlay}>
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
  onUpdateTask={updateTask}
/>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
});