import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';

import { maxLine } from 'src/theme/styles';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { Label, labelClasses } from 'src/components/label';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  title: string;
  list: {
    id: string;
    title: string;
    category: string;
    categoryColor?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error';
    price: number;
    coverUrl: string;
    totalStudents: number;
  }[];
};

export function CourseFeatured({ title, list, ...other }: Props) {
  return (
    <Box {...other}>
      <Typography variant="h6">{title}</Typography>
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
        {list.map((course) => (
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
                    1h 40m
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
                  {course.price}
                </Box>
                <Box
                  component="span"
                  sx={{ typography: 'body2', color: 'text.secondary', flexGrow: 1, width: '80%' }}
                >
                  / oy
                </Box>
                <Button variant="contained" color="primary" size="small" fullWidth>
                  Yozilish
                </Button>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
