import {
  SearchParams,
  VenueDetail,
  VenueList,
  VenuePostBody,
} from '~/types/api.types';
import { getQueryString } from '~/utils/url';
import { fetchDataWithToken } from './fetchData';

export const getVenueDetail = async (venueId: string): Promise<VenueDetail> => {
  const response = await fetchDataWithToken(`/api/venues/${venueId}`);

  return response.json();
};

export const getVenueList = async ({
  word,
  page,
}: SearchParams): Promise<VenueList> => {
  const queryString = getQueryString({ word, page });
  const response = await fetchDataWithToken(`/api/venues${queryString}`);

  return response.json();
};

export const postVenue = async (
  body: VenuePostBody,
): Promise<{ id: number }> => {
  const response = await fetchDataWithToken('/api/venues', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  return response.json();
};

export const editVenue = async (
  body: VenuePostBody,
  venueId: string,
): Promise<{ id: number }> => {
  const response = await fetchDataWithToken(`/api/venues/${venueId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  return response.json();
};

export const deleteVenue = async (venueId: string) => {
  return fetchDataWithToken(`/api/venues/${venueId}`, {
    method: 'DELETE',
  });
};
