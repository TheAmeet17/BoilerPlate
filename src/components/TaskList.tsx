import React from 'react';
import TaskItem from './TaskItem';
import { Task } from './Type';

interface TaskListProps {
  tasks: Task[];
  toggleComplete: (index: number) => void;
  startEdit: (index: number) => void;
  editTask: number | null;
  editText: string;
  setEditText: (text: string) => void;
  submitEdit: (index: number) => void;
  deleteTask: (index: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  toggleComplete,
  startEdit,
  editTask,
  editText,
  setEditText,
  submitEdit,
  deleteTask
}) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          toggleComplete={toggleComplete}
          startEdit={startEdit}
          editTask={editTask}
          editText={editText}
          setEditText={setEditText}
          submitEdit={submitEdit}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
