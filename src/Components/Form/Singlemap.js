import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
 
import './map.css'
import 'leaflet/dist/leaflet.css';

/* container  */


const Singlemap = ({location}) => {

//    const position = [ ]
    const position = [location[0],location[1]]
    console.log(position);
    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>

    );
};

export default Singlemap;