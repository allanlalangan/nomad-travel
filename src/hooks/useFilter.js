import { useEffect, useContext } from 'react';
import { PlacesContext } from '../store/PlacesContext/PlacesContextProvider';
import { FilterContext } from '../store/FilterContext/FilterContextProvider';

const useFilter = () => {
  const { category, places } = useContext(PlacesContext);
  const {
    priceLevels,
    tagFilterOptions,
    dietFilterOptions,
    reserveFilterOptions,
    setPriceLevels,
    setTagFilter,
    setDietFilter,
    setReserveFilter,
  } = useContext(FilterContext);

  useEffect(() => {
    if (places && places.length >= 1) {
      const availablePrices = [];

      places.forEach((place) => {
        if (place.price_level) {
          if (place.price_level.includes('-')) {
            const placesPrices = place.price_level.split(' - ');
            placesPrices.forEach((price) => {
              !availablePrices.includes(price) && availablePrices.push(price);
            });
          } else if (place.price_level.length >= 1) {
            const placesPrices = [`${place.price_level}`];
            !availablePrices.includes(placesPrices[0]) &&
              availablePrices.push(placesPrices[0]);
          }
        }
      });

      const priceRange = availablePrices.sort((a, b) => a.length - b.length);
      setPriceLevels(priceRange);
    }
  }, [places, setPriceLevels]);

  useEffect(() => {
    if (category === 'restaurant' && places && places.length >= 1) {
      // consolidate all cuisines from Places
      const cuisinesData = [];
      const reservationData = [];
      places.forEach((place) => {
        place.cuisine?.forEach((cuisine) => {
          !cuisinesData.includes(cuisine.name) &&
            cuisinesData.push(cuisine.name);
        });

        if (place.reserve_info) {
          console.log(place.reserve_info.button_text);
          !reservationData.includes(place.reserve_info.button_text) &&
            reservationData.push(place.reserve_info.button_text);
        }
      });

      // remove duplicates and create filter tags
      const createFilters = () => {
        const cuisines = cuisinesData.filter(
          (cuisine) =>
            !cuisine.toLowerCase().includes('vegan') &&
            !cuisine.toLowerCase().includes('vegetarian') &&
            !cuisine.toLowerCase().includes('gluten')
        );

        const diets = cuisinesData.filter(
          (cuisine) =>
            cuisine.toLowerCase().includes('vegan') ||
            cuisine.toLowerCase().includes('vegetarian') ||
            cuisine.toLowerCase().includes('gluten')
        );

        // update FilterContext state
        setTagFilter(cuisines);
        setDietFilter(diets);
        setReserveFilter(reservationData);
      };

      createFilters();
    } else if (
      category === 'hotel' ||
      (category === 'attraction' && places && places.length >= 1)
    ) {
      setTagFilter([]);
      setDietFilter([]);
      setReserveFilter([]);
    }
  }, [category, setTagFilter, setDietFilter, setReserveFilter, places]);

  return {
    tagFilterOptions,
    dietFilterOptions,
    reserveFilterOptions,
    priceLevels,
  };
};

export default useFilter;
