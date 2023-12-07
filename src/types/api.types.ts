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
} & ShowTime;

export type ShowList = {
  shows: Show[];
} & Pagination;

type ShowTime = {
  startTime: string;
  endTime: string;
};

export type InquiryParams = {
  category: InquiryCategories;
} & SearchParams;

export type InquiryData = {
  inquiries: Inquiry[];
} & Pagination;

export type InquiryDetailData = {
  id: number;
  status: string;
  content: string;
  nickname: string;
  createdAt: Date;
  answer: {
    id: number;
    content: string;
    createdAt: Date;
    modifiedAt: Date;
  };
};

export type InquiryAnswerParams = {
  inquiryId: number;
  content: string;
};
