import { UploadImageRes } from '~/types/api.types';
import { fetchData } from './fetchData';

export const postImages = async (images: FormData): Promise<UploadImageRes> => {
  const response = await fetchData(`/api/images`, {
    method: 'POST',
    body: images,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errorMessage);
  }

  return data;
};
