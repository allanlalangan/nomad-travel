const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_FILTER_FIELDS':
      const fields = payload.fields;
      return {
        ...state,
        filterFields: fields,
      };
    case 'SET_FILTER_ACTIVE':
      const activeFilterFields = state.filterFields.map((field) => {
        return {
          ...field,
          selected: field.options
            .filter((opt) => opt.checked)
            .map((opt) => opt.value),
        };
      });

      const active = activeFilterFields.some(
        (field) => field.selected.length >= 1
      );

      return {
        ...state,
        active,
        filterFields: activeFilterFields,
      };
    case 'CLEAR_FILTER':
      const clearedFields = state.filterFields.map((field) => {
        return {
          ...field,
          options: field.options.map((option) => ({
            value: option.value,
            checked: false,
          })),
          selected: [],
        };
      });

      return {
        ...state,
        active: false,
        filterFields: clearedFields,
      };
    case 'SET_FILTERED_PLACES':
      return { ...state, filteredPlaces: payload.places };
    case 'SET_CHECKED_OPTIONS':
      const newFields = state.filterFields.map((field) => {
        if (field.field === payload.field.field) {
          return {
            ...field,
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
