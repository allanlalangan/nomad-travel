import { useState, useEffect, useCallback } from 'react';

const useFilter = (places, active, setActive, setFilteredPlaces) => {
  const [fields, setFields] = useState(null);
  useEffect(() => {
    if (places?.length >= 1) {
      const priceOptions = [];
      const cuisineOptions = [];
      const dietOptions = [];
      const reservationOptions = [];
      const subCategoryOptions = [];

      places.forEach((place) => {
        if (place.price_level?.length >= 1) {
          place.price_level.forEach((price) => {
            !priceOptions.includes(price) && priceOptions.push(price);
          });
        }
      });

      const priceRange = priceOptions.sort((a, b) => a.length - b.length);

      places.forEach((place) => {
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
      const dietsField = fields.find(
        (field) => field.field === 'dietary_restrictions'
      );
      const priceField = fields.find((field) => field.field === 'price_level');
      const subcategoryField = fields.find(
        (field) => field.field === 'subcategory'
      );
      const orderField = fields.find((field) => field.field === 'reserve_info');
      const cuisineField = fields.find((field) => field.field === 'cuisine');

      if (priceField?.selected.length >= 1) {
        priceField.selected.forEach((price) => {
          places.forEach((place) => {
            if (
              !pendingPlaces.includes(place) &&
              place.price_level?.includes(price)
            ) {
              pendingPlaces.push(place);
            }
          });
        });
      }

      if (cuisineField?.selected.length >= 1) {
        cuisineField.selected.forEach((cuisine) => {
          places.forEach((place) => {
            if (
              !pendingPlaces.includes(place) &&
              place.cuisine?.includes(cuisine)
            ) {
              pendingPlaces.push(place);
            }
          });
        });
      }

      if (subcategoryField?.selected.length >= 1) {
        subcategoryField.selected.forEach((subcategory) => {
          places.forEach((place) => {
            if (
              !pendingPlaces.includes(place) &&
              place.subcategory?.includes(subcategory)
            ) {
              pendingPlaces.push(place);
            }
          });
        });
      }

      if (orderField?.selected.length >= 1) {
        orderField.selected.forEach((option) => {
          places.forEach((place) => {
            if (
              !pendingPlaces.includes(place) &&
              place.reserve_info?.button_text?.includes(option)
            ) {
              pendingPlaces.push(place);
            }
          });
        });
      }

      if (dietsField?.selected.length >= 1) {
        dietsField.selected.forEach((diet) => {
          places.forEach((place) => {
            if (
              !pendingPlaces.includes(place) &&
              place.dietary_restrictions?.includes(diet)
            ) {
              pendingPlaces.push(place);
            }
          });
        });
      }

      setFilteredPlaces(pendingPlaces);
    }
  }, [active, setFilteredPlaces, fields, places]);

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

  return { fields, setFields, clearFilter, setCheckedOptions };
};

export default useFilter;
