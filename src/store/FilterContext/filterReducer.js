const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_FILTER_FIELDS':
      const fields = payload.fields;
      return {
        ...state,
        filterFields: fields,
      };
    case 'SET_FILTER_ACTIVE':
      const activeFilters = state.filterFields.map((field) => {
        return {
          field: field.field,
          active: field.options.filter((opt) => opt.checked),
        };
      });

      console.log(activeFilters);
      return state;
    // }
    case 'CLEAR_FILTER':
      const clearedFields = state.filterFields.map((field) => {
        return {
          ...field,
          options: field.options.map((option) => ({
            value: option.value,
            checked: false,
          })),
        };
      });
      if (state.active) {
        return {
          ...state,
          filterFields: clearedFields,
          filteredPlaces: [],
          active: false,
        };
      } else {
        return {
          ...state,
          filterFields: clearedFields,
        };
      }
    case 'SET_FILTERED_PLACES':
      return { ...state, filteredPlaces: payload.places };
    case 'SET_CHECKED_OPTIONS':
      const newFields = state.filterFields.map((field) => {
        if (field.field === payload.field.field) {
          return {
            field: field.field,
            label: field.label,
            options: field.options.map((option) => {
              if (payload.option === option.value) {
                return { value: payload.option, checked: payload.checked };
              } else {
                return option;
              }
            }),
          };
        } else return field;
      });

      return {
        ...state,
        filterFields: newFields,
      };
    case 'SET_MIN_RATING':
      const rating = payload.rating;
      return { ...state, minRating: rating };
    default:
      throw new Error(`No case for ${type}`);
  }
};

export default filterReducer;
