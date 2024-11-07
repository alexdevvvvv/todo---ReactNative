import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDeleteTask, onUpdateTask }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <TaskItem 
          task={item} 
          onDelete={onDeleteTask}
          onUpdate={onUpdateTask}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};
export default TaskList;