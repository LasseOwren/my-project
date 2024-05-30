import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

// Hjemmeside-komponenten som viser en velkomstmelding og to navigasjonsknapper
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow p-4 md:p-8 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white p-4 md:p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Velkommen til Fjordline</h1>
          <p className="bg-gray-200 p-4 rounded mb-4 md:mb-6">
            Vi håper du får et behagelig opphold om bord. For å gjøre reisen din enda mer avslappende, har vi laget et utvalg av mat, drikkevarer og taxfree-varer tilgjengelig for levering i lugaren, levering til bordet eller for henting.
          </p>
          <div className="flex flex-col space-y-4">
            <button className="bg-yellow-500 text-white py-3 md:py-4 px-4 md:px-6 rounded text-base md:text-lg hover:bg-yellow-600" onClick={() => navigate('/lugar-eller-bord')}>Pickup</button>
            <button className="bg-yellow-500 text-white py-3 md:py-4 px-4 md:px-6 rounded text-base md:text-lg hover:bg-yellow-600" onClick={() => navigate('/lugar-eller-bord')}>Levering</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
