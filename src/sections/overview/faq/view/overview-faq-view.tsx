import { useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { Button } from '@mui/material';

import { useBoolean } from 'src/hooks/use-boolean';

import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';
import { CustomTabs } from 'src/components/custom-tabs';
import { EmptyContent } from 'src/components/empty-content';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { AppealsTab } from '../appeals-tab';
import { FaqContent } from '../faq-content';

// ----------------------------------------------------------------------

export function OverviewFaqView() {
  const [currentTab, setCurrentTab] = useState('appeals');
  const dialog = useBoolean();

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  };

  return (
    <DashboardContent maxWidth="xl">
      <CustomBreadcrumbs
        heading="Murojaatlar va FAQ"
        links={[{ name: 'Dashboard', href: '/' }, { name: 'Murojaatlar' }]}
        action={
          <Button
            variant="contained"
            startIcon={<Iconify icon="mingcute:add-line" />}
            onClick={dialog.onTrue}
          >
            Yangi murojaat
          </Button>
        }
      />

      <Box sx={{ mb: 3, mt: 2, display: 'inline-flex' }}>
        <CustomTabs value={currentTab} onChange={handleChangeTab}>
          <Tab value="appeals" label="Murojaatlarim" />
          <Tab value="faq" label="FAQ" />
          <Tab value="forum" label="Forum" />
        </CustomTabs>
      </Box>

      {currentTab === 'appeals' && <AppealsTab dialog={dialog} />}

      {currentTab === 'faq' && <FaqContent />}

      {currentTab === 'forum' && (
        <EmptyContent
          filled
          title="Forum"
          description="Forum bo'limi hozircha ishlab chiqilmoqda"
          sx={{ py: 10 }}
        />
      )}
    </DashboardContent>
  );
}
