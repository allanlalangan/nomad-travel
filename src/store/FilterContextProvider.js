import React, { createContext, useState } from 'react';

export const FilterContext = createContext({});

const FilterContextProvider = ({ children }) => {
  const initStatus = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
  };
  // states
  const [status, setStatus] = useState(initStatus);
  // global Places state
  const context = {
    status,
    reset: () => {
      setStatus(initStatus);
    },
  };

  return (
    <FilterContext.Provider value={context}>{children}</FilterContext.Provider>
  );
};

export default FilterContextProvider;
