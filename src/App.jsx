import { useState } from 'react';
// google maps api
import { useLoadScript } from '@react-google-maps/api';
// components
import { Header, Places, FilterMenu, Map, FilterDrawer } from './components';
import { CssBaseline, Box, Container, ThemeProvider } from '@mui/material';
import theme from './theme';
import style from './style';

const App = () => {
  const [mapStatus, setMapStatus] = useState({
    loading: true,
    success: false,
    error: null,
  });
  const [placesStatus, setPlacesStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });
  const [filterActive, setFilterActive] = useState(false);

  const [filterOpen, setFilterOpen] = useState(true);
  const [places, setPlaces] = useState([]);
  const [googleMap, setGoogleMap] = useState(null);
  const [coordinates, setCoordinates] = useState({
    lat: 45.5252,
    lng: -122.6584,
  });
  const [bounds, setBounds] = useState(null);
  const [category, setCategory] = useState('');

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: ['places'],
  });

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Box component='div' sx={style.wrapper}>
          <Header
            setMapStatus={setMapStatus}
            setCoordinates={setCoordinates}
            isLoaded={isLoaded}
          />
          <Container sx={style.mainContent} component='main'>
            <Container component='section' sx={style.places}>
              <Places
                places={places}
                category={category}
                status={placesStatus}
                filterOpen={filterOpen}
                toggleFilter={() => setFilterOpen(!filterOpen)}
              />
            </Container>
            <FilterDrawer isOpen={filterOpen}>
              <FilterMenu
                active={filterActive}
                setActive={setFilterActive}
                category={category}
                setCategory={setCategory}
                placesStatus={placesStatus}
                places={places}
                isOpen={filterOpen}
              />
            </FilterDrawer>
            <Container component='section' sx={style.map}>
              {isLoaded ? (
                <Map
                  status={mapStatus}
                  category={category}
                  placesStatus={placesStatus}
                  setPlacesStatus={setPlacesStatus}
                  setMapStatus={setMapStatus}
                  places={places}
                  setPlaces={setPlaces}
                  setFilterActive={setFilterActive}
                  googleMap={googleMap}
                  setGoogleMap={setGoogleMap}
                  coordinates={coordinates}
                  setCoordinates={setCoordinates}
                  bounds={bounds}
                  setBounds={setBounds}
                />
              ) : (
                <h1>Loading...</h1>
              )}
            </Container>
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
