import React, { createContext, useReducer, useCallback } from 'react';
import filterReducer from './filterReducer';

export const FilterContext = createContext();

const initState = {
  active: false,
  minRating: null,
  priceMinMax: [1, 4],
  filterFields: null,
};

const FilterContextProvider = ({ children }) => {
  // useReducer
  const [state, dispatch] = useReducer(filterReducer, initState);

  const resetFilter = useCallback(() => {
    dispatch({ type: 'RESET' });
  }, []);

  const setMinRating = useCallback((rating) => {
    dispatch({ type: 'SET_MIN_RATING', payload: { rating } });
  }, []);

  const setPriceMinMax = useCallback((minMax) => {
    dispatch({ type: 'SET_PRICE_MIN_MAX', payload: { minMax } });
  }, []);

  const setFilterFields = useCallback((fields) => {
    dispatch({ type: 'SET_FILTER_FIELDS', payload: { fields } });
  }, []);

  const context = {
    active: state.active,
    minRating: state.minRating,
    priceMinMax: state.priceMinMax,
    filterFields: state.filterFields,
    setMinRating,
    setPriceMinMax,
    setFilterFields,
    resetFilter,
  };

  return (
    <FilterContext.Provider value={context}>{children}</FilterContext.Provider>
  );
};

export default FilterContextProvider;
