import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import UserDetails from "./pages/UsersDetails"
import Error from "./utils/404-error"

import "./assets/scss/App.scss"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />


        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/userdetails' element={<UserDetails />} />
        <Route path="/404-error" element={<Error />} />




      </Routes>

    </BrowserRouter>

  );
}

export default App;
