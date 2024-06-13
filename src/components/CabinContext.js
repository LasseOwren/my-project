import React, { createContext, useState } from 'react';

// Oppretter konteksten for å dele kabin- eller bordnummer
const CabinContext = createContext();

// Oppretter en provider for konteksten
export const CabinProvider = ({ children }) => {
  const [cabinOrTable, setCabinOrTable] = useState('');

  const resetCabinOrTable = () => {
    setCabinOrTable('');
  };

  return (
    <CabinContext.Provider value={{ cabinOrTable, setCabinOrTable, resetCabinOrTable }}>
      {children}
    </CabinContext.Provider>
  );
};

export default CabinContext;
