import {
  SearchParams,
  ShowDetailRequest,
  ShowDetailType,
  ShowList,
  VenueList,
} from '~/types/api.types';
import { getQueryString } from '~/utils/url';
import { fetchData } from './fetchData';

export const getShowList = async ({
  word,
  page,
}: SearchParams): Promise<ShowList> => {
  const queryString = getQueryString({ word, page });
  const response = await fetchData(`/api/shows${queryString}`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errorMessage);
  }

  return data;
};

export const getShowDetail = async (
  showId: number,
): Promise<ShowDetailType> => {
  const response = await fetchData(`/api/shows/${showId}`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errorMessage);
  }

  return data;
};

export const postShowDetail = async ({
  venueId,
  body,
}: {
  venueId: number;
  body: ShowDetailRequest;
}): Promise<{ id: number }> => {
  const response = await fetchData(`/api/shows/${venueId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errorMessage);
  }

  return data;
};

export const putShowDetail = async ({
  showId,
  body,
}: {
  showId: number;
  body: ShowDetailRequest;
}) => {
  const response = await fetchData(`/api/shows/${showId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errorMessage);
  }

  return data;
};

export const deleteShowDetail = async (showId: number) => {
  await fetchData(`/api/shows/${showId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getSearchVenueList = async (
  word: string,
  page?: number,
): Promise<VenueList> => {
  const queryString = getQueryString({ word, page });
  const response = await fetchData(`/api/venues/search${queryString}`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errorMessage);
  }

  return data;
};
