import React from 'react';

interface EditTaskProps {
  editText: string;
  setEditText: (text: string) => void;
  submitEdit: () => void;
}

const EditTask: React.FC<EditTaskProps> = ({ editText, setEditText, submitEdit }) => {
  return (
    <input
      type="text"
      className="w-full p-2 border border-gray-300 rounded mr-2"
      value={editText}
      onChange={(e) => setEditText(e.target.value)}
      onBlur={submitEdit}
    />
  );
};

export default EditTask;
