// context
import PlacesContextProvider from './store/PlacesContext/PlacesContextProvider';
import MapContextProvider from './store/MapContext/MapContextProvider';
import FilterContextProvider from './store/FilterContext/FilterContextProvider';
// google maps api
import { useLoadScript } from '@react-google-maps/api';
// components
import { Header, Places, FilterMenu, Map } from './components';
// styles and ui
import styles from './App.module.css';

const App = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
  });

  console.log('render');
  return (
    <MapContextProvider>
      <FilterContextProvider>
        <PlacesContextProvider>
          <Header />
          <main>
            <section className={`${styles['places-section']}`}>
              <Places />
              <FilterMenu />
            </section>
            <section className={`${styles['map-section']}`}>
              {isLoaded ? <Map isLoaded={isLoaded} /> : <h1>Loading...</h1>}
            </section>
          </main>
        </PlacesContextProvider>
      </FilterContextProvider>
    </MapContextProvider>
  );
};

export default App;
