import React from 'react';
import './Form.css'

export const Form = ({ onCreateTask }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    onCreateTask(title, description);
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="title" className="label">Title:</label><br/>
      <input type="text" id="title" name="title" className="input"/><br/><br/>
      <label htmlFor="description" className="label">Description:</label><br/>
      <textarea id="description" name="description" rows="4" cols="50" className="input"></textarea><br/><br/>
      <button type="submit" className="button">Add Task</button>
    </form>
  );
};
