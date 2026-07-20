import type { IOrientationItem } from 'src/types/orientation';

import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { OrientationNewEditForm } from '../orientation-new-edit-form';

// ----------------------------------------------------------------------

type Props = {
  orientation?: IOrientationItem;
};

export function OrientationEditView({ orientation }: Props) {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Edit"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Orientation', href: paths.dashboard.orientation.root },
          { name: orientation?.title },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <OrientationNewEditForm currentOrientation={orientation} />
    </DashboardContent>
  );
}
