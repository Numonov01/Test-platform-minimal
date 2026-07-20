import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { OrientationNewEditForm } from '../orientation-new-edit-form';

// ----------------------------------------------------------------------

export function OrientationCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Create a new orientation"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Orientation', href: paths.dashboard.orientation.root },
          { name: 'New orientation' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <OrientationNewEditForm />
    </DashboardContent>
  );
}
