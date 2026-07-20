import type { IOrientationItem } from 'src/types/orientation';

import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { OrientationDetailsContent } from '../orientation-details-content';

// ----------------------------------------------------------------------

type Props = {
  orientation?: IOrientationItem;
};

export function OrientationDetailsView({ orientation }: Props) {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Details"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Orientation', href: paths.dashboard.orientation.root },
          { name: orientation?.title || 'Details' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <OrientationDetailsContent orientation={orientation} />
    </DashboardContent>
  );
}
