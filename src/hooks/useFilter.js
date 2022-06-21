import { useEffect, useContext } from 'react';
import { PlacesContext } from '../store/PlacesContext/PlacesContextProvider';
import { FilterContext } from '../store/FilterContext/FilterContextProvider';

// place: { rating: '4.5' }
// hotel / restaurant: { price_level: '$$' || '$-$$$' }
// hotel: { price: '$100' || '$100 - $150' }
// hotel: { subcategory_type: 'hotel' }
// attraction: { subcategory: [{key: '123', name: 'Sub Category'}] }
// restaurant: { subcategory: [{key: 'sub_category', name: 'Sub Category'}] }
// restaurant: { reserve_info: [{button_text: 'online || reserve', url: ' '}] }

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
        if (place.price_level?.length >= 1) {
          place.price_level.forEach((price) => {
            !priceOptions.includes(price) && priceOptions.push(price);
          });
        }
      });

      const priceRange = priceOptions.sort((a, b) => a.length - b.length);

      // push to options arrays and set FilterFields
      places.forEach((place) => {
        // withtransformed Data
        place.subcategory?.forEach((sub) => {
          !subCategoryOptions.includes(sub) && subCategoryOptions.push(sub);
        });

        if (place.cuisine?.length >= 1) {
          place.cuisine.forEach((cuisine) => [
            !cuisineOptions.includes(cuisine) && cuisineOptions.push(cuisine),
          ]);
        }

        place.dietary_restrictions?.forEach((diet) => {
          !dietOptions.includes(diet) && dietOptions.push(diet);
        });

        if (place.reserve_info) {
          !reservationOptions.includes(place.reserve_info.button_text) &&
            reservationOptions.push(place.reserve_info.button_text);
        }
      });

      const priceControls = priceRange.map((option) => ({
        name: option,
        selected: false,
      }));

      const reservationControls = reservationOptions.map((option) => ({
        name: option,
        selected: false,
      }));

      const subCategoryControls = subCategoryOptions.map((option) => ({
        name: option,
        selected: false,
      }));

      const dietControls = dietOptions.map((option) => ({
        name: option,
        selected: false,
      }));

      const cuisineControls = cuisineOptions.map((option) => ({
        name: option,
        selected: false,
      }));

      const fields = [
        {
          field: 'price_level',
          fieldLabel: 'Price',
          inputControls: priceControls,
        },
        {
          field: 'subcategory',
          fieldLabel: 'Sub-category',
          inputControls: subCategoryControls,
        },
        {
          field: 'reserve_info',
          fieldLabel: 'Reservations',
          inputControls: reservationControls,
        },
        {
          field: 'dietary_restrictions',
          fieldLabel: 'Dietary Restrictions',
          inputControls: dietControls,
        },
        {
          field: 'cuisine',
          fieldLabel: 'Cuisine',
          inputControls: cuisineControls,
        },
      ];

      setFilterFields(
        fields.filter((field) => field.inputControls.length >= 1)
      );
    }
  }, [category, places, setPriceMinMax, setFilterFields]);

  return {
    filterFields,
    priceMinMax,
  };
};

export default useFilter;
