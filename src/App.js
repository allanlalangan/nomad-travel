import { useState, useEffect } from 'react';
import { getPlaces } from './api/placesAPI';
// styles and ui
import styles from './App.module.css';
// components
import Header from './components/Header/Header';
import Places from './components/Places/Places';
import Map from './components/Map/Map';

function App() {
  const [coordinates, setCoordinates] = useState({
    lat: 45.53436716317859,
    lng: -122.6657052896321,
  });
  const [boundary, setBoundary] = useState(null);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getPlaces(boundary).then((data) => {
      setPlaces(data);
    });
  }, [coordinates, boundary]);

  return (
    <div>
      <Header />
      <main>
        <Places places={places} />
        <Map
          coordinates={coordinates}
          setCoordinates={setCoordinates}
          setBoundary={setBoundary}
        />
      </main>
    </div>
  );
}

export default App;
