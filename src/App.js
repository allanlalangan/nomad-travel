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

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const defaultCenter = {
    lat: 45.5252,
    lng: -122.6584,
  };

  const [coordinates, setCoordinates] = useState(defaultCenter);
  const [boundary, setBoundary] = useState(null);
  const [places, setPlaces] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (category !== '' && boundary) {
      getPlaces(boundary, category).then((data) => {
        setPlaces(data);
      });
    }
  }, [coordinates, category, boundary]);

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
              ref={mapRef.current}
              onLoad={onMapLoad}
              coordinates={coordinates}
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
