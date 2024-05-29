import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const LugarEllerBord = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow p-4 md:p-8 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white p-4 md:p-6 rounded-lg shadow-lg">
          <button className="mb-4" onClick={() => navigate(-1)}>← Tilbake</button>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Hvor ønsker du å få maten levert?</h1>
          <div className="flex flex-col space-y-4">
            <button className="bg-yellow-500 text-white py-3 md:py-4 px-4 md:px-6 rounded text-base md:text-lg hover:bg-yellow-600" onClick={() => navigate('/skriv-lugarnr')}>Til lugar</button>
            <button className="bg-yellow-500 text-white py-3 md:py-4 px-4 md:px-6 rounded text-base md:text-lg hover:bg-yellow-600" onClick={() => navigate('/skriv-bordnr')}>Til bord</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LugarEllerBord;
