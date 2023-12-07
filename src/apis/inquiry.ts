import {
  InquiryAnswerParams,
  InquiryData,
  InquiryDetailData,
  InquiryParams,
} from '~/types/api.types';
import { getQueryString } from '~/utils/url';
import { fetchData } from './fetchData';

export const getInquiryData = async (
  params: InquiryParams,
): Promise<InquiryData> => {
  const queryString = getQueryString(params);
  const response = await fetchData(`/api/inquiries${queryString}`);

  return response.json();
};

export const getInquiryDetailData = async (
  inquiryId: number,
): Promise<InquiryDetailData> => {
  const response = await fetchData(`/api/inquiries/${inquiryId}`);

  return response.json();
};

export const postInquiryAnswer = async (params: InquiryAnswerParams) => {
  const response = await fetchData(`/api/inquiries/answers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errorMessage);
  }

  return data;
};

export const putInquiryAnswer = async ({
  answerId,
  content,
}: {
  answerId: number;
  content: string;
}) => {
  const response = await fetchData(`/api/inquiries/answers/${answerId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: content,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errorMessage);
  }

  return data;
};

export const deleteInquiryAnswer = async (answerId: number) => {
  await fetchData(`/api/inquiries/answers/${answerId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
