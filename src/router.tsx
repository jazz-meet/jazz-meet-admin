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
import { AdminVenueDetail } from './pages/VenuesPage/AdminVenueDetail';
import { PostShow } from './pages/VenuesPage/PostShow';

export const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />}>
      <Route path="venues" element={<VenuesPage />} />
      <Route path="venues/:venueId" element={<AdminVenueDetail />} />

      <Route path="shows" element={<ShowsPage />} />
      <Route path="shows/post" element={<PostShow />} />

      <Route path="inquiries" element={<InquiriesPage />} />
    </Route>,
  ),
);
