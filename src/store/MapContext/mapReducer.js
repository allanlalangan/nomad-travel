const mapReducer = (state, { type, payload }) => {
  switch (type) {
    case 'IS_UPDATING':
      return {
        ...state,
        status: {
          isLoading: true,
          isError: false,
          isSuccess: false,
          message: 'Updating map',
        },
      };
    //
    case 'IS_ERROR':
      const errorMessage = payload.message;
      return {
        ...state,
        status: {
          isLoading: false,
          isError: true,
          isSuccess: false,
          message: errorMessage,
        },
      };
    //
    case 'IS_LOADED':
      return {
        ...state,
        status: {
          isLoading: true,
          isError: false,
          isSuccess: false,
          message: 'Successfully updated map',
        },
      };
    //
    case 'SET_COORDINATES':
      const coords = payload.coordinates;
      return {
        ...state,
        coordinates: coords,
      };
    //
    case 'SET_BOUNDS':
      const updatedBounds = payload.bounds;
      return {
        ...state,
        bounds: updatedBounds,
      };
    //
    case 'SET_HOVERED_MARKER':
      const hovered = payload.hovered;
      return {
        ...state,
        hoveredMarker: hovered,
      };
    //
    default:
      throw new Error(`No case for ${type}`);
  }
};

export default mapReducer;
