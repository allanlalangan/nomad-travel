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

  const setCheckedOptions = useCallback((field, option, checked) => {
    dispatch({
      type: 'SET_CHECKED_OPTIONS',
      payload: { field, option, checked },
    });
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

  const setSelectedSubcategories = useCallback((subcategory, checked) => {
    dispatch({
      type: 'SET_SELECTED_SUBCATEGORIES',
      payload: { subcategory, checked },
    });
  }, []);

  const setSelectedCuisines = useCallback((cuisine, checked) => {
    dispatch({
      type: 'SET_SELECTED_CUISINES',
      payload: { cuisine, checked },
    });
  }, []);

  const setSelectedDiets = useCallback((diet, checked) => {
    dispatch({
      type: 'SET_SELECTED_DIETS',
      payload: { diet, checked },
    });
  }, []);

  const setSelectedOrderOptions = useCallback((option, checked) => {
    dispatch({
      type: 'SET_SELECTED_ORDER_OPTIONS',
      payload: { option, checked },
    });
  }, []);

  const setSelectedPrices = useCallback((price, checked) => {
    dispatch({
      type: 'SET_SELECTED_PRICES',
      payload: { price, checked },
    });
  }, []);

  const context = {
    active: state.active,
    minRating: state.minRating,
    selectedSubcategories: state.selectedSubcategories,
    selectedPrices: state.selectedPrices,
    selectedDiets: state.selectedDiets,
    selectedCuisines: state.selectedCuisines,
    selectedOrderOptions: state.selectedOrderOptions,
    filteredPlaces: state.filteredPlaces,
    filterFields: state.filterFields,
    setFilterActive,
    clearFilter,
    setCheckedOptions,
    setFilteredPlaces,
    setMinRating,
    setSelectedSubcategories,
    setSelectedCuisines,
    setSelectedDiets,
    setSelectedOrderOptions,
    setSelectedPrices,
    setFilterFields,
  };

  return (
    <FilterContext.Provider value={context}>{children}</FilterContext.Provider>
  );
};

export default FilterContextProvider;
