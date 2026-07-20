// user-list-view.tsx
import type { IUserItem } from 'src/types/user';

import { useMemo, useState } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';

import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { UserTable } from '../user-list-table';

const USERS: IUserItem[] = [
  {
    id: '1',
    avatar: '/assets/illustrations/trainer.png',
    firstName: 'Jahongir',
    lastName: 'Olimov',
    createdAt: '2020/01/01',
    age: 33,
    role: 'Administrator',
    gender: 'male',
    status: 'active',
    email: 'jahongir.olimov@example.com',
    phone: '+1 555-123-4567',
  },
  {
    id: '2',
    avatar: '/assets/illustrations/girl.png',
    firstName: 'Dilfuza',
    lastName: 'Rahimova',
    createdAt: '2021/05/15',
    age: 31,
    role: 'Direktor',
    gender: 'female',
    status: 'active',
    email: 'dilfuza.rahimova@example.com',
    phone: '+1 555-987-6543',
  },
  {
    id: '3',
    avatar: '/assets/illustrations/boy.png',
    firstName: 'Shoxrux',
    lastName: 'Toshmatov',
    createdAt: '2019/11/20',
    age: 38,
    role: "O'qituvchi",
    gender: 'male',
    status: 'pending',
    email: 'shoxrux.toshmatov@example.com',
    phone: '+1 555-456-7890',
  },
  {
    id: '4',
    avatar: '/assets/illustrations/girl.png',
    firstName: 'Gulnora',
    lastName: 'Karimova',
    createdAt: '2018/07/25',
    age: 35,
    role: 'Ota-ona',
    gender: 'female',
    status: 'active',
    email: 'gulnora.karimova@example.com',
    phone: '+1 555-789-0123',
  },
  {
    id: '5',
    avatar: '/assets/illustrations/boy.png',
    firstName: 'Alisher',
    lastName: 'Navoiy',
    createdAt: '1979/03/30',
    age: 44,
    role: "O'quvchi",
    gender: 'male',
    status: 'banned',
    email: 'alisher.navoiy@example.com',
    phone: '+1 555-234-5678',
  },
  {
    id: '6',
    avatar: '/assets/illustrations/girl.png',
    firstName: 'Zulfiya',
    lastName: 'Yusupova',
    createdAt: '2017/09/15',
    age: 40,
    role: "O'quvchi",
    gender: 'female',
    status: 'active',
    email: 'zulfiya.yusupova@example.com',
    phone: '+1 555-345-6789',
  },
];

export function UserListView() {
  const dense = useBoolean(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');

  const availableRoles = useMemo(() => {
    const roles = new Set(USERS.map((user) => user.role));
    return Array.from(roles).sort();
  }, []);

  const filteredUsers = useMemo(
    () =>
      USERS.filter((user) => {
        const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
        const matchesSearch =
          fullName.includes(searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (user.phone && user.phone.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesRole = roleFilter === 'all' || user.role === roleFilter;

        return matchesSearch && matchesRole;
      }),
    [searchQuery, roleFilter]
  );

  const paginatedUsers = useMemo(
    () => filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [filteredUsers, page, rowsPerPage]
  );

  const handleDeleteRow = (id: string) => {
    console.log(`Delete user with id: ${id}`);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setPage(0);
  };

  const handleRoleFilterChange = (role: string) => {
    setRoleFilter(role);
    setPage(0);
  };

  return (
    <DashboardContent maxWidth="xl">
      <CustomBreadcrumbs
        heading="Foydalanuvchilar ro'yxati"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'User', href: paths.dashboard.user.root },
          { name: 'List' },
        ]}
        action={
          <Button
            component={RouterLink}
            href={paths.dashboard.user.new}
            variant="contained"
            startIcon={<Iconify icon="mingcute:add-line" />}
          >
            Yangi foydalanuvchi
          </Button>
        }
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <Stack spacing={2} sx={{ mb: 3 }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <FormControl size="small" sx={{ minWidth: 180 }}>
            <InputLabel>Role</InputLabel>
            <Select
              value={roleFilter}
              onChange={(e) => handleRoleFilterChange(e.target.value as string)}
              label="Role"
            >
              <MenuItem value="all">All Roles</MenuItem>
              {availableRoles.map((role) => (
                <MenuItem key={role} value={role}>
                  {role}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            fullWidth
            size="small"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Search users..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="eva:search-fill" />
                </InputAdornment>
              ),
            }}
            sx={{ maxWidth: 450 }}
          />
        </Stack>
      </Stack>

      <UserTable
        users={paginatedUsers}
        dense={dense.value}
        onDeleteRow={handleDeleteRow}
        page={page}
        rowsPerPage={rowsPerPage}
        count={filteredUsers.length}
        onPageChange={(newPage) => setPage(newPage)}
        onRowsPerPageChange={(newRowsPerPage) => {
          setRowsPerPage(newRowsPerPage);
          setPage(0);
        }}
      />
    </DashboardContent>
  );
}
