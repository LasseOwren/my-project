import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LugarEllerBord from './pages/LugarEllerBord';
import SkrivBordNr from './pages/SkrivBordNr';
import SkrivLugarNr from './pages/SkrivLugarNr';
import Menu from './pages/Menu';
import ProductPage from './pages/ProductPage';
import GodkjentBetaling from './pages/GodkjentBetaling';
import OrdreStatus from './pages/OrdreStatus';
import CartPage from './pages/CartPage';
import BetalingOptions from './pages/BetalingOptions';
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/lugar-eller-bord" element={<LugarEllerBord />} />
          <Route path="/skriv-bordnr" element={<SkrivBordNr />} />
          <Route path="/skriv-lugarnr" element={<SkrivLugarNr />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/godkjent-betaling" element={<GodkjentBetaling />} />
          <Route path="/ordre-status" element={<OrdreStatus />} />
          <Route path="/betaling-options" element={<BetalingOptions />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
