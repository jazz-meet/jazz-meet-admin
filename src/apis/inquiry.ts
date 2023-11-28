import { InquiryData, InquiryParams } from '~/types/api.types';
import { getQueryString } from '~/utils/url';
import { fetchData } from './fetchData';

export const getInquiryData = async (
  params: InquiryParams,
): Promise<InquiryData> => {
  const queryString = getQueryString(params);
  const response = await fetchData(`/api/inquiries${queryString}`);

  return response.json();
};
