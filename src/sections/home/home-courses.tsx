import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';

import { fShortenNumber } from 'src/utils/format-number';

import { maxLine } from 'src/theme/styles';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { Label, labelClasses } from 'src/components/label';

import { SectionTitle } from './components/section-title';

// ----------------------------------------------------------------------

const COURSES = [
  {
    id: '1',
    title: 'Robototexnika asoslari',
    category: 'Texnologiya',
    categoryColor: 'primary' as const,
    price: 350000,
    coverUrl: '/assets/illustrations/tish/robo.png',
    totalStudents: 45,
    duration: '3 oy',
  },
  {
    id: '2',
    title: 'Veb-dasturlash',
    category: 'IT',
    categoryColor: 'secondary' as const,
    price: 500000,
    coverUrl: '/assets/illustrations/tish/python.png',
    totalStudents: 120,
    duration: '6 oy',
  },
  {
    id: '3',
    title: 'Grafik dizayn',
    category: 'Dizayn',
    categoryColor: 'warning' as const,
    price: 400000,
    coverUrl: '/assets/illustrations/tish/chess.png',
    totalStudents: 78,
    duration: '4 oy',
  },
  {
    id: '4',
    title: 'Liderlik va boshqaruv',
    category: 'Boshqaruv',
    categoryColor: 'success' as const,
    price: 750000,
    coverUrl: '/assets/illustrations/tish/cefr.png',
    totalStudents: 35,
    duration: '2 oy',
  },
];

// ----------------------------------------------------------------------

export function HomeCourses() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' }, width: { xs: '100%', md: 'auto' } }}>
            <Chip
              label="O'quv dasturlari"
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

            <SectionTitle title="Eng mashhur" txtGradient="kurslarimiz" />
          </Box>

          <Button
            variant="outlined"
            endIcon={<Iconify icon="solar:arrow-right-outline" />}
            sx={{
              borderColor: '#4F46E5',
              color: '#4F46E5',
              display: { xs: 'none', md: 'inline-flex' },
            }}
          >
            Barchasini ko&apos;rish
          </Button>
        </Stack>

        {/* Courses Grid */}
        <Box
          sx={{
            gap: 3,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {COURSES.map((course) => (
            <Card key={course.id} sx={{ width: 1 }}>
              <Box sx={{ px: 3, pt: 3 }}>
                <Image
                  alt={course.title}
                  src={course.coverUrl}
                  ratio="5/4"
                  sx={{ borderRadius: 1.5 }}
                />
              </Box>

              <Box sx={{ px: 2, py: 2.5 }}>
                <Box
                  sx={{
                    mb: 1.5,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    [`& .${labelClasses.root}`]: {
                      typography: 'caption',
                      color: 'text.secondary',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Label startIcon={<Iconify width={12} icon="solar:clock-circle-outline" />}>
                      {course.duration}
                    </Label>
                    <Label startIcon={<Iconify width={12} icon="solar:users-group-rounded-bold" />}>
                      {fShortenNumber(course.totalStudents)}
                    </Label>
                  </Box>
                  <Label color={course.categoryColor || 'primary'}>{course.category}</Label>
                </Box>

                <Link
                  variant="subtitle2"
                  color="inherit"
                  underline="none"
                  sx={{ ...maxLine({ line: 2 }) }}
                >
                  {course.title}
                </Link>

                <Box
                  sx={{
                    mt: 2.5,
                    gap: 0.5,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Box component="span" sx={{ typography: 'h6' }}>
                    {course.price.toLocaleString()}
                  </Box>
                  <Box
                    component="span"
                    sx={{ typography: 'body2', color: 'text.secondary', flexGrow: 1, width: '80%' }}
                  >
                    / oy
                  </Box>
                  <Button variant="contained" color="primary" size="small" fullWidth>
                    Batafsil
                  </Button>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>

        {/* Mobile View All Button */}
        <Box sx={{ mt: 4, textAlign: 'center', display: { xs: 'block', md: 'none' } }}>
          <Button
            variant="outlined"
            fullWidth
            endIcon={<Iconify icon="solar:arrow-right-outline" />}
            sx={{
              borderColor: '#4F46E5',
              color: '#4F46E5',
              py: 1.5,
              '&:hover': {
                borderColor: '#4338CA',
                bgcolor: alpha('#4F46E5', 0.05),
              },
            }}
          >
            Barchasini ko&apos;rish
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
