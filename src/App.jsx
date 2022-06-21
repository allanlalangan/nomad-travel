import { useState } from 'react';

// context
import PlacesContextProvider from './store/PlacesContext/PlacesContextProvider';
import MapContextProvider from './store/MapContext/MapContextProvider';
import FilterContextProvider from './store/FilterContext/FilterContextProvider';
// google maps api
import { useLoadScript } from '@react-google-maps/api';
// components
import { Header, Places, FilterMenu, Map, FilterDrawer } from './components';
import {
  CssBaseline,
  Box,
  Container,
  ThemeProvider,
  Typography,
} from '@mui/material';
import theme from './theme';
import style from './style';

const App = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  const handleOpenFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: ['places'],
  });

  return (
    <MapContextProvider>
      <FilterContextProvider>
        <PlacesContextProvider>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <Box component='div' sx={style.wrapper}>
              <Header isLoaded={isLoaded} />
              <Container sx={style.mainContent} component='main'>
                <Container component='section' sx={style.places}>
                  <Places openFilter={handleOpenFilter} />
                </Container>
                <FilterDrawer isOpen={filterOpen}>
                  <FilterMenu isLoaded={isLoaded} />
                </FilterDrawer>
                <Container component='section' sx={style.map}>
                  {isLoaded ? <Map isLoaded={isLoaded} /> : <h1>Loading...</h1>}
                </Container>
              </Container>
            </Box>
          </ThemeProvider>
        </PlacesContextProvider>
      </FilterContextProvider>
    </MapContextProvider>
  );
};

export default App;
