import React, { useState } from 'react';

interface AddTaskProps {
  addTask: (text: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = () => {
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div className="h-177 w-166 flex items-center justify-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-4">
      <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-2xl p-8 max-w-md w-full transform transition-all duration-500 hover:scale-105">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Task Manager</h1>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
          onClick={handleSubmit}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTask;
