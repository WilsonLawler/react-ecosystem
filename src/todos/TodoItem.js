import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo }) => (
  <div className="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="buttons-container">
      <button className="completed-button" type="button">標記為已完成</button>
      <button className="remove-button" type="button">移除</button>
    </div>
  </div>
);

export default TodoItem;
