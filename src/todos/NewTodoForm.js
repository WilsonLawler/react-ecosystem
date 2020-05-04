import React, { useState } from 'react';
import './NewTodoForm.css';

const NewTodoForm = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="new-todo-form">
      <input
        type="text"
        className="new-todo-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="new-todo-button" type="button">建立</button>
    </div>
  );
};

export default NewTodoForm;
