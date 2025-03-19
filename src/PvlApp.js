import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PvlNavNar from './components/PvlNavNar';
import PvlHome from './components/PvlHome';
import PvlAbout from './components/PvlAbout';
import PvlContact from './components/PvlContact';
import PvlListUser from './components/PvlListUser';
import PvlFormUser from './components/PvlFormUser';

export default function PvlApp() {
  const listUsers = [
    { id: "SV001", PvlFullName: "Phạm Văn Lực", PvlUserName: "Lucvx", PvlPass: "123456a@" },
    { id: "SV002", PvlFullName: "Lê Thị Hương", PvlUserName: "Huong2501", PvlPass: "123456a@" },
    { id: "SV003", PvlFullName: "Nguyễn Văn Anh", PvlUserName: "Anhvx", PvlPass: "123456a@" },
  ];

  const [PvlUsers, setPvlUsers] = useState(listUsers);

  const PvlHandleAdd = (PvlParam) => {
    setPvlUsers(prev => [...prev, PvlParam]);
  };

  return (
    <div className='container border my-3'>
      <h1>React Router Dom - Demo - [Phạm Văn Lực - K23CNT3]</h1>
      <hr />
      <Router>
        <PvlNavNar />
        <Routes>
          <Route path='/' element={<PvlHome />} />
          <Route path='/about' element={<PvlAbout />} />
          <Route path='/contact' element={<PvlContact />} />
          <Route path='/list-user' element={<PvlListUser users={PvlUsers} />} />
          <Route path='/create-user' element={<PvlFormUser onAddUser={PvlHandleAdd} />} />
        </Routes>
      </Router>
    </div>
  );
}
