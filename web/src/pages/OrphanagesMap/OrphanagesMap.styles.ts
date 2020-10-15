import { Link } from 'react-router-dom';
import { Popup } from 'react-leaflet';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
  width: 100vw;
  aside {
    background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 80px;
    width: 440px;
    h2 {
      font-size: 40px;
      font-weight: 800;
      line-height: 42px;
      margin-top: 64px;
    }
    p {
      line-height: 28px;
      margin-top: 24px;
    }
    footer {
      display: flex;
      flex-direction: column;
      line-height: 24px;
      strong {
        font-weight: 800;
      }
    }
  }
`;

export const MapContainer = styled.div`
  height: 100%;
  width: 100%;
  z-index: 1;
  > div {
    height: 100%;
  }
`;

export const MapPopup = styled(Popup)`
  div.leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    box-shadow: none;
  }

  div.leaflet-popup-content {
    color: #0089a5;
    font-size: 20px;
    font-weight: bold;
    margin: 8px 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div.leaflet-popup-tip-container {
    display: none;
  }
`;

export const ShowOrphanage = styled(Link)`
  width: 40px;
  height: 40px;
  background: #15c3d6;
  box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddOrphanage = styled(Link)`
  align-items: center;
  background-color: #15c3d6;
  border-radius: 20px;
  bottom: 40px;
  display: flex;
  height: 64px;
  justify-content: center;
  position: absolute;
  right: 40px;
  transition: background-color 0.2s;
  width: 64px;
  z-index: 2;
  &:hover {
    background-color: #17d6eb;
  }
`;
