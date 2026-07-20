import { useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';
import { CustomTabs } from 'src/components/custom-tabs';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { CourseFeatured } from '../course-featured';
import { CourseContinue } from '../course-continue';

// ----------------------------------------------------------------------

const FEATURED_COURSES = [
  {
    id: '1',
    title: "Shaxmat o'yinini o'rganish to'garagi - ilg'or darajagacha",
    category: 'Sport',
    categoryColor: 'warning' as const,
    price: 250000,
    coverUrl: '/assets/illustrations/tish/chess.png',
    totalStudents: 1234,
  },
  {
    id: '2',
    title: "Matematika bo'yicha olimpiada tayyorgarlik to'garagi",
    category: "O'quv",
    categoryColor: 'primary' as const,
    price: 180000,
    coverUrl: '/assets/illustrations/tish/math.png',
    totalStudents: 856,
  },
  {
    id: '3',
    title: 'Ingliz tili intensiv kursi - IELTS/CEFR imtihonlariga tayyorgarlik',
    category: 'Til',
    categoryColor: 'info' as const,
    price: 220000,
    coverUrl: '/assets/illustrations/tish/cefr.png',
    totalStudents: 2340,
  },
];

const CONTINUE_COURSES = [
  {
    id: '1',
    title: 'Matematika olimpiadasi',
    coverUrl: '/assets/illustrations/tish/math.png',
    totalLesson: 48,
    currentLesson: 32,
  },
  {
    id: '2',
    title: 'Ingliz tili',
    coverUrl: '/assets/illustrations/tish/cefr.png',
    totalLesson: 60,
    currentLesson: 45,
  },
  {
    id: '3',
    title: 'Robototexnika',
    coverUrl: '/assets/illustrations/tish/robo.png',
    totalLesson: 36,
    currentLesson: 18,
  },
  {
    id: '4',
    title: 'Python dasturlash',
    coverUrl: '/assets/illustrations/tish/python.png',
    totalLesson: 52,
    currentLesson: 26,
  },
];

// ----------------------------------------------------------------------

export function OverviewCourseView() {
  const [currentTab, setCurrentTab] = useState('all');

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  };

  return (
    <DashboardContent maxWidth="xl">
      <CustomBreadcrumbs
        heading="To'garaklarni boshqarish"
        links={[{ name: 'Dashboard', href: '/' }, { name: 'To`garaklar' }]}
        action={
          <Button variant="contained" startIcon={<Iconify icon="mingcute:add-line" />}>
            Yangi to`garak
          </Button>
        }
      />
      {/* Tabs and Search */}
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        alignItems={{ xs: 'stretch', md: 'center' }}
        justifyContent={{ xs: 'flex-start', md: 'space-between' }}
        sx={{ mb: 2, mt: 3 }}
      >
        <Box sx={{ display: 'inline-flex' }}>
          <CustomTabs value={currentTab} onChange={handleChangeTab}>
            <Tab value="all" label="Barchasi" />
            <Tab value="my" label="Mening to'garaklarim" />
          </CustomTabs>
        </Box>

        <TextField
          size="medium"
          placeholder="To'garaklarni qidirish..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon="eva:search-fill" />
              </InputAdornment>
            ),
          }}
          sx={{ width: { xs: '100%', md: 450 } }}
        />
      </Stack>

      {currentTab === 'all' ? (
        <CourseFeatured title="" list={FEATURED_COURSES} />
      ) : (
        <CourseContinue title="" list={CONTINUE_COURSES} />
      )}
    </DashboardContent>
  );
}
