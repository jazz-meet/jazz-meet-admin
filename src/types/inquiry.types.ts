import { INQUIRY_CATEGORIES } from '~/constants/INQUIRY_CATEGORIES';

export type InquiryCategories = (typeof INQUIRY_CATEGORIES)[number];

export type Inquiry = {
  id: number;
  status: '검토중' | '답변완료';
  content: string;
  nickname: string;
  createdAt: string;
};
