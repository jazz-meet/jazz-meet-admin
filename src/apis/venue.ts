import { SearchParams, VenueList, VenuePostBody } from '~/types/api.types';
import { getQueryString } from '~/utils/url';
import { fetchData } from './fetchData';

export const getVenueList = async ({
  word,
  page,
}: SearchParams): Promise<VenueList> => {
  const queryString = getQueryString({ word, page });
  const response = await fetchData(`/api/venues${queryString}`);

  return response.json();
};

export const postVenue = async (body: VenuePostBody) => {
  const response = await fetchData('/api/venues', {
    method: 'POST',
    body: JSON.stringify(body),
  });

  return response.json();
};
