// context
import PlacesContextProvider from './store/PlacesContext/PlacesContextProvider';
import MapContextProvider from './store/MapContext/MapContextProvider';
import FilterContextProvider from './store/FilterContext/FilterContextProvider';
// google maps api
import { useLoadScript } from '@react-google-maps/api';
// components
import { Header, Places, FilterMenu, Map } from './components';
import { Container, ThemeProvider } from '@mui/material';
import theme from './theme';
// styles and ui
import styles from './App.module.css';
import style from './style';

const App = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
  });

  console.log('render');
  return (
    <MapContextProvider>
      <FilterContextProvider>
        <PlacesContextProvider>
          <ThemeProvider theme={theme}>
            <Header />
            <Container sx={style.mainContent} component='main'>
              <Container sx={style.places}>
                <Places />
                <FilterMenu />
              </Container>
              <Container sx={style.map}>
                {isLoaded ? <Map isLoaded={isLoaded} /> : <h1>Loading...</h1>}
              </Container>
            </Container>
          </ThemeProvider>
        </PlacesContextProvider>
      </FilterContextProvider>
    </MapContextProvider>
  );
};

export default App;
