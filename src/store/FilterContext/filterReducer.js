const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_TAGS':
      const availableTags = payload.tags;
      return {
        ...state,
        tags: availableTags,
      };
    case 'SET_DIETS':
      const availableDiets = payload.diets;
      return {
        ...state,
        diets: availableDiets,
      };
    default:
      throw new Error(`No case for ${type}`);
  }
};

export default filterReducer;
