// context
import PlacesContextProvider from './store/PlacesContextProvider';
import MapContextProvider from './store/MapContextProvider';
// google maps api
import { useLoadScript } from '@react-google-maps/api';
// components
import Header from './components/Header/Header';
import FilterMenu from './components/Places/FilterMenu/FilterMenu';
import Places from './components/Places/Places';
import Map from './components/Map/Map';
// styles and ui
import styles from './App.module.css';

const App = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
  });

  return (
    <MapContextProvider>
      <PlacesContextProvider>
        <Header />
        <main>
          <section className={`${styles['places-section']}`}>
            <Places />
            <FilterMenu />
          </section>
          <section className={`${styles['map-section']}`}>
            {isLoaded ? <Map /> : <h1>Loading...</h1>}
          </section>
        </main>
      </PlacesContextProvider>
    </MapContextProvider>
  );
};

export default App;
