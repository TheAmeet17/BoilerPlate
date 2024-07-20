import React from 'react';
import EditTask from './Edittask';
import { Task } from './Type';

interface TaskItemProps {
  task: Task;
  index: number;
  toggleComplete: (index: number) => void;
  startEdit: (index: number) => void;
  editTask: number | null;
  editText: string;
  setEditText: (text: string) => void;
  submitEdit: (index: number) => void;
  deleteTask: (index: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  index,
  toggleComplete,
  startEdit,
  editTask,
  editText,
  setEditText,
  submitEdit,
  deleteTask
}) => {
  return (
    <li key={index} className="flex items-center justify-between mb-2">
      {editTask === index ? (
        <EditTask
          editText={editText}
          setEditText={setEditText}
          submitEdit={() => submitEdit(index)}
        />
      ) : (
        <span
          className={`flex-grow p-2 rounded ${task.completed ? 'line-through text-gray-500' : ''}`}
          onClick={() => toggleComplete(index)}
        >
          {task.text}
        </span>
      )}
      <div className="flex items-center space-x-2">
        {editTask === index ? (
          <button
            className="p-1 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={() => submitEdit(index)}
          >
            Save
          </button>
        ) : (
          <button
            className="p-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            onClick={() => startEdit(index)}
          >
            Edit
          </button>
        )}
        <button
          className="p-1 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => deleteTask(index)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;