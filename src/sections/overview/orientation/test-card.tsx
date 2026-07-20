import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type TestCardProps = {
  id: string;
  title: string;
  description: string;
  totalQuestions: number;
  duration: number; // in minutes
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  onStart: () => void;
};

export function TestCard({
  id,
  title,
  description,
  totalQuestions,
  duration,
  difficulty,
  onStart,
}: TestCardProps) {
  const getDifficultyColor = () => {
    switch (difficulty) {
      case 'Beginner':
        return 'success';
      case 'Intermediate':
        return 'warning';
      case 'Advanced':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Card sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Stack spacing={2} sx={{ flexGrow: 1 }}>
        <Stack direction="row" alignItems="flex-start" justifyContent="space-between">
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Label color={getDifficultyColor()}>{difficulty}</Label>
        </Stack>

        <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
          {description}
        </Typography>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack spacing={1.5}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Iconify icon="solar:question-circle-bold" width={20} />
            <Typography variant="body2">{totalQuestions} ta savol</Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Iconify icon="solar:clock-circle-bold" width={20} />
            <Typography variant="body2">{duration} daqiqa</Typography>
          </Stack>
        </Stack>
      </Stack>

      <Button
        variant="contained"
        size="medium"
        fullWidth
        onClick={onStart}
        sx={{ mt: 2 }}
        startIcon={<Iconify icon="solar:play-circle-bold" />}
      >
        Testni boshlash
      </Button>
    </Card>
  );
}
