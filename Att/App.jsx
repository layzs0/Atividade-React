import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.png';
import UserInput from './components/Userinput';
import UserList from './components/UserList';

function App() {
  const [usuarios, setUsuarios] = useState(['Marta', 'Maria', 'josé']);

  const adicionarUsuario = (novoUsuario) => {
    if (usuarios.includes(novoUsuario)) {
      alert('Usuário já existe na lista.');
      return;
    }
    setUsuarios([...usuarios, novoUsuario]);
  };

  return (
    <div className='App'>
      <img src={logo} alt='Logo da empresa' className='logo' />
      <hr />
      <UserInput onAdduser={adicionarUsuario } />
      <hr />
      <UserList usuarios={usuarios} />
    </div>
  );
}

export default App;
