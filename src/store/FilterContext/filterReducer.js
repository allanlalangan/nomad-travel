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
      return state;
    case 'SET_SELECTED_CUISINES':
      if (
        payload.checked &&
        !state.selectedCuisines.includes(payload.cuisine)
      ) {
        return {
          ...state,
          selectedCuisines: [...state.selectedCuisines, payload.cuisine],
        };
      } else if (
        !payload.checked &&
        state.selectedCuisines.includes(payload.cuisine)
      ) {
        const currentSelected = state.selectedCuisines;
        const updatedSelected = currentSelected.filter(
          (cuisine) => cuisine !== payload.cuisine
        );

        return {
          ...state,
          selectedCuisines: updatedSelected,
        };
      }
      return state;
    case 'SET_SELECTED_DIETS':
      if (payload.checked && !state.selectedDiets.includes(payload.diet)) {
        return {
          ...state,
          selectedDiets: [...state.selectedDiets, payload.diet],
        };
      } else if (
        !payload.checked &&
        state.selectedDiets.includes(payload.diet)
      ) {
        const currentSelected = state.selectedDiets;
        const updatedSelected = currentSelected.filter(
          (diet) => diet !== payload.diet
        );

        return {
          ...state,
          selectedDiets: updatedSelected,
        };
      }
      return state;
    case 'SET_SELECTED_ORDER_OPTIONS':
      if (
        payload.checked &&
        !state.selectedOrderOptions.includes(payload.option)
      ) {
        return {
          ...state,
          selectedOrderOptions: [...state.selectedOrderOptions, payload.option],
        };
      } else if (
        !payload.checked &&
        state.selectedOrderOptions.includes(payload.option)
      ) {
        const currentSelected = state.selectedOrderOptions;
        const updatedSelected = currentSelected.filter(
          (option) => option !== payload.option
        );

        return {
          ...state,
          selectedOrderOptions: updatedSelected,
        };
      }
      return state;
    case 'SET_SELECTED_PRICES':
      if (payload.checked && !state.selectedPrices.includes(payload.price)) {
        return {
          ...state,
          selectedPrices: [...state.selectedPrices, payload.price],
        };
      } else if (
        !payload.checked &&
        state.selectedPrices.includes(payload.price)
      ) {
        const currentSelected = state.selectedPrices;
        const updatedSelected = currentSelected.filter(
          (price) => price !== payload.price
        );

        return {
          ...state,
          selectedPrices: updatedSelected,
        };
      }
      return state;
    default:
      throw new Error(`No case for ${type}`);
  }
};

export default filterReducer;
