const mapReducer = (state, { type, payload }) => {
  switch (type) {
    case 'IS_UPDATING':
      return {
        status: {
          isLoading: true,
          isError: false,
          isSuccess: false,
          message: 'Updating map',
        },
        ...state,
      };
    //
    case 'IS_ERROR':
      const errorMessage = payload.message;
      return {
        status: {
          isLoading: false,
          isError: true,
          isSuccess: false,
          message: errorMessage,
        },
        ...state,
      };
    //
    case 'IS_LOADED':
      return {
        status: {
          isLoading: true,
          isError: false,
          isSuccess: false,
          message: 'Successfully updated map',
        },
        ...state,
      };
    //
    case 'SET_COORDINATES':
      const coords = payload.coordinates;
      return {
        coordinates: coords,
        ...state,
      };
    //
    case 'SET_BOUNDS':
      const updatedBounds = payload.bounds;
      return {
        bounds: updatedBounds,
        ...state,
      };
    //
    case 'SET_HOVERED_MARKER':
      const hovered = payload.hovered;
      return {
        hoveredMarker: hovered,
        ...state,
      };
    //
    default:
      throw new Error(`No case for ${type}`);
  }
};

export default mapReducer;
