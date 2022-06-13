const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case 'RESET':
      return state;
    // return {...state, active: false};
    case 'SET_PRICE_LEVELS':
      const availablePriceLevels = payload.prices;
      return { ...state, priceLevels: availablePriceLevels };
    case 'SET_RESERVE_FILTER':
      const reserveOptions = payload.options;
      return {
        ...state,
        reserveFilterOptions: reserveOptions,
      };
    case 'SET_TAG_FILTER':
      const tagOptions = payload.tags;
      return {
        ...state,
        tagFilterOptions: tagOptions,
      };
    case 'SET_DIET_FILTER':
      const dietOptions = payload.diets;
      return {
        ...state,
        dietFilterOptions: dietOptions,
      };
    case 'SET_FILTER_FIELDS':
      const fields = payload.fields;
      return {
        ...state,
        filterFields: fields,
      };
    default:
      throw new Error(`No case for ${type}`);
  }
};

export default filterReducer;
