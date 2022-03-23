import React from 'react'
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About'
import Give from './Components/Give'
import Contact from './Components/Contact'
import './App.css'

function App() {
  return (
    <Router>
    <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path ='/Give' element={<Give/>}/>
      <Route path ='/Contact' element={<Contact/>}/>
      <Route path ='/About' element={<About/>}/>
    </Routes>
</Router>
  );
}

export default App;
