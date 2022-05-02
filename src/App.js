import { useState, useEffect } from 'react';
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
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
  });

  const defaultCenter = {
    lat: 45.5252,
    lng: -122.6584,
  };

  const [center, setCenter] = useState(defaultCenter);
  const [bounds, setBounds] = useState(null);
  const [places, setPlaces] = useState([]);
  const [placeRefs, setPlaceRefs] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [category, setCategory] = useState('');

  // fetch places in bounds if category and bounds are set
  // pass bounds and category to api
  useEffect(() => {
    if (category !== '' && bounds) {
      getPlaces(bounds, category).then((data) => {
        console.log(data);
        setPlaces(data);
        setSelectedPlace(null);
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
          <Places
            placeRefs={placeRefs}
            setPlaceRefs={setPlaceRefs}
            category={category}
            places={places}
          />
        </section>
        <section className={`${styles['map-section']}`}>
          {isLoaded ? (
            <Map
              placeRefs={placeRefs}
              setPlaceRefs={setPlaceRefs}
              selectedPlace={selectedPlace}
              setSelectedPlace={setSelectedPlace}
              setPlaces={setPlaces}
              places={places}
              setBounds={setBounds}
              center={center}
              setCenter={setCenter}
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
