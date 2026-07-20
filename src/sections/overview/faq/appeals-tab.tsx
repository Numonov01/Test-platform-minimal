import type { UseBooleanReturn } from 'src/hooks/use-boolean';

import { z as zod } from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import { fDate } from 'src/utils/format-time';

import { Label } from 'src/components/label';
import { toast } from 'src/components/snackbar';
import { Form, Field } from 'src/components/hook-form';

// ----------------------------------------------------------------------

const AppealSchema = zod.object({
  subject: zod.string().min(1, { message: 'Mavzu kiritilishi shart!' }),
  category: zod.string().min(1, { message: 'Kategoriya tanlanishi shart!' }),
  priority: zod.string().min(1, { message: 'Muhimlik darajasi tanlanishi shart!' }),
  description: zod
    .string()
    .min(10, { message: "Tavsif kamida 10 ta belgidan iborat bo'lishi kerak!" }),
});

type AppealSchemaType = zod.infer<typeof AppealSchema>;

// ----------------------------------------------------------------------

const CATEGORIES = [
  { value: 'technical', label: 'Texnik muammo' },
  { value: 'billing', label: "To'lov masalalari" },
  { value: 'account', label: 'Akkaunt muammolari' },
  { value: 'feature', label: "Yangi funksiya so'rovi" },
  { value: 'other', label: 'Boshqa' },
];

const PRIORITIES = [
  { value: 'low', label: 'Past' },
  { value: 'medium', label: "O'rta" },
  { value: 'high', label: 'Yuqori' },
  { value: 'urgent', label: 'Shoshilinch' },
];

// ----------------------------------------------------------------------

type Appeal = {
  id: number;
  subject: string;
  category: string;
  priority: string;
  description: string;
  status: 'pending' | 'in-progress' | 'resolved' | 'closed';
  createdAt: Date;
};

const MOCK_APPEALS: Appeal[] = [
  {
    id: 1,
    subject: 'Tizimga kirishda muammo',
    category: 'technical',
    priority: 'high',
    description:
      "Parol to'g'ri kiritilganda ham tizimga kira olmayapman. 'Invalid credentials' xatosi chiqyapti.",
    status: 'in-progress',
    createdAt: new Date(2026, 1, 10),
  },
  {
    id: 2,
    subject: "To'lov amalga oshmadi",
    category: 'billing',
    priority: 'urgent',
    description:
      'Bank kartamdan pul yechildi, lekin akkauntim aktivlashmadi. Tranzaksiya ID: TXN123456789',
    status: 'pending',
    createdAt: new Date(2026, 1, 12),
  },
  {
    id: 3,
    subject: "Yangi funksiya so'rovi",
    category: 'feature',
    priority: 'low',
    description:
      "Excel formatida hisobotlarni eksport qilish funksiyasini qo'shsangiz juda yaxshi bo'lardi.",
    status: 'resolved',
    createdAt: new Date(2026, 1, 5),
  },
  {
    id: 4,
    subject: "Profil ma'lumotlarini yangilash",
    category: 'account',
    priority: 'medium',
    description:
      "Profilimdagi telefon raqamni o'zgartirmoqchiman, lekin 'Save' tugmasi ishlamayapti.",
    status: 'resolved',
    createdAt: new Date(2026, 1, 8),
  },
];

// ----------------------------------------------------------------------

type Props = {
  dialog: UseBooleanReturn;
};

export function AppealsTab({ dialog }: Props) {
  const [appeals, setAppeals] = useState<Appeal[]>(MOCK_APPEALS);

  const defaultValues: AppealSchemaType = {
    subject: '',
    category: '',
    priority: '',
    description: '',
  };

  const methods = useForm<AppealSchemaType>({
    resolver: zodResolver(AppealSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const newAppeal: Appeal = {
        id: appeals.length + 1,
        ...data,
        status: 'pending',
        createdAt: new Date(),
      };

      setAppeals([newAppeal, ...appeals]);

      console.log('Appeal data:', data);
      toast.success('Murojaat muvaffaqiyatli yuborildi!');
      reset();
      dialog.onFalse();
    } catch (error) {
      console.error(error);
      toast.error('Xatolik yuz berdi!');
    }
  });

  const getCategoryLabel = (value: string) =>
    CATEGORIES.find((cat) => cat.value === value)?.label || value;

  const getPriorityLabel = (value: string) =>
    PRIORITIES.find((pri) => pri.value === value)?.label || value;

  const getStatusColor = (status: Appeal['status']) => {
    const colors = {
      pending: 'warning',
      'in-progress': 'info',
      resolved: 'success',
      closed: 'default',
    };
    return colors[status] as any;
  };

  const getStatusLabel = (status: Appeal['status']) => {
    const labels = {
      pending: 'Kutilmoqda',
      'in-progress': 'Jarayonda',
      resolved: 'Hal qilindi',
      closed: 'Yopildi',
    };
    return labels[status];
  };

  const getPriorityColor = (priority: string) => {
    const colors = {
      low: 'default',
      medium: 'info',
      high: 'warning',
      urgent: 'error',
    };
    return colors[priority as keyof typeof colors] as any;
  };

  return (
    <Box>
      <Stack spacing={3}>
        {appeals.length === 0 ? (
          <Card sx={{ p: 3 }}>
            <Typography variant="body2" color="text.secondary" textAlign="center" py={5}>
              Hozircha murojaatlar yo&apos;q. Yangi murojaat yarating.
            </Typography>
          </Card>
        ) : (
          appeals.map((appeal) => (
            <Card key={appeal.id} sx={{ p: 3 }}>
              <Stack spacing={2}>
                <Stack direction="row" alignItems="flex-start" justifyContent="space-between">
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" gutterBottom>
                      {appeal.subject}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {appeal.description}
                    </Typography>
                  </Box>
                  <Label color={getStatusColor(appeal.status)}>
                    {getStatusLabel(appeal.status)}
                  </Label>
                </Stack>

                <Divider />

                <Stack direction="row" flexWrap="wrap" spacing={2}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="caption" color="text.secondary">
                      Kategoriya:
                    </Typography>
                    <Chip label={getCategoryLabel(appeal.category)} size="small" />
                  </Stack>

                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="caption" color="text.secondary">
                      Muhimlik:
                    </Typography>
                    <Chip
                      label={getPriorityLabel(appeal.priority)}
                      size="small"
                      color={getPriorityColor(appeal.priority)}
                    />
                  </Stack>

                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="caption" color="text.secondary">
                      Sana:
                    </Typography>
                    <Typography variant="caption">{fDate(appeal.createdAt)}</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Card>
          ))
        )}
      </Stack>

      <Dialog open={dialog.value} onClose={dialog.onFalse} maxWidth="md" fullWidth>
        <DialogTitle>Yangi murojaat yaratish</DialogTitle>

        <DialogContent>
          <Form methods={methods} onSubmit={onSubmit}>
            <Stack spacing={3} sx={{ pt: 2 }}>
              <Field.Text name="subject" label="Mavzu" placeholder="Murojaat mavzusini kiriting" />

              <Grid container spacing={2}>
                <Grid xs={12} sm={6}>
                  <Field.Select name="category" label="Kategoriya">
                    {CATEGORIES.map((category) => (
                      <MenuItem key={category.value} value={category.value}>
                        {category.label}
                      </MenuItem>
                    ))}
                  </Field.Select>
                </Grid>

                <Grid xs={12} sm={6}>
                  <Field.Select name="priority" label="Muhimlik darajasi">
                    {PRIORITIES.map((priority) => (
                      <MenuItem key={priority.value} value={priority.value}>
                        {priority.label}
                      </MenuItem>
                    ))}
                  </Field.Select>
                </Grid>
              </Grid>

              <Field.Text
                name="description"
                label="Tavsif"
                placeholder="Murojaatingizni batafsil yozing"
                multiline
                rows={6}
              />

              <Box sx={{ bgcolor: 'background.neutral', p: 2, borderRadius: 1 }}>
                <Typography variant="subtitle2" gutterBottom>
                  📝 Ko&apos;rsatmalar
                </Typography>
                <Stack spacing={1}>
                  <Typography variant="caption" color="text.secondary">
                    • Muammoni iloji boricha aniq va batafsil tasvirlab bering
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    • Murojaatingiz uchun mos kategoriyani tanlang
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    • Muammoning dolzarbligiga qarab to&apos;g&apos;ri darajani belgilang
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    • Odatda 24-48 soat ichida javob beramiz
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Form>
        </DialogContent>

        <DialogActions>
          <Button variant="outlined" color="inherit" onClick={dialog.onFalse}>
            Bekor qilish
          </Button>
          <LoadingButton variant="contained" loading={isSubmitting} onClick={onSubmit}>
            Yuborish
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
