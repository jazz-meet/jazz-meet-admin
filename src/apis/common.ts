import { UploadImageRes } from '~/types/api.types';
import { fetchDataWithToken } from './fetchData';

export const postImages = async (images: FormData): Promise<UploadImageRes> => {
  const response = await fetchDataWithToken(`/api/images`, {
    method: 'POST',
    body: images,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errorMessage);
  }

  return data;
};

export const deleteImages = async (imageId: number) => {
  await fetchDataWithToken(`/api/images/${imageId}`, {
    method: 'DELETE',
  });
};
