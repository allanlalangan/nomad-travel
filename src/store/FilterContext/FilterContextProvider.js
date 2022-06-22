import React, { createContext, useReducer, useCallback } from 'react';
import filterReducer from './filterReducer';

export const FilterContext = createContext();

const initState = {
  active: false,
  selectedSubcategories: [],
  selectedCuisines: [],
  selectedDiets: [],
  filterFields: null,
  filteredPlaces: [],
  minRating: null,
  priceMinMax: [1, 4],
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

  const setSelectedOption = useCallback((field, param) => {
    dispatch({ type: 'SET_SELECTED_OPTION', payload: { field, param } });
  }, []);
  const setSelectedSubcategories = useCallback((subcategory, checked) => {
    dispatch({
      type: 'SET_SELECTED_SUBCATEGORIES',
      payload: { subcategory, checked },
    });
  }, []);

  const context = {
    active: state.active,
    selectedSubcategories: state.selectedSubcategories,
    selectedCuisines: state.selectedCuisines,
    selectedDiets: state.selectedDiets,
    filteredPlaces: state.filteredPlaces,
    minRating: state.minRating,
    priceMinMax: state.priceMinMax,
    filterFields: state.filterFields,
    setMinRating,
    setPriceMinMax,
    setSelectedSubcategories,
    setFilterFields,
    setSelectedOption,
    resetFilter,
  };

  return (
    <FilterContext.Provider value={context}>{children}</FilterContext.Provider>
  );
};

export default FilterContextProvider;
