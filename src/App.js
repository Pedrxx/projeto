import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Calculadora from './pages/calculadora/Calculadora';

import './App.css';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";


import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Login from "./pages/chat/login/Login";



function App() {

  const [value, setValue] = useState('');
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/login' Component={() => <Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;