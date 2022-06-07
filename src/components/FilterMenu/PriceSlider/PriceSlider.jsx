import { useState, useEffect } from 'react';
import { Slider, Box } from '@mui/material';

const initMarks = [
  {
    value: 1,
    label: '$',
  },
  {
    value: 2,
    label: '$$',
  },
  {
    value: 3,
    label: '$$$',
  },
  {
    value: 4,
    label: '$$$$',
  },
];

export default function PriceSlider({ priceLevels }) {
  const [value, setValue] = useState([1, 4]);
  const [marks, setMarks] = useState(null);
  useEffect(() => {
    if (priceLevels && priceLevels.length >= 1) {
      const currentMarks = priceLevels.map((price) => ({
        value: price.length,
        label: price,
      }));
      setMarks(currentMarks);
    }
  }, [priceLevels]);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '75%', margin: '0 auto' }}>
      <Slider
        color='secondary'
        value={value}
        onChange={handleChange}
        valueLabelDisplay='off'
        step={1}
        marks={marks && marks.length >= 1 ? marks : initMarks}
        min={marks && marks.length >= 1 ? marks[0].value : 1}
        max={marks && marks.length >= 1 ? marks[marks.length - 1].value : 4}
        disableSwap
      />
    </Box>
  );
}
