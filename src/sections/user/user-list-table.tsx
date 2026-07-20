// user-list-table.tsx
import type { IUserItem } from 'src/types/user';

import React from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import IconButton from '@mui/material/IconButton';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { ConfirmDialog } from 'src/components/custom-dialog';
import { usePopover, CustomPopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

interface UserTableProps {
  users: IUserItem[];
  dense?: boolean;
  onDeleteRow: (id: string) => void;
  page: number;
  rowsPerPage: number;
  count: number;
  onPageChange: (newPage: number) => void;
  onRowsPerPageChange: (newRowsPerPage: number) => void;
}

export function UserTable({
  users,
  dense = false,
  onDeleteRow,
  page,
  rowsPerPage,
  count,
  onPageChange,
  onRowsPerPageChange,
}: UserTableProps) {
  const confirm = useBoolean();
  const popover = usePopover();
  const [selectedId, setSelectedId] = React.useState<string | null>(null);

  const handleOpenConfirm = (id: string) => {
    setSelectedId(id);
    confirm.onTrue();
    popover.onClose();
  };

  const handleDeleteRow = () => {
    if (selectedId) {
      onDeleteRow(selectedId);
      confirm.onFalse();
    }
  };

  return (
    <>
      <TableContainer component={Paper} >
        <Table size={dense ? 'small' : 'medium'}>
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell>Telefon nomer</TableCell>
              <TableCell>Role</TableCell>
              {/* <TableCell>Gender</TableCell> */}
              <TableCell>Status</TableCell>
              <TableCell>Qoshilgan sana</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} hover>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar alt={`${user.firstName} ${user.lastName}`} src={user.avatar} />
                    <Stack sx={{ typography: 'body2', flex: '1 1 auto', alignItems: 'flex-start' }}>
                      <Link
                        component={RouterLink}
                        href={paths.dashboard.user.edit(user.id)}
                        color="inherit"
                        variant="subtitle2"
                      >
                        {`${user.firstName} ${user.lastName}`}
                      </Link>
                      <Box component="span" sx={{ color: 'text.disabled' }}>
                        {user.email}
                      </Box>
                    </Stack>
                  </Stack>
                </TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.role}</TableCell>
                {/* <TableCell>
                  <Label variant="soft" color={user.gender === 'male' ? 'info' : 'secondary'}>
                    {user.gender}
                  </Label>
                </TableCell> */}
                <TableCell>
                  <Label
                    variant="soft"
                    color={
                      (user.status === 'active' && 'success') ||
                      (user.status === 'pending' && 'warning') ||
                      (user.status === 'banned' && 'error') ||
                      'default'
                    }
                    >
                    {user.status}
                  </Label>
                </TableCell>

                <TableCell>{user.createdAt}</TableCell>

                <TableCell align="right">
                  <Stack direction="row" spacing={1} justifyContent="flex-end">
                    <Tooltip title="Edit" placement="top" arrow>
                      <IconButton
                        component={RouterLink}
                        href={paths.dashboard.user.edit(user.id)}
                        color="default"
                      >
                        <Iconify icon="solar:pen-bold" />
                      </IconButton>
                    </Tooltip>

                    <IconButton
                      color={popover.open && selectedId === user.id ? 'inherit' : 'default'}
                      onClick={(e) => {
                        popover.onOpen(e);
                        setSelectedId(user.id);
                      }}
                    >
                      <Iconify icon="eva:more-vertical-fill" />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(event, newPage) => onPageChange(newPage)}
        onRowsPerPageChange={(event) => onRowsPerPageChange(parseInt(event.target.value, 10))}
      />

      <CustomPopover
        open={popover.open}
        anchorEl={popover.anchorEl}
        onClose={popover.onClose}
        sx={{ width: 140 }}
      >
        <Stack spacing={0.5}>
          <Button
            fullWidth
            color="inherit"
            component={RouterLink}
            href={selectedId ? paths.dashboard.user.edit(selectedId) : '#'}
            startIcon={<Iconify icon="solar:pen-bold" />}
            sx={{ justifyContent: 'flex-start' }}
          >
            Edit
          </Button>

          <Button
            fullWidth
            color="error"
            startIcon={<Iconify icon="solar:trash-bin-trash-bold" />}
            onClick={() => selectedId && handleOpenConfirm(selectedId)}
            sx={{ justifyContent: 'flex-start' }}
          >
            Delete
          </Button>
        </Stack>
      </CustomPopover>

      <ConfirmDialog
        open={confirm.value}
        onClose={confirm.onFalse}
        title="Delete"
        content="Are you sure want to delete?"
        action={
          <Button variant="contained" color="error" onClick={handleDeleteRow}>
            Delete
          </Button>
        }
      />
    </>
  );
}
