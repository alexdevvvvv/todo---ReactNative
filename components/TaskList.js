import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <TaskItem task={item} onDelete={onDeleteTask} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TaskList;