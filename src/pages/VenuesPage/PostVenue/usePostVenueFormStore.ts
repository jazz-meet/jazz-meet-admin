import { create } from 'zustand';
import { getVenueDetail } from '~/apis/venue';
import { WEEKDAYS } from '~/constants/date';
import { Links, LocationType, VenueDetail } from '~/types/api.types';

type VenueHours = VenueDetail['venueHours'];
type VenueImage = VenueDetail['images'][number];

type PostVenueFormStore = {
  name: string;
  images: VenueImage[];
  location: LocationType;
  phoneNumber: string;
  description: string;
  links: {
    [key: string]: string;
  };
  venueHours: VenueHours;

  changeName: (name: string) => void;

  addImage: (image: VenueImage[]) => void;
  deleteImage: (id: VenueImage['id']) => void;
  getImageIds: () => VenueImage['id'][] | undefined;

  updateLocation: (location: LocationType) => void;

  changePhoneNumber: (phoneNumber: string) => void;

  changeDescription: (description: string) => void;

  changeLink: (type: string, url: string) => void;

  getLinks: () => Links | undefined;

  addVenueHour: (venueHours: VenueHours[number]) => void;
  deleteVenueHour: (day: VenueHours[number]['day']) => void;

  initializeEditForm: (id: string) => void;
};

const initialState = {
  name: '',
  images: [],
  location: null,
  phoneNumber: '',
  description: '',
  links: {
    naverMap: '',
    instagram: '',
    official: '',
    etc: '',
    reservation: '',
  },
  venueHours: [],
};

export const usePostVenueFormStore = create<PostVenueFormStore>()(
  (set, get) => ({
    ...initialState,

    changeName: (name) => set(() => ({ name })),

    addImage: (images) =>
      set((state) => ({ images: [...state.images, ...images] })),
    deleteImage: (id) =>
      set(({ images }) => ({
        images: images.filter((image) => image.id !== id),
      })),
    getImageIds: () => get().images.map((image) => image.id),

    updateLocation: (location) => set(() => ({ location })),

    changePhoneNumber: (phoneNumber) => set(() => ({ phoneNumber })),

    changeDescription: (description) => set(() => ({ description })),

    changeLink: (type, url) =>
      set(({ links }) => ({
        links: {
          ...links,
          [type]: url,
        },
      })),

    getLinks: () => {
      const { links } = get();

      return Object.entries(links)
        .map(([type, url]) => ({ type, url }))
        .filter(({ url }) => Boolean(url));
    },

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

    initializeEditForm: async (id) => {
      const response = await getVenueDetail(id);
      console.log(response);

      const { links } = get();
      response.links.forEach((link) => (links[link.type] = link.url));

      set(() => ({
        name: response.name,
        images: response.images,
        location: {
          roadNameAddress: response.roadNameAddress,
          lotNumberAddress: response.lotNumberAddress,
          latitude: response.latitude,
          longitude: response.longitude,
        },
        phoneNumber: response.phoneNumber,
        description: response.description,
        venueHours: response.venueHours,
      }));
    },
  }),
);
