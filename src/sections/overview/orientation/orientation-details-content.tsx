import type { IOrientationItem } from 'src/types/orientation';

import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';

import { fDate } from 'src/utils/format-time';

import { Iconify } from 'src/components/iconify';
import { Markdown } from 'src/components/markdown';

// ----------------------------------------------------------------------

type Props = {
  orientation?: IOrientationItem;
};

export function OrientationDetailsContent({ orientation }: Props) {
  const renderContent = (
    <Card sx={{ p: 3, gap: 3, display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4">{orientation?.title}</Typography>

      <Markdown children={orientation?.content} />

      <Stack spacing={2}>
        <Typography variant="h6">Skills</Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
          {orientation?.skills.map((skill) => <Chip key={skill} label={skill} variant="soft" />)}
        </Stack>
      </Stack>

      <Stack spacing={2}>
        <Typography variant="h6">Benefits</Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
          {orientation?.benefits.map((benefit) => (
            <Chip key={benefit} label={benefit} variant="soft" />
          ))}
        </Stack>
      </Stack>
    </Card>
  );

  const renderOverview = (
    <Card sx={{ p: 3, gap: 2, display: 'flex', flexDirection: 'column' }}>
      {[
        {
          label: 'Date posted',
          value: fDate(orientation?.createdAt),
          icon: <Iconify icon="solar:calendar-date-bold" />,
        },
        {
          label: 'Start date',
          value: fDate(orientation?.startDate),
          icon: <Iconify icon="solar:calendar-date-bold" />,
        },
        {
          label: 'Orientation type',
          value: orientation?.orientationTypes,
          icon: <Iconify icon="solar:clock-circle-bold" />,
        },
        {
          label: 'Duration',
          value: `${orientation?.duration.value} ${orientation?.duration.type}`,
          icon: <Iconify icon="solar:calendar-minimalistic-bold" />,
        },
        {
          label: 'Level',
          value: orientation?.level,
          icon: <Iconify icon="carbon:skill-level-basic" />,
        },
      ].map((item) => (
        <Stack key={item.label} spacing={1.5} direction="row">
          {item.icon}
          <ListItemText
            primary={item.label}
            secondary={item.value}
            primaryTypographyProps={{ typography: 'body2', color: 'text.secondary', mb: 0.5 }}
            secondaryTypographyProps={{
              component: 'span',
              color: 'text.primary',
              typography: 'subtitle2',
            }}
          />
        </Stack>
      ))}
    </Card>
  );

  const renderCompany = (
    <Paper variant="outlined" sx={{ p: 3, mt: 3, gap: 2, borderRadius: 2, display: 'flex' }}>
      <Avatar
        alt={orientation?.company.name}
        src={orientation?.company.logo}
        variant="rounded"
        sx={{ width: 64, height: 64 }}
      />

      <Stack spacing={1}>
        <Typography variant="subtitle1">{orientation?.company.name}</Typography>
        <Typography variant="body2">{orientation?.company.fullAddress}</Typography>
        <Typography variant="body2">{orientation?.company.phoneNumber}</Typography>
      </Stack>
    </Paper>
  );

  return (
    <Grid container spacing={3}>
      <Grid xs={12} md={8}>
        {renderContent}
      </Grid>

      <Grid xs={12} md={4}>
        {renderOverview}

        {renderCompany}
      </Grid>
    </Grid>
  );
}
