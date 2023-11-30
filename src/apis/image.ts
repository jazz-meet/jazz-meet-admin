import { ALLOWED_EXTENSIONS } from '~/constants/fileExtension';
import { fetchData } from './fetchData';

export const uploadImages = async (files: File[]) => {
  const formData = new FormData();

  files.forEach((file) => {
    const extension = file.name.split('.').pop();

    if (!extension || !ALLOWED_EXTENSIONS.includes(extension)) {
      throw new Error('허용하지 않는 확장자입니다.');
    }

    formData.append('image', file);
  });

  const response = await fetchData(`/api/images`, {
    method: 'POST',
    body: formData,
  });

  return response.json();
};

export const deleteImage = async (imageId: number) => {
  const response = await fetchData(`/api/images/${imageId}`, {
    method: 'DELETE',
  });

  return response.json();
};
