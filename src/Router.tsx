import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { PATH } from './constants/path';
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
    <Route path={PATH.HOME} element={<BaseLayout />}>
      <Route path={PATH.VENUES} element={<VenuesPage />} />
      <Route path={PATH.VENUES + '/:venueId'} element={<VenueDetail />} />
      <Route path={PATH.VENUES_POST} element={<PostVenue />} />
      <Route path={PATH.VENUES_EDIT + '/:venueId'} element={<PostVenue />} />

      <Route path={PATH.SHOWS} element={<ShowsPage />} />

      <Route path={PATH.INQUIRIES} element={<InquiriesPage />} />
    </Route>,
  ),
);
