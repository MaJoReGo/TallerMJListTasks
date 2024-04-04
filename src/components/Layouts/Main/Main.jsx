import React, { useState } from 'react'; 
import { Form } from '../../Form/Form'; 
import { Filter } from '../../Filter/Filter'; 
import './Main.css'; 

export const Main = () => {

const [tasks, setTasks] = useState([]); 
const [filter, setFilter] = useState('all'); 
const handleCreateTask = (title, description) => {

const newTask = { title, description, completed: false };

    //esta sintaxis se utiliza para combinar múltiples arrays

    setTasks([...tasks, newTask]);
    
    //operador de propagación
  };

  const handleCheckboxChange = (index) => {
    const updatedTasks = [...tasks];
    //se crea una copia
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

 
  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') {
      return true; 
    } else if (filter === 'completed') {
      return task.completed; 
    } else if (filter === 'pending') {
      return !task.completed; 

    //! invierte el valor booleano

    }
  });

  return (
    <div className="container">
      <div className="home-container">
      </div>
      <div className="form-filter-container">
        <Form onCreateTask={handleCreateTask} />
        <Filter onFilterChange={setFilter} />
      </div>
      <div className="task-container">
        {/* Mapea y renderiza las tareas filtradas */}
        {filteredTasks.map((task, index) => (
          <div key={index} className={`task ${task.completed ? 'completed' : 'pending'}`}>
            <div className={`circle ${task.completed ? 'checked' : ''}`}></div>
            {/*indica que se debe insertar valores de la expresión entre las llaves*/}
            <h3 className={task.completed ? 'completed' : ''}>{task.title}</h3>
            <p className={task.completed ? 'completed' : ''}>{task.description}</p>
            <label className="checkbox-container">
              <input type="checkbox" checked={task.completed} onChange={() => handleCheckboxChange(index)} /> {/*controlador de evento*/}
              <span className="checkbox-custom"></span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
