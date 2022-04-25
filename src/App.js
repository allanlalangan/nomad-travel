import { useState, useEffect, useRef, useCallback } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import { getPlaces } from './api/placesAPI';
// styles and ui
import styles from './App.module.css';
// components
import Header from './components/Header/Header';
import FilterBar from './components/Places/FilterBar';
import Places from './components/Places/Places';
import Map from './components/Map/Map';

function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
  });

  const defaultCenter = {
    lat: 45.5252,
    lng: -122.6584,
  };

  const [center, setCenter] = useState(defaultCenter);
  const [bounds, setBounds] = useState(null);
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [category, setCategory] = useState('');

  // fetch places in bounds if category and bounds are set
  // pass bounds and category to api
  useEffect(() => {
    if (category !== '' && bounds) {
      getPlaces(bounds, category).then((data) => {
        setPlaces(data);
      });
    } else return;
    // fetch places when user pan/zoom map or filters change
  }, [center, category, bounds]);

  return (
    <div>
      <Header />
      <main>
        <section className={`${styles['places-section']}`}>
          <FilterBar onCategoryChange={setCategory} />
          <Places category={category} places={places} />
        </section>
        <section className={`${styles['map-section']}`}>
          {isLoaded ? (
            <Map
              selectedPlace={selectedPlace}
              setSelectedPlace={setSelectedPlace}
              setPlaces={setPlaces}
              places={places}
              setBounds={setBounds}
              center={center}
            />
          ) : (
            <h1>Loading...</h1>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
