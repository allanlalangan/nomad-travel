// IMPORT
import axios from 'axios';

export const getPlaces = async (bounds, category, source) => {
  const config = {
    cancelToken: source.token,
    method: 'GET',
    url: `https://travel-advisor.p.rapidapi.com/${category}s/list-in-boundary`,
    params: {
      ...bounds,
      limit: '30',
      // currency: 'USD',
    },
    headers: {
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_TRAVEL_API_KEY,
    },
  };
  try {
    const {
      data: { data },
    } = await axios.get(config.url, config);
    const places = await data.filter((place) => place.name);
    return places;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('request cancelled');
    } else {
      console.log(error);
      throw new Error(error.message);
    }
  }
};
