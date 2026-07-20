import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import { Iconify } from 'src/components/iconify';

import { SectionTitle } from './components/section-title';

// ----------------------------------------------------------------------

export function HomeHero() {
  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="xl">
        {/* Hero Section */}
        <Grid container spacing={4} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 3, textAlign: { xs: 'center', md: 'left' } }}>
              <Chip
                label='Respublika "Kelajak" markazi'
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
            </Box>

            <SectionTitle
              title="Kelajak kasblarini"
              txtGradient="bugundan o'rganing!"
              sx={{ mb: { xs: 5, md: 8 }, textAlign: { xs: 'center', md: 'left' } }}
            />

            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                mb: 4,
                fontWeight: 400,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Zamonaviy o&apos;quv dasturlari, professional o&apos;qituvchilar va keng imkoniyatlar.
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{
                mb: 6,
                alignItems: { xs: 'center', md: 'flex-start' },
                justifyContent: { xs: 'center', md: 'flex-start' },
                width: { xs: '100%', md: 'auto' },
              }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<Iconify icon="solar:user-plus-bold" />}
                sx={{
                  bgcolor: '#4F46E5',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  textTransform: 'none',
                  width: { xs: '100%', sm: 'auto' },
                  '&:hover': {
                    bgcolor: '#4338CA',
                  },
                }}
              >
                Bepul ro&apos;yxatdan o&apos;tish
              </Button>

              <Button
                variant="outlined"
                size="large"
                startIcon={<Iconify icon="solar:play-circle-bold" />}
                sx={{
                  borderColor: '#4F46E5',
                  color: '#4F46E5',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  textTransform: 'none',
                  width: { xs: '100%', sm: 'auto' },
                  '&:hover': {
                    borderColor: '#4338CA',
                    bgcolor: alpha('#4F46E5', 0.05),
                  },
                }}
              >
                Dasturlarni ko&apos;rish
              </Button>
            </Stack>

            {/* Stats */}
            <Grid container spacing={4} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Grid item xs={4}>
                <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                  <Typography variant="h3" sx={{ fontWeight: 700, color: '#1F2937', mb: 0.5 }}>
                    12,000+
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    O&apos;quvchilar
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                  <Typography variant="h3" sx={{ fontWeight: 700, color: '#1F2937', mb: 0.5 }}>
                    450+
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    To&apos;garaklar
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                  <Typography variant="h3" sx={{ fontWeight: 700, color: '#1F2937', mb: 0.5 }}>
                    50+
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Markazlar
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          {/* Right Content - Blue Card */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
              <Card
                sx={{
                  bgcolor: '#4F46E5',
                  color: 'white',
                  borderRadius: 4,
                  p: 4,
                  minHeight: 400,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 20px 60px rgba(79, 70, 229, 0.4)',
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 120,
                      height: 120,
                      borderRadius: '50%',
                      bgcolor: 'rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 4,
                    }}
                  >
                    <Iconify icon="heroicons:academic-cap-solid" width={64} />
                  </Box>

                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                    Kelajak Markazi
                  </Typography>

                  <Typography variant="h6" sx={{ opacity: 0.9 }}>
                    Ta&apos;lim - kelajak kaliti
                  </Typography>
                </CardContent>
              </Card>

              {/* Satisfaction Badge */}
              <Card
                sx={{
                  position: 'absolute',
                  bottom: -20,
                  left: { xs: '50%', md: -30 },
                  transform: { xs: 'translateX(-50%)', md: 'none' },
                  bgcolor: 'white',
                  borderRadius: 3,
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                  zIndex: 10,
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    bgcolor: alpha('#10B981', 0.1),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Iconify icon="solar:verified-check-bold" width={28} color="#10B981" />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#1F2937' }}>
                    95% o&apos;quvchilar
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Mamnun
                  </Typography>
                </Box>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
