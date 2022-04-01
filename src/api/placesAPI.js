// IMPORT
import axios from 'axios';

const url =
  'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlaces = async (boundary, filter) => {
  const config = {
    method: 'GET',
    url: `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`,
    params: boundary,
    headers: {
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_TRAVEL_API_KEY,
    },
  };

  try {
    const {
      data: { data },
    } = await axios.get(url, config);
    const places = await data.filter((place) => place.name);
    return places;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

// export const getHotels = async (boundary) => {
//   const config = {
//     method: 'GET',
//     url: 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary',
//     params: boundary,
//     headers: {
//       'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
//       'X-RapidAPI-Key': process.env.REACT_APP_TRAVEL_API_KEY,
//     },
//   };

//   try {
//     const {
//       data: { data },
//     } = await axios.get(url, config);
//     const hotels = await data.filter((place) => place.name);
//     return hotels;
//   } catch (error) {
//     console.log(error);
//     throw new Error(error.message);
//   }
// };
// export const getAttractions = async (boundary) => {
//   const config = {
//     method: 'GET',
//     url: 'https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary',
//     params: boundary,
//     headers: {
//       'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
//       'X-RapidAPI-Key': process.env.REACT_APP_TRAVEL_API_KEY,
//     },
//   };

//   try {
//     const {
//       data: { data },
//     } = await axios.get(url, config);
//     const attractions = await data.filter((place) => place.name);
//     return attractions;
//   } catch (error) {
//     console.log(error);
//     throw new Error(error.message);
//   }
// };
