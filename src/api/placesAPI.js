// IMPORT
import axios from 'axios';

export const getPlaces = async (bounds, category) => {
  const config = {
    method: 'GET',
    url: `https://travel-advisor.p.rapidapi.com/${category}s/list-in-boundary`,
    params: {
      ...bounds,
      limit: '15',
      currency: 'USD',
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
    // .filter((place) => place.address_obj);
    return places;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
