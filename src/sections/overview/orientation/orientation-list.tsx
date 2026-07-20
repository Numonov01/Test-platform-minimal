import type { IOrientationItem } from 'src/types/orientation';

import { useCallback } from 'react';

import Box from '@mui/material/Box';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { OrientationItem } from './orientation-item';

// ----------------------------------------------------------------------

type Props = {
  orientations: IOrientationItem[];
};

export function OrientationList({ orientations }: Props) {
  const router = useRouter();

  const handleView = useCallback(
    (id: string) => {
      router.push(paths.dashboard.orientation.details(id));
    },
    [router]
  );

  const handleEdit = useCallback(
    (id: string) => {
      router.push(paths.dashboard.orientation.edit(id));
    },
    [router]
  );

  const handleDelete = useCallback((id: string) => {
    console.info('DELETE', id);
  }, []);

  return (
    <>
      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{ xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
      >
        {orientations.map((orientation) => (
          <OrientationItem
            key={orientation.id}
            orientation={orientation}
            onView={() => handleView(orientation.id)}
            onEdit={() => handleEdit(orientation.id)}
            onDelete={() => handleDelete(orientation.id)}
          />
        ))}
      </Box>

      {orientations.length > 8 && (
        <Pagination
          count={8}
          sx={{
            mt: { xs: 8, md: 8 },
            [`& .${paginationClasses.ul}`]: { justifyContent: 'center' },
          }}
        />
      )}
    </>
  );
}
