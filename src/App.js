import React from 'react';
import './index.css';
import NavBar from "./components/NavBar";
import Home from "./pages/Home";




import { Route, HashRouter, Routes } from "react-router-dom";

function App() {
  return (
    <>

      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </HashRouter>

    </>
  );
}

export default App;