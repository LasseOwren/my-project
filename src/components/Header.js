import React, { useContext } from 'react';
import CabinContext from '../components/CabinContext';


// Header-komponenten som viser logoen og kabin- eller bordnummeret
function Header() {
  const { cabinOrTable } = useContext(CabinContext);

  return (
    <header className="bg-[#c31230] p-4 flex justify-between items-center">
      <img src={`${process.env.PUBLIC_URL}/fjordline.png`} alt="Fjordline" className="h-16" />
      <span className="text-white">{cabinOrTable}</span>
    </header>
  );
}

export default Header;
