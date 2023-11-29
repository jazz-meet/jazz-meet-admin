import { SearchParams, ShowList } from '~/types/api.types';
import { getQueryString } from '~/utils/url';
import { fetchData } from './fetchData';

export const getShowList = async ({
  word,
  page,
}: SearchParams): Promise<ShowList> => {
  const queryString = getQueryString({ word, page });
  const response = await fetchData(`/api/shows${queryString}`);

  return response.json();
};
