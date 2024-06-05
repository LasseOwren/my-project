import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LugarEllerBord from './pages/LugarEllerBord';
import SkrivBordNr from './pages/SkrivBordNr';
import SkrivLugarNr from './pages/SkrivLugarNr';
import Menu from './pages/Menu';
import ProductPage from './pages/ProductPage';
import GodkjentBetaling from './pages/GodkjentBetaling';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/lugar-eller-bord" element={<LugarEllerBord />} />
        <Route path="/skriv-bordnr" element={<SkrivBordNr />} />
        <Route path="/skriv-lugarnr" element={<SkrivLugarNr />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/GodkjentBetaling" element={<GodkjentBetaling />} />
      </Routes>
    </Router>
  );
}

export default App;
