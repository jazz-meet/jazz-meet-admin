import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { BaseLayout } from './layouts/BaseLayout';
import { InquiriesPage } from './pages/InquiriesPage';
import { ShowsPage } from './pages/ShowsPage';
import { VenuesPage } from './pages/VenuesPage';
import { PostVenue } from './pages/VenuesPage/PostVenue';
import { VenueDetail } from './pages/VenuesPage/VenueDetail';

export const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />}>
      <Route path="venues" element={<VenuesPage />} />
      <Route path="venues/:venueId" element={<VenueDetail />} />
      <Route path="venues/post" element={<PostVenue />} />
      <Route path="venues/edit/:venueId" element={<PostVenue />} />

      <Route path="shows" element={<ShowsPage />} />
      <Route path="shows/post" element={<div>공연 생성 및 수정</div>} />

      <Route path="inquiries" element={<InquiriesPage />} />
    </Route>,
  ),
);
