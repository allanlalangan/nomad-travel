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
  const [chips, setChips] = useState([]);
  const [diets, setDiets] = useState([]);
  // global Places state
  const context = {
    status,
    chips,
    diets,
    setChips,
    setDiets,
    reset: () => {
      setStatus(initStatus);
    },
  };

  return (
    <FilterContext.Provider value={context}>{children}</FilterContext.Provider>
  );
};

export default FilterContextProvider;
