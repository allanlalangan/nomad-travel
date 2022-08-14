import { useState } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import {
  Header,
  Places,
  PlaceDetails,
  FilterMenu,
  Map,
  FilterDrawer,
} from './components';
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

  const [modalOpen, setModalOpen] = useState(false);
  const [activePlace, setActivePlace] = useState(null);
  const handleCloseModal = () => {
    setModalOpen(false);
    setActivePlace(null);
  };
  const handleOpenModal = (place) => {
    setActivePlace(place);
    setModalOpen(true);
  };
  const [filterOpen, setFilterOpen] = useState(true);
  const [filterActive, setFilterActive] = useState(false);
  const [filteredPlaces, setFilteredPlaces] = useState(null);
  const [category, setCategory] = useState('');
  const [places, setPlaces] = useState([]);
  const [placeCardRefs, setPlaceCardRefs] = useState([]);

  const [googleMap, setGoogleMap] = useState(null);
  const [coordinates, setCoordinates] = useState({
    lat: 40.7831,
    lng: -73.9712,
  });
  const [bounds, setBounds] = useState(null);

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
            {modalOpen && (
              <PlaceDetails
                category={category}
                place={activePlace}
                onClose={handleCloseModal}
              />
            )}
            <Container component='section' sx={style.places}>
              <Places
                handleOpenModal={handleOpenModal}
                cardRefs={placeCardRefs}
                setCardRefs={setPlaceCardRefs}
                places={filteredPlaces || places}
                category={category}
                status={placesStatus}
                filterOpen={filterOpen}
                toggleFilter={() => setFilterOpen(!filterOpen)}
              />
            </Container>
            <FilterDrawer isOpen={filterOpen}>
              <FilterMenu
                setFilteredPlaces={setFilteredPlaces}
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
                  setFilteredPlaces={setFilteredPlaces}
                  isModalOpen={modalOpen}
                  openModal={handleOpenModal}
                  status={mapStatus}
                  category={category}
                  placesStatus={placesStatus}
                  setPlacesStatus={setPlacesStatus}
                  setMapStatus={setMapStatus}
                  places={filteredPlaces || places}
                  placeCardRefs={placeCardRefs}
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
