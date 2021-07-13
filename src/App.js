import React, { useEffect } from 'react';

import SearchBar from './components/SearchBar';
import Logs from './container/Logs';
import AddBtn from './components/AddBtn';
import AddLogModal from './components/AddLogModal';
import EditLogModal from './components/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './container/TechListModal';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {

  useEffect( () => {
    //Initialize Materialize JS
    M.AutoInit()
  })

  return (
    <>
      <SearchBar />
      <div className="container" >
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </>
  );
}

export default App;
