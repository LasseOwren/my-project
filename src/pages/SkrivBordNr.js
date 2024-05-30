import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import CabinContext from '../components/CabinContext';


// Komponent for å skrive inn bordnummer
const SkrivBordNr = () => {
  const [bordNr, setBordNr] = useState('');
  const { setCabinOrTable } = useContext(CabinContext);
  const navigate = useNavigate();

  // Funksjon for å sette bordnummeret og navigere til menyen 
  const handleNext = () => {
    setCabinOrTable(`Bord ${bordNr}`);
    navigate('/menu');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow p-4 md:p-8 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white p-4 md:p-6 rounded-lg shadow-lg">
          <button className="mb-4" onClick={() => navigate(-1)}>← Tilbake</button>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Skriv ditt bordnummer...</h1>
          <input type="text" placeholder="Skriv ditt bordnummer..." className="p-2 mb-4 border rounded w-full" value={bordNr} onChange={(e) => setBordNr(e.target.value)} />
          <button className="bg-yellow-500 text-white py-3 md:py-4 px-4 md:px-6 rounded text-base md:text-lg hover:bg-yellow-600" onClick={handleNext}>Videre til meny</button>
        </div>
      </div>
    </div>
  );
};

export default SkrivBordNr;
