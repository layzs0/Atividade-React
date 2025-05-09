import { useState } from 'react';
import './App.css';
import logo from './imagem/logo.png'

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (tasktoRemove) => {
    setTasks(tasks. filter(t => t !== tasktoRemove));

  };
  return (
    <div className='App'>
      <img src={logo} alt="Logo" className="logo" /> 
      <h1>Lista de Tarefas</h1>
      
      <input 
      type= 'text'
      value={task}
      onChange={(e) => setTask(e.target.value)}
      placeholder='Digite sua Tarefa'
      />
      <button onClick={addTask}>Adicionar</button>

     <ul>
      {tasks.map((Task, index)=> (
        <li key={index}>
          {Task}
          <button onClick={() => removeTask(Task)}> Remover </button>
        </li>
      ))}
     </ul>

     

    </div>

)
}
export default App;