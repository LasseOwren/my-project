import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Background from '../components/Background';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Background image="fjordline3.jpg">
      <Header />
      <div className="relative flex-grow">
        <div className="absolute inset-0 bg-black opacity-65 z-0"></div> {/* Increased opacity */}
        <div className="relative z-10 p-4 md:p-8 flex flex-col justify-start items-center pt-4 md:pt-8 lg:pt-10 xl:pt-12"> {/* Adjusted padding */}
          <div className="max-w-lg mx-auto bg-transparent p-6 text-white text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Velkommen til Fjordline</h1>
            <hr className="border-t-2 border-gray-300 my-4" />
            <p className="mb-6">
              For å gjøre reisen din enda mer avslappende, har vi laget et utvalg av mat, drikkevarer og taxfree-varer tilgjengelig for levering i lugaren, levering til bordet eller for henting!
            </p>
            <div className="w-full flex flex-row space-x-4">
              <button
                className="bg-yellow-500 text-black py-2 w-full rounded text-base hover:bg-yellow-600 flex items-center justify-center"
                onClick={() => navigate('/menu')}
              >
                <i className="fas fa-utensils mr-2"></i>Pickup
              </button>
              <button
                className="bg-yellow-500 text-black py-2 w-full rounded text-base hover:bg-yellow-600 flex items-center justify-center"
                onClick={() => navigate('/lugar-eller-bord')}
              >
                <i className="fas fa-shopping-bag mr-2"></i>Levering
              </button>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default Home;

