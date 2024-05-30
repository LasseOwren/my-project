import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

// Komponent for menyvalget
const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow p-4 md:p-8 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white p-4 md:p-6 rounded-lg shadow-lg">
          {/* Tilbake knapp */}
          <button className="mb-4" onClick={() => navigate(-1)}>← Tilbake</button>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Meny</h1>
          <div className="flex justify-around mb-4">
            {/* Navigasjonsknapper for de ulike menyene */}
            <button className="text-xl font-semibold" onClick={() => navigate('/mat-meny')}>Mat</button>
            <button className="text-xl font-semibold" onClick={() => navigate('/drikke-meny')}>Drikke</button>
            <button className="text-xl font-semibold" onClick={() => navigate('/bar-meny')}>Bar</button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            {/* Innholdet i menyen kommer her */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
