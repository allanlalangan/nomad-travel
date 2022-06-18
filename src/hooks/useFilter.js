import { useEffect, useContext } from 'react';
import { PlacesContext } from '../store/PlacesContext/PlacesContextProvider';
import { FilterContext } from '../store/FilterContext/FilterContextProvider';

// place: { rating: '4.5' }
// hotel / restaurant: { price_level: '$$' || '$-$$$' }
// hotel: { price: '$100' || '$100 - $150' }
// attraction: { subcategory: [{key: '123', name: 'Sub Category'}] }
// restaurant: { subcategory: [{key: 'sub_category', name: 'Sub Category'}] }
// restaurant: { reserve_info: [{button_text: 'online || reserve', url: ' '}] }
// hotel: { subcategory_type: 'hotel' }

const useFilter = () => {
  const { category, places } = useContext(PlacesContext);
  const { priceMinMax, setPriceMinMax, filterFields, setFilterFields } =
    useContext(FilterContext);

  useEffect(() => {
    // if Places isSuccess
    if (places?.length >= 1) {
      const priceOptions = [];
      const cuisineOptions = [];
      const dietOptions = [];
      const reservationOptions = [];
      const subCategoryOptions = [];
      // loop Places and retrieve price(s)
      places.forEach((place) => {
        // if Place has price range, separate into two separate options
        // push price to PriceOptions, unless duplicate
        if (place.price_level?.includes('-')) {
          const placesPrices = place.price_level.split(' - ');
          placesPrices.forEach((price) => {
            !priceOptions.includes(price) && priceOptions.push(price);
          });
        } else if (
          !place.price_level?.includes('-') &&
          place.price_level !== ''
        ) {
          const placesPrices = [`${place.price_level}`];
          !priceOptions.includes(placesPrices[0]) &&
            priceOptions.push(placesPrices[0]);
        } else console.log(place);
      });
      // sorts PriceOptions array from lowest to highest and set state
      const priceRange = priceOptions.sort((a, b) => a.length - b.length);
      setPriceMinMax(priceRange);

      // push to options arrays and set FilterFields
      places.forEach((place) => {
        place.subcategory?.forEach((sub) => {
          !subCategoryOptions.includes(sub.name) &&
            subCategoryOptions.push(sub.name);
        });

        if (place.subcategory_type_label) {
          !subCategoryOptions.includes(place.subcategory_type_label) &&
            subCategoryOptions.push(place.subcategory_type_label);
        }
        place.cuisine?.forEach((cuisine) => {
          if (
            cuisine.name.toLowerCase().includes('bar') ||
            cuisine.name.toLowerCase().includes('pub') ||
            cuisine.name.toLowerCase().includes('diner') ||
            cuisine.name.toLowerCase().includes('house') ||
            cuisine.name.toLowerCase().includes('fast')
          ) {
            !subCategoryOptions.includes(cuisine.name) &&
              subCategoryOptions.push(cuisine.name);
          } else if (
            !cuisineOptions.includes(cuisine.name) &&
            !cuisine.name.toLowerCase().includes('vega') &&
            !cuisine.name.toLowerCase().includes('vege') &&
            !cuisine.name.toLowerCase().includes('cafe') &&
            !cuisine.name.toLowerCase().includes('glut')
          ) {
            cuisineOptions.push(cuisine.name);
          }
        });

        place.dietary_restrictions?.forEach((diet) => {
          !dietOptions.includes(diet.name) && dietOptions.push(diet.name);
        });

        if (place.reserve_info) {
          !reservationOptions.includes(place.reserve_info.button_text) &&
            reservationOptions.push(place.reserve_info.button_text);
        }
      });

      const fields = [
        { fieldLabel: 'Reservations', options: reservationOptions },
        { fieldLabel: 'Sub-category', options: subCategoryOptions },
        { fieldLabel: 'Dietary Restrictions', options: dietOptions },
        { fieldLabel: 'Cuisine', options: cuisineOptions },
      ];

      setFilterFields(fields.filter((field) => field.options.length >= 1));
    }
  }, [category, places, setPriceMinMax, setFilterFields]);

  return {
    filterFields,
    priceMinMax,
  };
};

export default useFilter;
