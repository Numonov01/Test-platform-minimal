import type { BoxProps } from '@mui/material/Box';
import type { CardProps } from '@mui/material/Card';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import { fPercent } from 'src/utils/format-number';

import { varAlpha } from 'src/theme/styles';

import { Image } from 'src/components/image';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title?: string;
  subheader?: string;
  list: {
    id: string;
    title: string;
    coverUrl: string;
    totalLesson: number;
    currentLesson: number;
  }[];
};

export function CourseContinue({ title, subheader, list, ...other }: Props) {
  return (
    <Box {...other}>
      {title && (
        <Box sx={{ mb: 3 }}>
          <Box component="h3" sx={{ typography: 'h4', mb: 1 }}>
            {title}
          </Box>
          {subheader && (
            <Box component="p" sx={{ typography: 'body2', color: 'text.secondary' }}>
              {subheader}
            </Box>
          )}
        </Box>
      )}

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
        {list.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------

type ItemProps = BoxProps & {
  item: Props['list'][number];
};

function Item({ item, sx, ...other }: ItemProps) {
  const percent = (item.currentLesson / item.totalLesson) * 100;

  return (
    <Card sx={{ p: 3, ...sx }}>
      <Box sx={{ mb: 2 }}>
        <Image alt={item.title} src={item.coverUrl} ratio="5/4" sx={{ borderRadius: 1.5 }} />
      </Box>

      <Link
        color="inherit"
        sx={{
          mb: 1.5,
          typography: 'subtitle1',
          fontWeight: 600,
          display: 'block',
          '&:hover': { color: 'primary.main' },
        }}
      >
        {item.title}
      </Link>

      <Box
        component="span"
        sx={{
          color: 'text.secondary',
          typography: 'body2',
          display: 'block',
          mb: 2,
        }}
      >
        Darslar: {item.currentLesson}/{item.totalLesson}
      </Box>

      <Box sx={{ width: 1, display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <LinearProgress
          color="warning"
          variant="determinate"
          value={percent}
          sx={{
            flex: 1,
            height: 8,
            borderRadius: 1,
            bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.16),
            [` .${linearProgressClasses.bar}`]: { opacity: 0.8, borderRadius: 1 },
          }}
        />
        <Box
          component="span"
          sx={{
            minWidth: 45,
            typography: 'subtitle2',
            color: 'text.primary',
            fontWeight: 'fontWeightMedium',
          }}
        >
          {fPercent(percent)}
        </Box>
      </Box>
    </Card>
  );
}
