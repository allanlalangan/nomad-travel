// IMPORT
import axios from 'axios';

export const getPlaces = async (boundary, category) => {
  const config = {
    method: 'GET',
    url: `https://travel-advisor.p.rapidapi.com/${category}/list-in-boundary`,
    params: {
      bl_latitude: boundary.sw.lat,
      bl_longitude: boundary.sw.lng,
      tr_longitude: boundary.ne.lng,
      tr_latitude: boundary.ne.lat,
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
    return places;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
