import { GeoLocation } from '~/types/api.types';
import { getQueryString } from '~/utils/url';
import { fetchDataWithToken } from './fetchData';

export const getGeoLocation = async (
  word: string,
  page?: number,
): Promise<GeoLocation> => {
  const queryString = getQueryString({ word, page });
  const response = await fetchDataWithToken(`/api/geocode${queryString}`);

  return response.json();
};
