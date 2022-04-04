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
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (category !== '') {
      getPlaces(boundary, category).then((data) => {
        console.log(data);
        setPlaces(data);
      });
    }
  }, [category, boundary]);

  return (
    <div>
      <Header />
      <main>
        <Places
          category={category}
          onCategoryChange={setCategory}
          places={places}
        />
        <Map
          coordinates={coordinates}
          setCoordinates={setCoordinates}
          setBoundary={setBoundary}
          places={places}
        />
      </main>
    </div>
  );
}

export default App;
