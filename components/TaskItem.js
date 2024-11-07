import React, { useState } from 'react';
import { Text, TouchableOpacity, Pressable, StyleSheet } from 'react-native';
import TaskModal from './TaskModal';

const TaskItem = ({ task, onDelete, onUpdate }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Pressable 
        onPress={() => setModalVisible(true)}
        android_ripple={{ color: 'rgba(0, 0, 0, 0.1)' }}
        style={({ pressed }) => [
          styles.taskContainer,
          { opacity: pressed ? 0.7 : 1 }
        ]}
      >
        <Text style={styles.taskText}>{task.value}</Text>
        <TouchableOpacity
          onPress={() => onDelete(task.id)}
          style={styles.deleteButton}
        >
          <Text style={styles.deleteButtonText}>X</Text>
        </TouchableOpacity>
      </Pressable>

      <TaskModal 
  visible={modalVisible}
  onClose={() => setModalVisible(false)}
  task={task}
  onUpdate={(newValue) => {
    onUpdate(task.id, newValue);
    setModalVisible(false);
  }}
/>
    </>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 6,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  taskText: {
    fontSize: 16,
    flex: 1,
  },
  deleteButton: {
    marginLeft: 10,
  },
  deleteButtonText: {
    color: '#FF3B30',
    fontSize: 18,
    fontWeight: 'bold',
  },
});