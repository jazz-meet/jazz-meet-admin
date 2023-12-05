import { create } from 'zustand';
import { ImageType, VenuePostBody } from '~/types/api.types';

type LocationType = Pick<
  VenuePostBody,
  'roadNameAddress' | 'lotNumberAddress' | 'latitude' | 'longitude'
> | null;

type PostVenueFormStore = {
  images: ImageType[] | null;
  location: LocationType;

  addImage: (image: ImageType[]) => void;
  deleteImage: (id: ImageType['id']) => void;
  getImageIds: () => ImageType['id'][] | undefined;

  updateLocation: (location: LocationType) => void;
};

const initialState = {
  images: null,
  location: null,
};

export const usePostVenueFormStore = create<PostVenueFormStore>()(
  (set, get) => ({
    ...initialState,

    addImage: (images: ImageType[]) =>
      set((state) => ({
        images: state.images ? [...state.images, ...images] : images,
      })),
    deleteImage: (id: ImageType['id']) =>
      set(({ images }) => ({
        images: images?.filter((image) => image.id !== id) || null,
      })),
    getImageIds: () => {
      const { images } = get();

      return images?.map((image) => image.id);
    },

    updateLocation: (location: LocationType) =>
      set(() => ({
        location,
      })),
  }),
);
