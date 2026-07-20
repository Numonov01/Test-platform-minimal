import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { SectionTitle } from './components/section-title';

// ----------------------------------------------------------------------

const TESTIMONIALS = [
  {
    id: '1',
    name: 'Karimova Dilshoda',
    role: 'Ota-ona',
    avatar: 'KD',
    avatarColor: '#E0E7FF',
    rating: 5,
    comment:
      "Kelajak markazi farzandimning kelajagini o'zgartirdi. Robototexnika to'garagida o'qiydi.",
  },
  {
    id: '2',
    name: 'Rahimov Jasur',
    role: "O'quvchi",
    avatar: 'RJ',
    avatarColor: '#FCE7F3',
    rating: 5,
    comment: "Dasturlash kurslari juda sifatli. Hozir o'zim loyihalarim ustida ishlayaman.",
  },
  {
    id: '3',
    name: 'Nazarova Nodira',
    role: "O'qituvchi",
    avatar: 'NN',
    avatarColor: '#DBEAFE',
    rating: 5,
    comment: "Markazda ajoyib sharoitlar. Zamonaviy uskunalalar va qo'llab-quvvatlash.",
  },
];

// ----------------------------------------------------------------------

export function HomeTestimonials() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Chip
            label="Fikrlar"
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

          <SectionTitle title="Biz haqimizda nima" txtGradient="deyishadi" />
        </Box>

        {/* Testimonials Grid */}
        <Box
          sx={{
            gap: 3,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {TESTIMONIALS.map((testimonial) => (
            <Card
              key={testimonial.id}
              sx={{
                p: 4,
                borderRadius: 3,
                transition: 'all 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}
            >
              {/* Rating */}
              <Rating
                value={testimonial.rating}
                readOnly
                sx={{
                  mb: 2,
                  '& .MuiRating-iconFilled': {
                    color: '#FCD34D',
                  },
                }}
              />

              {/* Comment */}
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 3,
                  lineHeight: 1.8,
                  minHeight: 80,
                }}
              >
                &quot;{testimonial.comment}&quot;
              </Typography>

              {/* User Info */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar
                  sx={{
                    bgcolor: testimonial.avatarColor,
                    color: '#4F46E5',
                    fontWeight: 700,
                    fontSize: '1rem',
                  }}
                >
                  {testimonial.avatar}
                </Avatar>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#1F2937' }}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {testimonial.role}
                  </Typography>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
