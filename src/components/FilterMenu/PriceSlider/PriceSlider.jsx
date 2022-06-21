import { useState, useEffect } from 'react';
import { Slider, Box } from '@mui/material';

import style from './style';

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

const initValue = [1, 4];

export default function PriceSlider({ minMax }) {
  const [value, setValue] = useState([1, 4]);
  const [marks, setMarks] = useState(null);

  useEffect(() => {
    if (minMax?.length === 1) {
      setValue([minMax[0].length, minMax[0].length]);
      setMarks({ value: minMax[0].length, label: minMax[0] });
    }
    if (minMax?.length > 1) {
      const currentMarks = minMax.map((price) => ({
        value: price.length,
        label: price,
      }));
      setMarks(currentMarks);
      setValue([minMax[0].length, minMax[minMax.length - 1].length]);
    }
  }, [minMax]);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <Box sx={style.container}>
      <Slider
        color='secondary'
        value={value || initValue}
        onChange={handleChange}
        valueLabelDisplay='off'
        step={1}
        marks={marks?.length >= 1 ? marks : initMarks}
        min={marks?.length >= 1 ? marks[0].value : 1}
        max={marks?.length >= 1 ? marks[marks.length - 1].value : 4}
        disableSwap
      />
    </Box>
  );
}
