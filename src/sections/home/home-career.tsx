import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Image } from 'src/components/image';
import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';

import { SectionTitle } from './components/section-title';

// ----------------------------------------------------------------------

const CAREERS = [
  {
    id: '1',
    title: 'Dasturchi',
    category: 'IT',
    bgColor: 'primary' as const,
    imageUrl: '/assets/illustrations/tish/python.png',
  },
  {
    id: '2',
    title: 'Shaxmat',
    category: 'Sport',
    bgColor: 'warning' as const,
    imageUrl: '/assets/illustrations/tish/chess.png',
  },
  {
    id: '3',
    title: 'Robototexnika',
    category: 'Texnika',
    bgColor: 'success' as const,
    imageUrl: '/assets/illustrations/tish/robo.png',
  },
];

// ----------------------------------------------------------------------

export function HomeCareer() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Chip
                label="Kasbga yo'naltirish"
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
              <SectionTitle title="O'zingizga mos kasbni" txtGradient="toping" />

              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  fontWeight: 400,
                }}
              >
                Professional kasbiy testdan o&apos;ting va kelajak kasbingizga qadam qo&apos;ying.
              </Typography>

              <Button
                variant="contained"
                size="large"
                startIcon={<Iconify icon="solar:diploma-verified-bold" />}
                sx={{
                  bgcolor: '#4F46E5',
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    bgcolor: '#4338CA',
                  },
                }}
              >
                Testni boshlash
              </Button>
            </Box>
          </Grid>

          {/* Right Content - Career Cards */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {CAREERS.map((career) => (
                <Grid item xs={12} sm={4} key={career.id}>
                  <Card
                    sx={{
                      borderRadius: 3,
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <Box sx={{ p: 2 }}>
                      <Image
                        alt={career.title}
                        src={career.imageUrl}
                        ratio="5/4"
                        sx={{ borderRadius: 1.5 }}
                      />
                    </Box>

                    <Box sx={{ p: 3, textAlign: 'center' }}>
                      <Label color={career.bgColor || 'primary'}>{career.category}</Label>
                      <Typography variant="h6">{career.title}</Typography>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
