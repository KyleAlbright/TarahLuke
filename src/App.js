import React from 'react';
import './index.css';
import NavBar from "./components/NavBar";
import Hero from "./pages/Hero";
import About from "./components/About"



import { Route, HashRouter, Routes } from "react-router-dom";

function App() {
  return (
   <>

      <HashRouter>
        <NavBar />
       <Routes>
        <Route path="/"element={<Hero />} />
        <Route path="/about"element={<About />} />
       </Routes>
      </HashRouter>
      
    </>
  );
}

export default App;