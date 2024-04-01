import React from 'react'
import './Filter.css'

export const Filter = ({ onFilterChange }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    onFilterChange(value);
  };

  return (
    <div className="filter-container">
      <label htmlFor="filter">Filter:</label>
      <select id="filter" onChange={handleChange}>
        <option value="all">Todas las tareas</option>
        <option value="completed">Tareas completadas</option>
        <option value="pending">Tareas pendientes</option>
      </select>
    </div>
  );
};

export default Filter;