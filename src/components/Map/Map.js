import GoogleMapReact from 'google-map-react';
import { useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';

// styles and ui
import styles from './Map.module.css';
// components
import PlaceMarker from './PlaceMarker/PlaceMarker';

const Map = ({ places, coordinates, setCoordinates, setBoundary }) => {
  const apiKey = process.env.REACT_APP_MAPS_API_KEY;
  const [selectedChild, setSelectedChild] = useState(null);

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: apiKey }}
      defaultCenter={{ lat: 51.5, lng: -0.12 }}
      center={coordinates}
      defaultZoom={14}
      margin={[50, 50, 50, 50]}
      onChange={(e) => {
        // console.log(e);
        setCoordinates({ lat: e.center.lat, lng: e.center.lng });
        setBoundary({
          bl_latitude: e.marginBounds.sw.lat,
          tr_latitude: e.marginBounds.ne.lat,
          bl_longitude: e.marginBounds.sw.lng,
          tr_longitude: e.marginBounds.ne.lng,
        });
      }}
      onChildClick={(child) => console.log(child)}
    >
      {places?.map((place, i) => (
        <div
          className={styles['marker-container']}
          lat={Number(place.latitude)}
          lng={Number(place.longitude)}
          key={i}
        >
          <PlaceMarker place={place} />
        </div>
      ))}
    </GoogleMapReact>
  );
};

export default Map;
