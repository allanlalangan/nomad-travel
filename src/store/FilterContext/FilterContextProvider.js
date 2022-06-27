import React, { createContext, useReducer, useCallback } from 'react';
import filterReducer from './filterReducer';

export const FilterContext = createContext();

const initState = {
  active: false,
  status: { active: false, pending: false },
  minRating: null,
  priceMinMax: [1, 4],
  selectedSubcategories: [],
  selectedPrices: [],
  selectedOrderOptions: [],
  selectedDiets: [],
  selectedCuisines: [],
  filterFields: null,
  filteredPlaces: [],
};

const FilterContextProvider = ({ children }) => {
  // useReducer
  const [state, dispatch] = useReducer(filterReducer, initState);

  const setFilterFields = useCallback((fields) => {
    dispatch({ type: 'SET_FILTER_FIELDS', payload: { fields } });
  }, []);

  const setFilteredPlaces = useCallback((places) => {
    dispatch({ type: 'SET_FILTERED_PLACES', payload: { places } });
  }, []);

  const setFilterActive = useCallback(() => {
    dispatch({ type: 'SET_FILTER_ACTIVE' });
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
  }, []);

  const context = {
    active: state.active,
    filterFields: state.filterFields,
    minRating: state.minRating,
    filteredPlaces: state.filteredPlaces,
    setFilterFields,
    setFilterActive,
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
