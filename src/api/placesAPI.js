// IMPORT
import axios from 'axios';

const url =
  'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlaces = async (boundary) => {
  const options = {
    method: 'GET',
    url,
    params: boundary,
    headers: {
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_TRAVEL_API_KEY,
    },
  };

  try {
    const {
      data: { data },
    } = await axios.get(url, options);

    return data;
  } catch (error) {
    console.log(error);
  }
};
