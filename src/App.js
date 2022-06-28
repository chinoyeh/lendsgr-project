import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"

import "./assets/scss/App.scss"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />


        <Route path='/dashboard' element={<Dashboard />} />




      </Routes>

    </BrowserRouter>

  );
}

export default App;
