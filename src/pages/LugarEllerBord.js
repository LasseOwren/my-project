import React from 'react';
import Header from '../components/Header';
import Background from '../components/Background'; // Import the Background component
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faUtensils, faReply } from '@fortawesome/free-solid-svg-icons'; // Import the icons

const LugarEllerBord = () => {
  const navigate = useNavigate();

  return (
    <Background image="fjordline3.jpg">
      <Header />
      <div className="relative flex-grow">
        <div className="absolute inset-0 bg-black opacity-65 z-0"></div> {/* Adjusted overlay opacity */}
        <div className="relative z-10 p-4 md:p-8 flex flex-col justify-start items-center pt-4 md:pt-8 lg:pt-10 xl:pt-12"> {/* Adjusted padding */}
          <FontAwesomeIcon
            icon={faReply}
            className="absolute left-0 top-0 m-4 cursor-pointer text-white"
            style={{ zIndex: 20 }}
            size="2x"
            onClick={() => navigate('/')} // Navigates to the home page when the icon is clicked
          />
          <div className="max-w-lg mx-auto bg-transparent p-6 text-white text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Hvor ønsker du å få maten levert?</h1>
            <hr className="border-t-2 border-gray-300 my-4" />
            <div className="w-full flex flex-row space-x-4 mt-6 md:mt-12"> {/* Added margin-top for spacing */}
              <button
                className="bg-yellow-500 text-black py-2 w-full rounded text-base hover:bg-yellow-600 flex items-center justify-center"
                onClick={() => navigate('/skriv-lugarnr')}
              >
                <FontAwesomeIcon icon={faBed} className="mr-2" /> Til lugar
              </button>
              <button
                className="bg-yellow-500 text-black py-2 w-full rounded text-base hover:bg-yellow-600 flex items-center justify-center"
                onClick={() => navigate('/skriv-bordnr')}
              >
                <FontAwesomeIcon icon={faUtensils} className="mr-2" /> Til bord
              </button>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default LugarEllerBord;
