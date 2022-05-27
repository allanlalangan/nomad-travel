const placesReducer = (state, { type, payload }) => {
  switch (type) {
    case 'IS_LOADING':
      return {
        status: {
          isLoading: true,
          isError: false,
          isSuccess: false,
          message: 'Fetching places',
        },
        ...state,
      };
    //
    case 'IS_ERROR':
      const message = payload.message;
      return {
        status: {
          isLoading: false,
          isError: true,
          isSuccess: false,
          message,
        },
        ...state,
      };
    //
    case 'IS_SUCCESS':
      const places = payload.places;
      return {
        status: {
          isLoading: false,
          isError: false,
          isSuccess: true,
          message: 'Successfully fetched places',
        },
        places,
        ...state,
      };
    //
    case 'SELECT_CATEGORY':
      let category;
      if (state.category !== payload.category) {
        category = payload.category;
      } else {
        return state;
      }
      return {
        category,
        ...state,
      };
    //
    case 'SET_PLACE_CARD_REFS':
      const refs = payload.refs;
      return {
        placeCardRefs: refs,
        ...state,
      };
    //
    default:
      throw new Error(`No case for ${type}`);
  }
};

export default placesReducer;
