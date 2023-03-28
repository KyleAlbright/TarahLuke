import React from 'react';
import './index.css';
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Closets from "./pages/Closets";
import Pantries from "./pages/Pantries";
import Bathrooms from "./pages/Bathrooms";
import Garages from "./pages/Garages";
import Etc from "./pages/Etc";
import Footer from "./components/Footer"






import { Route, HashRouter, Routes } from "react-router-dom";

function App() {
  return (
    <>

      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/closets" element={<Closets />} />
          <Route path="/pantries" element={<Pantries />} />
          <Route path="/bathrooms" element={<Bathrooms />} />
          <Route path="/garages" element={<Garages />} />
          <Route path="/etc" element={<Etc />} />
        </Routes>
        <Footer />
      </HashRouter>

    </>
  );
}

export default App;