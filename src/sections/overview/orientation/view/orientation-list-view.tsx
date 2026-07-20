import { useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';

import { paths } from 'src/routes/paths';

import { _orientations } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import { CustomTabs } from 'src/components/custom-tabs';
import { EmptyContent } from 'src/components/empty-content';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { TestList } from '../test-list';
import { OrientationList } from '../orientation-list';

// ----------------------------------------------------------------------

export function OrientationListView() {
  const [currentTab, setCurrentTab] = useState('careers');

  const notFound = !_orientations.length;

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  };

  return (
    <DashboardContent maxWidth="xl">
      <CustomBreadcrumbs
        heading="Orientations"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Orientation', href: paths.dashboard.orientation.root },
        ]}
        sx={{ mb: 2 }}
      />

      <Box sx={{ mb: 3, display: 'inline-flex' }}>
        <CustomTabs value={currentTab} onChange={handleChangeTab}>
          <Tab value="careers" label="Kasblar" />
          <Tab value="tests" label="Testlar" />
          <Tab value="results" label="Natijalarim" />
        </CustomTabs>
      </Box>

      {currentTab === 'careers' && (
        <>
          {notFound && <EmptyContent filled sx={{ py: 10 }} />}
          <OrientationList orientations={_orientations} />
        </>
      )}

      {currentTab === 'tests' && <TestList />}

      {currentTab === 'results' && (
        <EmptyContent
          filled
          title="Natijalaringiz yo'q"
          description="Testlarni topshiring va natijalaringizni bu yerda ko'ring"
          sx={{ py: 10 }}
        />
      )}
    </DashboardContent>
  );
}
