import React, { createContext, useReducer, useCallback } from 'react';
import filterReducer from './filterReducer';

export const FilterContext = createContext();

const initState = {
  active: false,
  minRating: null,
  filterFields: null,
  filteredPlaces: [],
};

const FilterContextProvider = ({ children }) => {
  // useReducer
  const [state, dispatch] = useReducer(filterReducer, initState);

  const createFilterFields = useCallback((fields) => {
    dispatch({ type: 'CREATE_FILTER_FIELDS', payload: { fields } });
  }, []);

  const setFilteredPlaces = useCallback((places) => {
    dispatch({ type: 'SET_FILTERED_PLACES', payload: { places } });
  }, []);

  const clearFilter = useCallback(() => {
    dispatch({ type: 'CLEAR_FILTER' });
  }, []);

  const setMinRating = useCallback((rating) => {
    dispatch({ type: 'SET_MIN_RATING', payload: { rating } });
  }, []);

  const setCheckedOptions = useCallback((field, option, checked) => {
    dispatch({
      type: 'SET_CHECKED_OPTIONS',
      payload: { field, option, checked },
    });
    dispatch({ type: 'SET_FILTER_ACTIVE' });
  }, []);

  const context = {
    active: state.active,
    filterFields: state.filterFields,
    minRating: state.minRating,
    filteredPlaces: state.filteredPlaces,
    createFilterFields,
    clearFilter,
    setFilteredPlaces,
    setMinRating,
    setCheckedOptions,
  };

  return (
    <FilterContext.Provider value={context}>{children}</FilterContext.Provider>
  );
};

export default FilterContextProvider;
