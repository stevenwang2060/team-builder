import React, { useState } from 'react';
import './App.css';
import Members from './components/Members';
import Form from './components/Form';

function App() {
  const [members, setMembers] = useState([
    {
      id: Date.now(),
      name: 'Steven',
      email: 'stevenwang2060@gmail.com',
      role: 'Front End Web Developer',
    }
  ])

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  }

  return (
    <div className="App">
      <h1>My Teammates</h1>
      <Form addNewMember = {addNewMember} />
      <Members members = {members} />
    </div>
  );
}

export default App;