import GoogleMapReact from 'google-map-react';
import { IoLocationSharp } from 'react-icons/io';

// styles and ui
import styles from './Map.module.css';

const Map = ({ coordinates, setCoordinates, setBoundary }) => {
  const apiKey = process.env.REACT_APP_MAPS_API_KEY;

  return (
    <section className={`${styles['map-section']}`}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={{ lat: 51.5, lng: -0.12 }}
        center={coordinates}
        defaultZoom={13}
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
        onChildClick={''}
        options={''}
      ></GoogleMapReact>
    </section>
  );
};

export default Map;
