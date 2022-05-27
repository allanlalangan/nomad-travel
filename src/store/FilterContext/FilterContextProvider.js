import React, { createContext, useReducer } from 'react';
import filterReducer from './filterReducer';
export const FilterContext = createContext();

const initState = {
  tags: [],
  selectedTags: [],
  diets: [],
  selectedDiets: [],
};

const FilterContextProvider = ({ children }) => {
  // useReducer
  const [state, dispatch] = useReducer(filterReducer, initState);

  const setTags = (tags) => {
    dispatch({ type: 'SET_TAGS', payload: { tags } });
  };

  const setDiets = (diets) => {
    dispatch({ type: 'SET_DIETS', payload: { diets } });
  };

  const context = {
    tags: state.tags,
    diets: state.diets,
    setTags,
    setDiets,
  };

  return (
    <FilterContext.Provider value={context}>{children}</FilterContext.Provider>
  );
};

export default FilterContextProvider;
