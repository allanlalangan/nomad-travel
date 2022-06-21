// IMPORT
import axios from 'axios';

const transformPriceLevels = (priceString) => {
  const priceLevels = [];

  if (priceString.includes('-')) {
    const placesPrices = priceString.split('-');
    placesPrices.forEach((price) => {
      priceLevels.push(price.trim());
    });
  }

  if (!priceString.includes('-') && priceString !== '') {
    priceLevels.push(priceString);
  }

  return priceLevels;
};

const transformSubCategories = (cuisine, place) => {
  const subCategories = [];

  if (cuisine) {
    const restaurantSubCategories = cuisine
      .filter(
        (cuisine) =>
          cuisine.name.toLowerCase().includes('bar') ||
          cuisine.name.toLowerCase().includes('pub') ||
          cuisine.name.toLowerCase().includes('diner') ||
          cuisine.name.toLowerCase().includes('house') ||
          cuisine.name.toLowerCase().includes('fast')
      )
      .map((sub) => sub.name.trim());

    subCategories.push(...restaurantSubCategories);
  }

  if (place.subcategory_type) {
    subCategories.push(place.subcategory_type_label);
  }

  if (place.subcategory) {
    subCategories.push(...place.subcategory.map((sub) => sub.name));
  }

  return subCategories;
};

const transformCuisines = (cuisineData) => {
  const cuisines = cuisineData
    .filter(
      (cuisine) =>
        !cuisine.name.toLowerCase().includes('vega') &&
        !cuisine.name.toLowerCase().includes('vege') &&
        !cuisine.name.toLowerCase().includes('glut') &&
        !cuisine.name.toLowerCase().includes('kosh') &&
        !cuisine.name.toLowerCase().includes('cafe') &&
        !cuisine.name.toLowerCase().includes('bar') &&
        !cuisine.name.toLowerCase().includes('pub') &&
        !cuisine.name.toLowerCase().includes('diner') &&
        !cuisine.name.toLowerCase().includes('house') &&
        !cuisine.name.toLowerCase().includes('fast')
    )
    .map((cuisine) => cuisine.name);

  return cuisines;
};

export const getPlaces = async (bounds, category, source) => {
  const config = {
    cancelToken: source.token,
    method: 'GET',
    url: `https://travel-advisor.p.rapidapi.com/${category}s/list-in-boundary`,
    params: {
      ...bounds,
      limit: '30',
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

    const transformedData = await places.map((place) => ({
      ...place,
      name: place.name,
      // rating: Number(place.rating),
      price_level: place.price_level
        ? transformPriceLevels(place.price_level)
        : null,

      dietary_restrictions:
        place.dietary_restrictions?.map((diet) => diet.name) || null,

      cuisine: place.cuisine ? transformCuisines(place.cuisine) : null,
      subcategory: transformSubCategories(place.cuisine, place),
    }));

    return transformedData;

    // return places;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Reinitializing request');
    } else {
      console.log(error);
      throw new Error(error.message);
    }
  }
};
