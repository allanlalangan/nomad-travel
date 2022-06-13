import React, { createContext, useReducer, useCallback } from 'react';
import filterReducer from './filterReducer';

export const FilterContext = createContext();

const initState = {
  active: false,
  ratingFilter: null,
  pricesLevels: null,
  filterFields: null,
  reserveFilter: null,
  tagFilterOptions: [],
  dietFilterOptions: [],
  reserveFilterOptions: [],
};

const FilterContextProvider = ({ children }) => {
  // useReducer
  const [state, dispatch] = useReducer(filterReducer, initState);

  const resetFilter = useCallback(() => {
    dispatch({ type: 'RESET' });
  }, []);

  const setPriceLevels = useCallback((prices) => {
    dispatch({ type: 'SET_PRICE_LEVELS', payload: { prices } });
  }, []);

  const setFilterFields = useCallback((fields) => {
    dispatch({ type: 'SET_FILTER_FIELDS', payload: { fields } });
  }, []);

  const context = {
    active: state.active,
    ratingFilter: state.ratingFilter,
    priceLevels: state.priceLevels,
    filterFields: state.filterFields,
    setPriceLevels,
    setFilterFields,
    resetFilter,
  };

  return (
    <FilterContext.Provider value={context}>{children}</FilterContext.Provider>
  );
};

export default FilterContextProvider;
