import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CabinContext from '../components/CabinContext';

// Header-komponenten som viser logoen og kabin- eller bordnummeret
function Header() {
  const { cabinOrTable } = useContext(CabinContext);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="bg-[#c31230] p-4 flex justify-between items-center">
      <img
        src={`${process.env.PUBLIC_URL}/fjordline.png`}
        alt="Fjordline"
        className="h-16 cursor-pointer"
        onClick={handleLogoClick}
      />
      <span className="text-white">{cabinOrTable}</span>
    </header>
  );
}

export default Header;

