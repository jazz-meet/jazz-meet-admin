import { create } from 'zustand';
import { WEEKDAYS } from '~/constants/date';
import { ImageType, VenuePostBody } from '~/types/api.types';

type LocationType = Pick<
  VenuePostBody,
  'roadNameAddress' | 'lotNumberAddress' | 'latitude' | 'longitude'
> | null;

type VenueHours = VenuePostBody['venueHours'];

type PostVenueFormStore = {
  images: ImageType[];
  location: LocationType;
  venueHours: VenueHours;

  addImage: (image: ImageType[]) => void;
  deleteImage: (id: ImageType['id']) => void;
  getImageIds: () => ImageType['id'][] | undefined;

  updateLocation: (location: LocationType) => void;

  addVenueHour: (venueHours: VenueHours[number]) => void;
  deleteVenueHour: (day: VenueHours[number]['day']) => void;
};

const initialState = {
  images: [],
  location: null,
  venueHours: [],
};

export const usePostVenueFormStore = create<PostVenueFormStore>()(
  (set, get) => ({
    ...initialState,

    addImage: (images) =>
      set((state) => ({ images: [...state.images, ...images] })),
    deleteImage: (id) =>
      set(({ images }) => ({
        images: images.filter((image) => image.id !== id),
      })),
    getImageIds: () => get().images.map((image) => image.id),

    updateLocation: (location) => set(() => ({ location })),

    addVenueHour: (venueHour) =>
      set((state) => ({
        venueHours: [...state.venueHours, venueHour].sort(
          (a, b) => WEEKDAYS.indexOf(a.day) - WEEKDAYS.indexOf(b.day),
        ),
      })),
    deleteVenueHour: (day) =>
      set(({ venueHours }) => ({
        venueHours: venueHours.filter((venueHour) => venueHour.day !== day),
      })),
  }),
);
