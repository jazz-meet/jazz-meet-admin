import { create } from 'zustand';
import { getVenueDetail, postVenue } from '~/apis/venue';
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

  onVenuePost: () => Promise<void>;
};

const initialState = {
  name: '',
  images: [],
  location: {
    roadNameAddress: '',
    lotNumberAddress: '',
    latitude: 0,
    longitude: 0,
  },
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
      set(({ images: images }) => ({
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
      const venueDetail = await getVenueDetail(id);
      const { links } = get();
      venueDetail.links.forEach((link) => (links[link.type] = link.url));

      set(() => ({
        name: venueDetail.name,
        images: venueDetail.images,
        location: {
          roadNameAddress: venueDetail.roadNameAddress,
          lotNumberAddress: venueDetail.lotNumberAddress,
          latitude: venueDetail.latitude,
          longitude: venueDetail.longitude,
        },
        phoneNumber: venueDetail.phoneNumber,
        description: venueDetail.description,
        venueHours: venueDetail.venueHours,
      }));
    },

    onVenuePost: async () => {
      const {
        name,
        location,
        phoneNumber,
        description,
        venueHours,
        getLinks,
        getImageIds,
      } = get();
      const links = getLinks();
      const imageIds = getImageIds();

      if (
        !name ||
        !location.latitude ||
        !location.longitude ||
        !location.lotNumberAddress ||
        !location.roadNameAddress ||
        !phoneNumber ||
        !description ||
        venueHours.length !== 7 ||
        !links?.some((link) => link.type === 'naverMap' && link.url) ||
        !(imageIds && imageIds.length > 0)
      ) {
        alert('필수 정보를 모두 입력해주세요.');
        return;
      }

      return postVenue({
        name,
        imageIds,
        latitude: location.latitude,
        longitude: location.longitude,
        lotNumberAddress: location.lotNumberAddress,
        roadNameAddress: location.roadNameAddress,
        phoneNumber,
        description,
        links,
        venueHours,
      });
    },
  }),
);
