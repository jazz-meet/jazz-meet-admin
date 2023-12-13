import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';
import { Coordinate } from '~/types/map.types';

type Props = {
  initCoordinate: Coordinate;
};

export const Map: React.FC<Props> = ({ initCoordinate }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const coordinate = initCoordinate ?? BASIC_COORDINATE;

    const map = new naver.maps.Map(MAP_ID, {
      center: new naver.maps.LatLng(coordinate.latitude, coordinate.longitude),
      mapDataControl: false,
      tileTransition: false,
    });

    new naver.maps.Marker({
      position: new naver.maps.LatLng(
        coordinate.latitude,
        coordinate.longitude,
      ),
      map: map,
    });
  }, [initCoordinate]);

  return <StyledMap id={MAP_ID} ref={mapRef} />;
};

const MAP_ID = 'map';

const BASIC_COORDINATE: Coordinate = {
  latitude: 37.5666103,
  longitude: 126.9783882,
}; // 서울시청 좌표

const StyledMap = styled.div`
  width: 100%;
  height: 100%;
`;
