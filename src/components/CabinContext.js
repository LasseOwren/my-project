import React, { createContext, useState } from 'react';

const CabinContext = createContext();

export const CabinProvider = ({ children }) => {
  const [cabinOrTable, setCabinOrTable] = useState('');

  return (
    <CabinContext.Provider value={{ cabinOrTable, setCabinOrTable }}>
      {children}
    </CabinContext.Provider>
  );
};

export default CabinContext;
