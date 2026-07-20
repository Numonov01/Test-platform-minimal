import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

import { SectionTitle } from './components/section-title';

// ----------------------------------------------------------------------

const FEATURES = [
  {
    icon: 'solar:videocamera-record-bold',
    title: 'Videokuzatuv',
    description: 'Darslarni onlayn kuzatish',
  },
  {
    icon: 'solar:users-group-rounded-bold',
    title: 'Professional ustozlar',
    description: "Tajribali o'qituvchilar",
  },
  {
    icon: 'solar:medal-ribbon-star-bold',
    title: 'Sertifikatlar',
    description: 'Davlat namunasida',
  },
  {
    icon: 'solar:book-2-bold',
    title: 'Zamonaviy dasturlar',
    description: 'Kelajak kasblari',
  },
];

// ----------------------------------------------------------------------

export function HomeFeatures() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip
            label="Nima uchun biz?"
            sx={{
              bgcolor: '#4F46E5',
              borderRadius: '24px',
              px: 3,
              py: 1.5,
              mb: 3,
              '&:hover': {
                bgcolor: '#4338CA',
              },
            }}
          />

          <SectionTitle title="Zamonaviy ta'limning barcha" txtGradient="imkoniyatlari" />
        </Box>

        <Grid container spacing={3}>
          {FEATURES.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  textAlign: 'center',
                  borderRadius: 3,
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: 3,
                    bgcolor: alpha('#4F46E5', 0.1),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                  }}
                >
                  <Iconify icon={feature.icon} width={40} color="#4F46E5" />
                </Box>

                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
                  {feature.title}
                </Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {feature.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
