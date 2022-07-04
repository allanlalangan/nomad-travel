import { useState, useEffect, useContext, useCallback } from 'react';
import { PlacesContext } from '../store/PlacesContext/PlacesContextProvider';
import { FilterContext } from '../store/FilterContext/FilterContextProvider';

// place: { rating: '4.5' }
// hotel / restaurant: { price_level: '$$' || '$-$$$' }
// hotel: { price: '$100' || '$100 - $150' }
// hotel: { subcategory_type: 'hotel' }
// attraction: { subcategory: [{key: '123', name: 'Sub Category'}] }
// restaurant: { subcategory: [{key: 'sub_category', name: 'Sub Category'}] }
// restaurant: { reserve_info: {button_text: 'online || reserve', url: ' '} }

const useFilter = (places, active, setActive) => {
  const [fields, setFields] = useState(null);
  const [filteredPlaces, setFilteredPlaces] = useState(null);
  // const {  places } = useContext(PlacesContext);
  // create filterFields
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

      const priceValues = priceRange.map((option) => ({
        value: option,
        checked: false,
      }));

      const reservationValues = reservationOptions.map((option) => ({
        value: option,
        checked: false,
      }));

      const subCategoryValues = subCategoryOptions.map((option) => ({
        value: option,
        checked: false,
      }));

      const dietValues = dietOptions.map((option) => ({
        value: option,
        checked: false,
      }));

      const cuisineValues = cuisineOptions.map((option) => ({
        value: option,
        checked: false,
      }));

      const fields = [
        {
          field: 'price_level',
          label: 'Price',
          options: priceValues,
          selected: [],
        },
        {
          field: 'dietary_restrictions',
          label: 'Dietary Restrictions',
          options: dietValues,
          selected: [],
        },
        {
          field: 'subcategory',
          label: 'Sub-category',
          options: subCategoryValues,
          selected: [],
        },
        {
          field: 'reserve_info',
          label: 'Reservations',
          options: reservationValues,
          selected: [],
        },
        {
          field: 'cuisine',
          label: 'Cuisine',
          options: cuisineValues,
          selected: [],
        },
      ];

      setFields(fields.filter((field) => field.options.length >= 1));
    }
  }, [places, setFields]);

  useEffect(() => {
    if (active) {
      const pendingPlaces = [];
      const priorityPendingPlaces = [];

      const lowPriorityFields = fields.filter(
        (field) => !field.field.includes('dietary')
      );
      const dietsField = fields.find(
        (field) => field.field === 'dietary_restrictions'
      );
      console.log(lowPriorityFields);
      console.log(dietsField);

      lowPriorityFields.forEach((field) => {
        if (field.selected.length >= 1) {
          field.selected.forEach((option) => {
            places.forEach((place) => {
              if (field.field.includes('reserve')) {
                !pendingPlaces.includes(place) &&
                  place.reserve_info?.button_text.includes(option) &&
                  pendingPlaces.push(place);
              } else {
                !pendingPlaces.includes(place) &&
                  place[field.field].includes(option) &&
                  pendingPlaces.push(place);
              }
            });
          });
        }
      });

      if (dietsField?.selected.length >= 1) {
        dietsField.selected.forEach((diet) => {
          pendingPlaces.forEach((place) => {
            if (
              !priorityPendingPlaces.includes(place) &&
              place.dietary_restrictions?.includes(diet)
            ) {
              priorityPendingPlaces.push(place);
            }
          });
        });
        console.log(priorityPendingPlaces);
      } else {
        console.log(pendingPlaces);
      }
    }
  }, [active, fields, places]);

  const clearFilter = useCallback(
    (currentFields) => {
      const uncheckedFields = currentFields?.map((field) => {
        return {
          ...field,
          options: field.options.map((option) => ({
            value: option.value,
            checked: false,
          })),
          selected: [],
        };
      });
      setFields(uncheckedFields || null);
      active && setActive(false);
    },
    [active, setActive]
  );

  const setCheckedOptions = useCallback(
    (selectedField, selectedValue, checked) => {
      const newFields = fields?.map((field) => {
        if (field.field === selectedField.field) {
          return {
            ...field,
            options: field.options.map((option) => {
              if (selectedValue === option.value) {
                return { value: selectedValue, checked: checked };
              } else {
                return option;
              }
            }),
          };
        } else return field;
      });

      const activeFilterFields = newFields?.map((field) => {
        return {
          ...field,
          selected: field.options
            .filter((opt) => opt.checked)
            .map((opt) => opt.value),
        };
      });

      const isFilterActive = activeFilterFields.some(
        (field) => field.selected.length >= 1
      );

      setFields(activeFilterFields);
      active !== isFilterActive && setActive(isFilterActive);
    },
    [active, setActive, setFields, fields]
  );

  return { fields, setFields, filteredPlaces, clearFilter, setCheckedOptions };
};

export default useFilter;
