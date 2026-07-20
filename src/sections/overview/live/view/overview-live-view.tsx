import { useState } from 'react';

import { Tab, Box, Grid } from '@mui/material';

import { _liveStreams } from 'src/_mock/_live-streams';
import { DashboardContent } from 'src/layouts/dashboard';

import { CustomTabs } from 'src/components/custom-tabs';
import { EmptyContent } from 'src/components/empty-content';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { LiveStreams } from '../booking-newest';

// ----------------------------------------------------------------------

export function OverviewLiveView() {
  const [currentTab, setCurrentTab] = useState('live');

  const liveCount = _liveStreams.filter((s) => s.status === 'live').length;

  return (
    <DashboardContent maxWidth="xl">
      <CustomBreadcrumbs
        heading="Jonli efir translatsiyalari"
        links={[{ name: 'Dashboard', href: '/' }, { name: 'Jonli efir' }]}
        sx={{ mb: 3 }}
      />
      <Grid xs={12}>
        <Box sx={{ display: 'inline-flex' }}>
          <CustomTabs
            value={currentTab}
            onChange={(e, newValue) => setCurrentTab(newValue)}
            sx={{ mb: 3 }}
          >
            <Tab label="Jonli efir" value="live" />
            <Tab label="Yozib olingan" value="recorded" />
          </CustomTabs>
        </Box>

        {currentTab === 'live' && (
          <LiveStreams
            title=""
            subheader={`${liveCount} ta jonli efir / Jami ${_liveStreams.length} ta kamera`}
            list={_liveStreams}
          />
        )}

        {currentTab === 'recorded' && (
          <EmptyContent
            filled
            title="Yozuvlar qismi tez orada qo'shiladi"
            description="Yozib olingan videolar bu yerda ko'rsatiladi"
            sx={{ py: 10 }}
          />
        )}
      </Grid>
    </DashboardContent>
  );
}
