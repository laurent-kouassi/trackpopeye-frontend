import React, {useEffect, useRef} from 'react';
import 'leaflet/dist/leaflet.css';
import './Maps.css';
import { 
    MapContainer,
    TileLayer,
    Circle,
    Marker } from 'react-leaflet';
import L from 'leaflet';
import carLogo from '../../img/car.svg';
import personLogo from '../../img/person.svg';

const Maps = (props) => {
    const { coords, routeId } = props;
    const mapRef = useRef(null);

    const carIcon = L.icon({
        iconUrl: carLogo,
        iconRetinaUrl: carLogo,
        iconSize: [35, 35],
    });

    const personIcon = L.icon({
        iconUrl: personLogo,
        iconRetinaUrl: personLogo,
        iconSize: [35, 35],
    });

    const position = coords;

    return (
        <section className="map-section">
            <MapContainer
               center={center}
               zoom={13} 
               scrollWheelZoom={true} style={{height: window.innerHeight, width: window.innerWidth}}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                { 
                  position.length > 0 && 
                  <Marker position = { position } icon = { routeId == 'lunch-route' ? personIcon : carIcon }></Marker>
                }

            </MapContainer>
        </section>
    )
};

export default Maps;
