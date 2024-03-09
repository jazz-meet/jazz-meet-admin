import { ALLOWED_EXTENSIONS } from '~/constants/fileExtension';
import { ImageType } from '~/types/api.types';
import { fetchDataWithToken } from './fetchData';

export const uploadImages = async (
  files: File[],
): Promise<{ images: ImageType[] }> => {
  const formData = new FormData();

  files.forEach((file) => {
    const extension = file.name.split('.').pop();

    if (!extension || !ALLOWED_EXTENSIONS.includes(extension)) {
      throw new Error('허용하지 않는 확장자입니다.');
    }

    formData.append('image', file);
  });

  const response = await fetchDataWithToken(`/api/images`, {
    method: 'POST',
    body: formData,
  });

  return response.json();
};

export const deleteImage = async (imageId: number) => {
  const response = await fetchDataWithToken(`/api/images/${imageId}`, {
    method: 'DELETE',
  });

  return response.json();
};
