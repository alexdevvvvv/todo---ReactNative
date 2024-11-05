import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Ajouter une tâche  
  const addTask = () => {
    if (task.trim().length > 0) {
      setTasks([...tasks, { id: Math.random().toString(), value: task }]);
      setTask('');
    } else {
      Alert.alert('Erreur', 'Veuillez entrer une tâche valide');
    }
  };

  // Supprimer une tâche
  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ma Todo List</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nouvelle tâche..."
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity onPress={addTask} style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item.value}</Text>
            <TouchableOpacity
              onPress={() => removeTask(item.id)}
              style={styles.deleteButton}
            >
              <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
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
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 6,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  taskContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 6,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  taskText: {
    fontSize: 16,
    flex: 1,
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
    padding: 8,
    borderRadius: 6,
    width: 40,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16,
  },
}); 