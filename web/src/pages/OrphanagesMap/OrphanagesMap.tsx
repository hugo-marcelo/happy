import React, { useEffect, useState } from 'react';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';

import mapMarkerImg from '~/images/map-marker.svg';
import api from '~/services/api';
import mapIcon from '~/utils/mapIcon';

import * as S from './OrphanagesMap.styles';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    });
  }, []);

  return (
    <S.Container>
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Map Marker" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Goiânia</strong>
          <span>Goiás</span>
        </footer>
      </aside>

      <S.MapContainer>
        <Map
          center={[-16.7114872, -49.2695155]}
          zoom={15}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          ></TileLayer>

          {orphanages.map(orphanage => {
            return (
              <Marker
                icon={mapIcon}
                position={[orphanage.latitude, orphanage.longitude]}
                key={orphanage.id}
              >
                <S.MapPopup closeButton={false} minWidth={240} maxWidth={240}>
                  {orphanage.name}
                  <S.ShowOrphanage to={`/orphanages/${orphanage.id}`}>
                    <FiArrowRight size={20} color="#fff"></FiArrowRight>
                  </S.ShowOrphanage>
                </S.MapPopup>
              </Marker>
            );
          })}
        </Map>
      </S.MapContainer>

      <S.AddOrphanage to="/orphanages/create">
        <FiPlus size={32} color="#fff"></FiPlus>
      </S.AddOrphanage>
    </S.Container>
  );
};

export default OrphanagesMap;
