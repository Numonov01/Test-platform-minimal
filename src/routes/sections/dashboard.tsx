import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { CONFIG } from 'src/config-global';
import { DashboardLayout } from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

import { AuthGuard } from 'src/auth/guard';

// ----------------------------------------------------------------------

// Overview
const IndexPage = lazy(() => import('src/pages/dashboard'));
// Course
const OverviewCoursePage = lazy(() => import('src/pages/dashboard/course'));
// Portfolio
const OverviewPortfolioPage = lazy(() => import('src/pages/dashboard/portfolio'));
// Live
const OverviewLivePage = lazy(() => import('src/pages/dashboard/live'));
// Finance
const OverviewFinancePage = lazy(() => import('src/pages/dashboard/finance'));
// Orientation
const OverviewOrientationPage = lazy(() => import('src/pages/dashboard/orientation'));
const OrientationListPage = lazy(() => import('src/pages/dashboard/orientation/list'));
const OrientationDetailsPage = lazy(() => import('src/pages/dashboard/orientation/details'));
const OrientationCreatePage = lazy(() => import('src/pages/dashboard/orientation/new'));
const OrientationEditPage = lazy(() => import('src/pages/dashboard/orientation/edit'));
// FAQ
const OverviewFaqPage = lazy(() => import('src/pages/dashboard/faq'));
// User
const UserListPage = lazy(() => import('src/pages/dashboard/user/list'));
const UserAccountPage = lazy(() => import('src/pages/dashboard/user/accaunt'));
const UserCreatePage = lazy(() => import('src/pages/dashboard/user/new'));
const UserEditPage = lazy(() => import('src/pages/dashboard/user/edit'));

// ----------------------------------------------------------------------

const layoutContent = (
  <DashboardLayout>
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  </DashboardLayout>
);

export const dashboardRoutes = [
  {
    path: 'dashboard',
    element: CONFIG.auth.skip ? <>{layoutContent}</> : <AuthGuard>{layoutContent}</AuthGuard>,
    children: [
      { element: <IndexPage />, index: true },

      { element: <OverviewCoursePage />, path: 'course' },
      { element: <OverviewPortfolioPage />, path: 'portfolio' },
      { element: <OverviewLivePage />, path: 'live' },
      { element: <OverviewFinancePage />, path: 'finance' },
      {
        path: 'orientation',
        children: [
          { element: <OverviewOrientationPage />, index: true },
          { path: 'list', element: <OrientationListPage /> },
          { path: 'new', element: <OrientationCreatePage /> },
          { path: ':id', element: <OrientationDetailsPage /> },
          { path: ':id/edit', element: <OrientationEditPage /> },
        ],
      },
      { element: <OverviewFaqPage />, path: 'faq' },
      {
        path: 'user',
        children: [
          { element: <UserListPage />, index: true },
          { path: 'list', element: <UserListPage /> },
          { path: 'new', element: <UserCreatePage /> },
          { path: ':id/edit', element: <UserEditPage /> },
          { path: 'account', element: <UserAccountPage /> },
        ],
      },
    ],
  },
];
