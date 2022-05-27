const placesReducer = (state, { type, payload }) => {
  switch (type) {
    case 'IS_LOADING':
      return {
        ...state,
        status: {
          isLoading: true,
          isError: false,
          isSuccess: false,
          message: 'Fetching places',
        },
      };
    //
    case 'IS_ERROR':
      const message = payload.message;
      return {
        ...state,
        status: {
          isLoading: false,
          isError: true,
          isSuccess: false,
          message,
        },
      };
    //
    case 'IS_SUCCESS':
      const places = payload.places;
      return {
        ...state,
        status: {
          isLoading: false,
          isError: false,
          isSuccess: true,
          message: 'Successfully fetched places',
        },
        places,
      };
    //
    case 'SELECT_CATEGORY':
      // let category;
      // if (state.category !== payload.category) {
      //   category = payload.category;
      // } else {
      //   return state;
      // }

      return {
        ...state,
        category: payload.category,
      };
    //
    case 'SET_PLACE_CARD_REFS':
      const refs = payload.refs;
      return {
        ...state,
        placeCardRefs: refs,
      };
    //
    default:
      throw new Error(`No case for ${type}`);
  }
};

export default placesReducer;
