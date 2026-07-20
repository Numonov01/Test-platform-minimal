import { Box, Stack } from '@mui/material';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { HomeFaq } from '../home-faq';
import { HomeHero } from '../home-hero';
import { HomeCareer } from '../home-career';
import { HomeContact } from '../home-contact';
import { HomeCourses } from '../home-courses';
import { HomeFeatures } from '../home-features';
import { HomeTestimonials } from '../home-testimonials';

// ----------------------------------------------------------------------

export function HomeView() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: 'fixed' }}
      />

      <BackToTop />
      <Stack
        sx={{
          position: 'relative',
          bgcolor: 'background.default',
          maxWidth: '1280px',
          mx: 'auto',
          '& > div[id]': {
            scrollMarginTop: '80px',
          },
        }}
      >
        <Box id="bosh-sahifa">
          <HomeHero />
        </Box>
        <Box id="xususiyatlar">
          <HomeFeatures />
        </Box>
        <Box id="dasturlar">
          <HomeCourses />
        </Box>
        <Box id="tadbirlar">
          <HomeCareer />
        </Box>
        <Box id="sharhlar">
          <HomeTestimonials />
        </Box>
        <Box id="faq">
          <HomeFaq />
        </Box>
        <Box id="aloqa">
          <HomeContact />
        </Box>
      </Stack>
    </>
  );
}
