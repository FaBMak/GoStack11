import React, { useState, useEffect } from 'react';
import api from './services/api'

import './App.css';
// Exemplo de carregamento de imagem - Importa/Depois passa via variável
//import backgroundImage from './assets/background.jpg';

import Header from './components/Header';

function App() {
    const [ projects, setProjects ]= useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject() {
        // Não pode ser usado devido ao conceito de imutabilidade
        //projects.push(`Novo projeto ${Date.now()}`);

        // Tenho que criar um novo Array com os dados do projeto
        //setProjects([...projects, `Novo projeto ${Date.now()}`]);

        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: "Fabricio"
        });
        const project = response.data;
        setProjects([...projects, project]);
    }
    return (
        <>
            <Header title="Projects" />
            { /* Exemplo de carregamento de imagem - Importa/Depois passa via variável
            //<img width={200} src={ backgroundImage }/>
            */ }
            <ul>
                { projects.map(project => <li key={ project.id }>{ project.title }</li>) }
            </ul>
            <button type="button" onClick={ handleAddProject }>Adicionar Projeto</button>
        </>
    )
}

export default App;