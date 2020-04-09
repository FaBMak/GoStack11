import React, { useState, useEffect } from "react";

import api from './services/api';

import "./styles.css";

function App() {
  const [ repositories, setRepositories ]= useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
        setRepositories(response.data);
    });
  }, []);

  async function handleAddRepository() {
    const response = await api.post('repositories', {
      title: `Repositório ${Date.now()}`,
      url: "https://github.com/FaBMak/GoStack11",
      techs: "Node, React" 
    });
    const repository = response.data;
    setRepositories([...repositories, repository]);
  }

  async function handleRemoveRepository(id) {
    const novoRepositories = repositories.filter((repository) => repository.id !== id);
    api.delete('repositories/'+ id).then(response => {
      if (response.status === 204) {
        setRepositories(novoRepositories);
      }
    })
  }

  return (
    <>
      <ul data-testid="repository-list">
        { repositories.map(repository => 
          <li key={ repository.id }>
            { repository.title }
            <button onClick={() => handleRemoveRepository(repository.id)}>
              Remover
            </button>
          </li>
        )}
      </ul>
      <button type="button" onClick={ handleAddRepository }>Adicionar</button>
    </>
  );
}

export default App;
