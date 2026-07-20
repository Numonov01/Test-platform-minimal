import type { IOrientationItem } from 'src/types/orientation';

import { z as zod } from 'zod';
import { useMemo, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import ButtonBase from '@mui/material/ButtonBase';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControlLabel from '@mui/material/FormControlLabel';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import {
  _roles,
  ORIENTATION_TYPE_OPTIONS,
  ORIENTATION_LEVEL_OPTIONS,
  ORIENTATION_SKILL_OPTIONS,
  ORIENTATION_BENEFIT_OPTIONS,
  ORIENTATION_SCHEDULE_OPTIONS,
} from 'src/_mock';

import { toast } from 'src/components/snackbar';
import { Iconify } from 'src/components/iconify';
import { Form, Field, schemaHelper } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export type NewOrientationSchemaType = zod.infer<typeof NewOrientationSchema>;

export const NewOrientationSchema = zod.object({
  title: zod.string().min(1, { message: 'Title is required!' }),
  content: zod.string().min(1, { message: 'Content is required!' }),
  orientationTypes: zod.string().array().nonempty({ message: 'Choose at least one option!' }),
  role: schemaHelper.objectOrNull<string | null>({
    message: { required_error: 'Role is required!' },
  }),
  skills: zod.string().array().nonempty({ message: 'Choose at least one option!' }),
  schedule: zod.string().array().nonempty({ message: 'Choose at least one option!' }),
  locations: zod.string().array().nonempty({ message: 'Choose at least one option!' }),
  startDate: schemaHelper.date({ message: { required_error: 'Start date is required!' } }),
  duration: zod.object({
    value: zod.number().min(1, { message: 'Duration is required!' }),
    // Not required
    type: zod.string(),
  }),
  benefits: zod.string().array().nonempty({ message: 'Choose at least one option!' }),
  // Not required
  level: zod.string(),
});

// ----------------------------------------------------------------------

type Props = {
  currentOrientation?: IOrientationItem;
};

export function OrientationNewEditForm({ currentOrientation }: Props) {
  const router = useRouter();

  const defaultValues = useMemo(
    () => ({
      title: currentOrientation?.title || '',
      content: currentOrientation?.content || '',
      orientationTypes: currentOrientation?.orientationTypes || [],
      level: currentOrientation?.level || 'Beginner',
      role: currentOrientation?.role || _roles[1],
      skills: currentOrientation?.skills || [],
      schedule: currentOrientation?.schedule || [],
      locations: currentOrientation?.locations || [],
      startDate: currentOrientation?.startDate || null,
      duration: currentOrientation?.duration || { type: 'Weeks', value: 0 },
      benefits: currentOrientation?.benefits || [],
    }),
    [currentOrientation]
  );

  const methods = useForm<NewOrientationSchemaType>({
    mode: 'all',
    resolver: zodResolver(NewOrientationSchema),
    defaultValues,
  });

  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    if (currentOrientation) {
      reset(defaultValues);
    }
  }, [currentOrientation, defaultValues, reset]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      toast.success(currentOrientation ? 'Update success!' : 'Create success!');
      router.push(paths.dashboard.orientation.root);
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const renderDetails = (
    <Card>
      <CardHeader title="Details" subheader="Title, short description, image..." sx={{ mb: 3 }} />

      <Divider />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Stack spacing={1.5}>
          <Typography variant="subtitle2">Title</Typography>
          <Field.Text name="title" placeholder="Ex: New Employee Orientation..." />
        </Stack>

        <Stack spacing={1.5}>
          <Typography variant="subtitle2">Content</Typography>
          <Field.Editor name="content" sx={{ maxHeight: 480 }} />
        </Stack>
      </Stack>
    </Card>
  );

  const renderProperties = (
    <Card>
      <CardHeader
        title="Properties"
        subheader="Additional functions and attributes..."
        sx={{ mb: 3 }}
      />

      <Divider />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Stack spacing={1}>
          <Typography variant="subtitle2">Orientation type</Typography>
          <Field.MultiCheckbox
            row
            name="orientationTypes"
            options={ORIENTATION_TYPE_OPTIONS}
            sx={{ gap: 4 }}
          />
        </Stack>

        <Stack spacing={1}>
          <Typography variant="subtitle2">Level</Typography>
          <Field.RadioGroup row name="level" options={ORIENTATION_LEVEL_OPTIONS} sx={{ gap: 4 }} />
        </Stack>

        <Stack spacing={1.5}>
          <Typography variant="subtitle2">Role</Typography>
          <Field.Autocomplete
            name="role"
            autoHighlight
            options={_roles.map((option) => option)}
            getOptionLabel={(option) => option}
            renderOption={(props, option) => (
              <li {...props} key={option}>
                {option}
              </li>
            )}
          />
        </Stack>

        <Stack spacing={1.5}>
          <Typography variant="subtitle2">Skills</Typography>
          <Field.Autocomplete
            name="skills"
            placeholder="+ Skills"
            multiple
            disableCloseOnSelect
            options={ORIENTATION_SKILL_OPTIONS.map((option) => option)}
            getOptionLabel={(option) => option}
            renderOption={(props, option) => (
              <li {...props} key={option}>
                {option}
              </li>
            )}
            renderTags={(selected, getTagProps) =>
              selected.map((option, index) => (
                <Chip
                  {...getTagProps({ index })}
                  key={option}
                  label={option}
                  size="small"
                  color="info"
                  variant="soft"
                />
              ))
            }
          />
        </Stack>

        <Stack spacing={1.5}>
          <Typography variant="subtitle2">Schedule</Typography>
          <Field.Autocomplete
            name="schedule"
            placeholder="+ Schedule"
            multiple
            disableCloseOnSelect
            options={ORIENTATION_SCHEDULE_OPTIONS.map((option) => option)}
            getOptionLabel={(option) => option}
            renderOption={(props, option) => (
              <li {...props} key={option}>
                {option}
              </li>
            )}
            renderTags={(selected, getTagProps) =>
              selected.map((option, index) => (
                <Chip
                  {...getTagProps({ index })}
                  key={option}
                  label={option}
                  size="small"
                  color="info"
                  variant="soft"
                />
              ))
            }
          />
        </Stack>

        <Stack spacing={1.5}>
          <Typography variant="subtitle2">Locations</Typography>
          <Field.CountrySelect multiple name="locations" placeholder="+ Locations" />
        </Stack>

        <Stack spacing={1.5}>
          <Typography variant="subtitle2">Start Date</Typography>

          <Field.DatePicker name="startDate" />
        </Stack>

        <Stack spacing={2}>
          <Typography variant="subtitle2">Duration</Typography>

          <Controller
            name="duration.type"
            control={control}
            render={({ field }) => (
              <Box gap={2} display="grid" gridTemplateColumns="repeat(2, 1fr)">
                {[
                  {
                    label: 'Weeks',
                    icon: <Iconify icon="solar:calendar-date-bold" width={32} sx={{ mb: 2 }} />,
                  },
                  {
                    label: 'Days',
                    icon: (
                      <Iconify icon="solar:calendar-minimalistic-bold" width={32} sx={{ mb: 2 }} />
                    ),
                  },
                ].map((item) => (
                  <Paper
                    component={ButtonBase}
                    variant="outlined"
                    key={item.label}
                    onClick={() => field.onChange(item.label)}
                    sx={{
                      p: 2.5,
                      borderRadius: 1,
                      typography: 'subtitle2',
                      flexDirection: 'column',
                      ...(item.label === field.value && {
                        borderWidth: 2,
                        borderColor: 'text.primary',
                      }),
                    }}
                  >
                    {item.icon}
                    {item.label}
                  </Paper>
                ))}
              </Box>
            )}
          />

          <Field.Text
            name="duration.value"
            placeholder="0"
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Box sx={{ typography: 'subtitle2', color: 'text.disabled' }}>#</Box>
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <Stack spacing={1}>
          <Typography variant="subtitle2">Benefits</Typography>
          <Field.MultiCheckbox
            name="benefits"
            options={ORIENTATION_BENEFIT_OPTIONS}
            sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}
          />
        </Stack>
      </Stack>
    </Card>
  );

  const renderActions = (
    <Box display="flex" alignItems="center" flexWrap="wrap">
      <FormControlLabel
        control={<Switch defaultChecked inputProps={{ id: 'publish-switch' }} />}
        label="Publish"
        sx={{ flexGrow: 1, pl: 3 }}
      />

      <LoadingButton
        type="submit"
        variant="contained"
        size="large"
        loading={isSubmitting}
        sx={{ ml: 2 }}
      >
        {!currentOrientation ? 'Create orientation' : 'Save changes'}
      </LoadingButton>
    </Box>
  );

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Stack spacing={{ xs: 3, md: 5 }} sx={{ mx: 'auto', maxWidth: { xs: 720, xl: 880 } }}>
        {renderDetails}

        {renderProperties}

        {renderActions}
      </Stack>
    </Form>
  );
}
