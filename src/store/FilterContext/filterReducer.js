const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_TAGS':
      const availableTags = payload.tags;
      return {
        tags: availableTags,
      };
    case 'SET_DIETS':
      const availableDiets = payload.diets;
      return {
        diets: availableDiets,
        ...state,
      };
    default:
      throw new Error(`No case for ${type}`);
  }
};

export default filterReducer;
