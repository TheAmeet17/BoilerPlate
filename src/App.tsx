import React, { useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { Task } from './components/Type';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editTask, setEditTask] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>('');

  const addTask = (text: string) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleComplete = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const startEdit = (index: number) => {
    setEditTask(index);
    setEditText(tasks[index].text);
  };

  const submitEdit = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: editText } : task
    );
    setTasks(updatedTasks);
    setEditTask(null);
    setEditText('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
        <AddTask addTask={addTask} />
        <TaskList
          tasks={tasks}
          toggleComplete={toggleComplete}
          startEdit={startEdit}
          editTask={editTask}
          editText={editText}
          setEditText={setEditText}
          submitEdit={submitEdit}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
};

export default App;
