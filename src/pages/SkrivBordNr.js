import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import Background from '../components/Background'; // Import the Background component
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import CabinContext from '../components/CabinContext';


// Component for entering table number
const SkrivBordNr = () => {
  const [bordNr, setBordNr] = useState(''); // State to manage the table number input
  const { setCabinOrTable } = useContext(CabinContext); // Get function to set cabin or table context
  const navigate = useNavigate();


  // Function to handle navigation to menu page
  const handleNext = () => {
    setCabinOrTable(`Bord ${bordNr}`);
    navigate('/menu');
  };

  return (
    <Background image="fjordline3.jpg">
      <Header />
      <div className="relative flex-grow">
        <div className="absolute inset-0 bg-black opacity-65 z-0"></div> 
        <div className="relative z-10 p-4 md:p-8 flex flex-col justify-start items-center pt-4 md:pt-8 lg:pt-10 xl:pt-12"> 
          <FontAwesomeIcon
            icon={faReply}
            className="absolute left-0 top-0 m-4 cursor-pointer text-white"
            style={{ zIndex: 20 }}
            size="2x"
            onClick={() => navigate('/')}
          />
          <div className="max-w-lg mx-auto bg-transparent p-6 text-white text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Skriv ditt bordnummer...</h1>
            <input
              type="text"
              placeholder="Skriv ditt bordnummer..."
              className="p-2 mb-4 border rounded w-full text-black"
              value={bordNr}
              onChange={(e) => setBordNr(e.target.value)}
            />
            <button
              className="bg-yellow-500 text-black py-2 w-full rounded text-base hover:bg-yellow-600 flex items-center justify-center"
              onClick={handleNext}
            >
              Videre til meny
            </button>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default SkrivBordNr;
