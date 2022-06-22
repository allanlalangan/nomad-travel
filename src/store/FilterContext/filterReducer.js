const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case 'RESET':
      return state;
    // return {...state, active: false};
    case 'SET_PRICE_MIN_MAX':
      const minMax = payload.minMax;
      return { ...state, priceMinMax: minMax };
    case 'SET_MIN_RATING':
      const rating = payload.rating;
      return { ...state, minRating: rating };
    case 'SET_FILTER_FIELDS':
      const fields = payload.fields;
      return {
        ...state,
        filterFields: fields,
      };
    case 'SET_SELECTED_OPTION':
      console.log(payload.field);
      return state;
    case 'SET_SELECTED_SUBCATEGORIES':
      if (
        payload.checked &&
        !state.selectedSubcategories.includes(payload.subcategory)
      ) {
        return {
          ...state,
          selectedSubcategories: [
            ...state.selectedSubcategories,
            payload.subcategory,
          ],
        };
      } else if (
        !payload.checked &&
        state.selectedSubcategories.includes(payload.subcategory)
      ) {
        const currentSelected = state.selectedSubcategories;
        const updatedSelected = currentSelected.filter(
          (sub) => sub !== payload.subcategory
        );

        return {
          ...state,
          selectedSubcategories: updatedSelected,
        };
      }
      // if(!state.selectedSubcategories.includes(payload.subcategory)) {
      //   newSubcategories.push(payload.subcategory)
      // }
      return state;
    default:
      throw new Error(`No case for ${type}`);
  }
};

export default filterReducer;
