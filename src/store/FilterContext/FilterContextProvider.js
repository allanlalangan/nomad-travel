import React, { createContext, useReducer, useCallback } from 'react';
import filterReducer from './filterReducer';

export const FilterContext = createContext();

const initState = {
  active: false,
  ratingFilter: null,
  pricesLevels: null,
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

  const setTagFilter = useCallback((tags) => {
    dispatch({ type: 'SET_TAG_FILTER', payload: { tags } });
  }, []);

  const setDietFilter = useCallback((diets) => {
    dispatch({ type: 'SET_DIET_FILTER', payload: { diets } });
  }, []);

  const setPriceLevels = useCallback((prices) => {
    dispatch({ type: 'SET_PRICE_LEVELS', payload: { prices } });
  }, []);

  const setReserveFilter = useCallback((options) => {
    dispatch({ type: 'SET_RESERVE_FILTER', payload: { options } });
  }, []);

  const context = {
    active: state.active,
    ratingFilter: state.ratingFilter,
    priceLevels: state.priceLevels,
    reserveFilter: state.reserveFilter,
    tagFilterOptions: state.tagFilterOptions,
    dietFilterOptions: state.dietFilterOptions,
    reserveFilterOptions: state.reserveFilterOptions,
    setTagFilter,
    setDietFilter,
    setPriceLevels,
    setReserveFilter,
  };

  return (
    <FilterContext.Provider value={context}>{children}</FilterContext.Provider>
  );
};

export default FilterContextProvider;
