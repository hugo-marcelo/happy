import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '~/images/map-marker.svg';
import { Container, MapContainer, AddOrphanage } from './OrphanagesMap.styles';

const OrphanagesMap = () => {
  return (
    <Container>
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Map Marker"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Goiânia</strong>
          <span>Goiás</span>
        </footer>
      </aside>

      <MapContainer>
        <Map
          center={[-16.7114872,-49.2695155]}
          zoom={15}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}></TileLayer>
        </Map>
      </MapContainer>

      <AddOrphanage to="" className="create-orphanage">
        <FiPlus size={32} color="#fff"></FiPlus>
      </AddOrphanage>
    </Container>
  );
}

export default OrphanagesMap;
