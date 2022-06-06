import React, { createContext, useReducer, useCallback } from 'react';
import filterReducer from './filterReducer';

export const FilterContext = createContext();

const initState = {
  rating: null,
  pricesLevels: null,
  tags: [],
  diets: [],
};

const FilterContextProvider = ({ children }) => {
  // useReducer
  const [state, dispatch] = useReducer(filterReducer, initState);

  const setTags = useCallback((tags) => {
    dispatch({ type: 'SET_TAGS', payload: { tags } });
  }, []);

  const setDiets = useCallback((diets) => {
    dispatch({ type: 'SET_DIETS', payload: { diets } });
  }, []);

  const setPriceLevels = useCallback((prices) => {
    dispatch({ type: 'SET_PRICE_LEVELS', payload: { prices } });
  }, []);

  const context = {
    tags: state.tags,
    diets: state.diets,
    priceLevels: state.priceLevels,
    setTags,
    setDiets,
    setPriceLevels,
  };

  return (
    <FilterContext.Provider value={context}>{children}</FilterContext.Provider>
  );
};

export default FilterContextProvider;
