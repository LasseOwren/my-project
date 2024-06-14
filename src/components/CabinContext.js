import React, { createContext, useState } from 'react';

// The CartBanner component displays a banner with cart information and a link to the cart page.
const CabinContext = createContext();

// Creates a provider for the context
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
