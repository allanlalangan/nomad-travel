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
      defaultCenter={coordinates}
      center={coordinates}
      defaultZoom={14}
      margin={[50, 50, 50, 50]}
      options={{ disableDefaultUI: true, zoomControl: true }}
      onChange={(e) => {
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
        <PlaceMarker
          place={place}
          lat={place.latitude}
          lng={place.longitude}
          key={i}
        />
      ))}
    </GoogleMapReact>
  );
};

export default Map;
