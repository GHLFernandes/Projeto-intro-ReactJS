import React, { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

const banner = 'imagens/banner.png';
const user = 'imagens/logo192.png';

function App() {

  const teams = [
    {
        'nome': 'Time 1',
        'primaryColor': '#57C278',
        'secundaryColor': '#D9F7E9',
    },
    {
        'nome': 'Time 2',
        'primaryColor': '#82CFFA',
        'secundaryColor': '#E8F8FF',
    },
    {
        'nome': 'Time 3',
        'primaryColor': '#A6D157',
        'secundaryColor': '#F0F8E2',
    },
    {
        'nome': 'Time 4',
        'primaryColor': '#E06B69',
        'secundaryColor': '#FDE7E8',
    },
    {
        'nome': 'Time 5',
        'primaryColor': '#FFBA05',
        'secundaryColor': '#FFF5D9',
    },
    {
        'nome': 'Time 6',
        'primaryColor': '#FF8A29',
        'secundaryColor': '#FFEEDF',
    },
    {
        'nome': 'Time 7',
        'primaryColor': '#DB6EBF',
        'secundaryColor': '#FAE9F5',
    }
  ];

  const [ collaborators, setCollaborators ] = useState([]);

  const handleSubmit = (submit) => {
    console.log(submit)
    setCollaborators([...collaborators, submit])
  }

  return (
    <div className="App">
        <Banner banner={banner}/>
        <Form handleSubmit={submit => handleSubmit(submit)} team={teams.map(team => team.nome)}/>

        { teams.map(team => <Team 
                              collaborators={collaborators.filter(collaborator => collaborator.time === team.nome)} 
                              key={team.nome} 
                              nome={team.nome} 
                              user={user} 
                              primaryColor={team.primaryColor} 
                              secundaryColor={team.secundaryColor}/> )}
        
    </div>
  );
}

export default App;
