import { Inquiry, InquiryCategories } from './inquiry.types';

type Venue = {
  id: number;
  name: string;
  address: string;
};

export type VenueList = {
  venues: Venue[];
} & Pagination;

export type SearchParams = {
  word?: string;
  page?: number;
};

type Pagination = {
  totalCount: number;
  currentPage: number;
  maxPage: number;
};

type Show = {
  id: number;
  teamName: string;
  venueName: string;
  startTime: string;
  endTime: string;
};

export type ShowList = {
  shows: Show[];
} & Pagination;

export type InquiryParams = SearchParams & {
  category?: InquiryCategories;
};

export type InquiryData = {
  inquiries: Inquiry[];
} & Pagination;

export type VenueDetail = {
  id: number;
  images: {
    id: number;
    url: string;
  }[];
  name: string;
  roadNameAddress: string;
  lotNumberAddress: string;
  phoneNumber: string;
  links: {
    type: string;
    url: string;
  }[];
  venueHours: {
    day: string;
    businessHours: string;
  }[];
  description: string;
  latitude: number;
  longitude: number;
};

export type VenuePostBody = Omit<VenueDetail, 'id' | 'images'> & {
  imageIds: number[];
};

export type ImageType = {
  id: number;
  url: string;
};

export type Links = VenueDetail['links'];
