import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { useBoolean } from 'src/hooks/use-boolean';

import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';
import { CustomTabs } from 'src/components/custom-tabs';
import { EmptyContent } from 'src/components/empty-content';

import { FileWidget } from '../../../file-manager/file-widget';
import { FileRecentItem } from '../../../file-manager/file-recent-item';
import { FileManagerFileItem } from '../../../file-manager/file-manager-file-item';
import { FileManagerNewFolderDialog } from '../../../file-manager/file-manager-new-folder-dialog';

// ----------------------------------------------------------------------

const GB = 1000000000 * 24;

const STUDENT_FILES = [
  {
    id: 'file-1',
    name: 'Matematika-vazifa.pdf',
    url: '/assets/files/matematika-vazifa.pdf',
    size: 2457600, // 2.4 MB
    type: 'pdf',
    createdAt: '2026-02-10T10:30:00',
    modifiedAt: '2026-02-10T10:30:00',
    isFavorited: true,
    shared: [
      {
        id: 'teacher-1',
        name: 'Olimova Dilnoza',
        email: 'olimova@maktab.uz',
        avatarUrl: '/assets/images/avatar/avatar-1.webp',
        permission: 'edit' as const,
      },
    ],
    tags: ['Vazifa', 'Matematika'],
  },
  {
    id: 'file-2',
    name: 'Loyiha-taqdimot.pptx',
    url: '/assets/files/loyiha-taqdimot.pptx',
    size: 5242880, // 5 MB
    type: 'pptx',
    createdAt: '2026-02-08T14:20:00',
    modifiedAt: '2026-02-09T16:45:00',
    isFavorited: false,
    shared: [
      {
        id: 'teacher-2',
        name: 'Karimov Javohir',
        email: 'karimov@maktab.uz',
        avatarUrl: '/assets/images/avatar/avatar-2.webp',
        permission: 'view' as const,
      },
      {
        id: 'student-1',
        name: 'Ahmadov Ali',
        email: 'ahmadov@student.uz',
        avatarUrl: '/assets/images/avatar/avatar-3.webp',
        permission: 'edit' as const,
      },
    ],
    tags: ['Loyiha', 'Taqdimot'],
  },
  {
    id: 'file-3',
    name: 'Ingliz-tili-mashq.docx',
    url: '/assets/files/ingliz-tili-mashq.docx',
    size: 1048576, // 1 MB
    type: 'docx',
    createdAt: '2026-02-07T09:00:00',
    modifiedAt: '2026-02-07T09:00:00',
    isFavorited: true,
    shared: [],
    tags: ['Ingliz tili', 'Mashq'],
  },
  {
    id: 'file-4',
    name: 'Shaxmat-strategiya.pdf',
    url: '/assets/files/shaxmat-strategiya.pdf',
    size: 3145728, // 3 MB
    type: 'pdf',
    createdAt: '2026-02-05T11:15:00',
    modifiedAt: '2026-02-05T11:15:00',
    isFavorited: false,
    shared: [
      {
        id: 'coach-1',
        name: 'Usmonov Sardor',
        email: 'usmonov@maktab.uz',
        avatarUrl: '/assets/images/avatar/avatar-4.webp',
        permission: 'view' as const,
      },
    ],
    tags: ['Shaxmat', 'Strategiya'],
  },
  {
    id: 'file-5',
    name: 'Dasturlash-kod.zip',
    url: '/assets/files/dasturlash-kod.zip',
    size: 4194304, // 4 MB
    type: 'zip',
    createdAt: '2026-02-03T13:30:00',
    modifiedAt: '2026-02-04T15:20:00',
    isFavorited: true,
    shared: [
      {
        id: 'mentor-1',
        name: 'Toshmatov Bekzod',
        email: 'toshmatov@maktab.uz',
        avatarUrl: '/assets/images/avatar/avatar-5.webp',
        permission: 'edit' as const,
      },
    ],
    tags: ['Dasturlash', 'Python'],
  },
];

// ----------------------------------------------------------------------

export function OverviewPortfolioView() {
  const [currentTab, setCurrentTab] = useState('files');
  const [folderName, setFolderName] = useState('');
  const [view, setView] = useState('list');

  const upload = useBoolean();
  const newFolder = useBoolean();

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  };

  const handleChangeView = useCallback(
    (event: React.MouseEvent<HTMLElement>, newView: string | null) => {
      if (newView !== null) {
        setView(newView);
      }
    },
    []
  );

  const handleChangeFolderName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFolderName(event.target.value);
  }, []);

  const handleCreateNewFolder = useCallback(() => {
    newFolder.onFalse();
    setFolderName('');
    console.info('CREATE NEW FOLDER');
  }, [newFolder]);

  const handleExport = useCallback(() => {
    console.info('EXPORT FILES');
  }, []);

  return (
    <>
      <DashboardContent maxWidth="xl">
        <Grid container spacing={3}>
          {/* File Storage Cards */}
          <Grid xs={12} sm={6} md={4}>
            <FileWidget
              title="Dropbox"
              value={GB / 10}
              total={GB}
              icon={`${CONFIG.site.basePath}/assets/icons/app/ic-app-dropbox.svg`}
            />
          </Grid>

          <Grid xs={12} sm={6} md={4}>
            <FileWidget
              title="Drive"
              value={GB / 5}
              total={GB}
              icon={`${CONFIG.site.basePath}/assets/icons/app/ic-app-drive.svg`}
            />
          </Grid>

          <Grid xs={12} sm={6} md={4}>
            <FileWidget
              title="OneDrive"
              value={GB / 2}
              total={GB}
              icon={`${CONFIG.site.basePath}/assets/icons/app/ic-app-onedrive.svg`}
            />
          </Grid>

          {/* Tabs */}
          <Grid xs={12}>
            <Stack
              spacing={2}
              direction={{ xs: 'column', md: 'row' }}
              alignItems={{ xs: 'stretch', md: 'center' }}
              justifyContent={{ xs: 'flex-start', md: 'space-between' }}
              sx={{ mt: 3 }}
            >
              <CustomTabs value={currentTab} onChange={handleChangeTab}>
                <Tab value="files" label="Fayllar" />
                <Tab value="achievements" label="Yutuqlar" />
                <Tab value="skills" label="Ko'nikmalar" />
                <Tab value="about" label="Men haqimda" />
              </CustomTabs>

              {currentTab === 'files' && (
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  flexWrap="wrap"
                  sx={{ gap: 1 }}
                >
                  <Button
                    size="small"
                    variant="contained"
                    startIcon={<Iconify icon="eva:cloud-upload-fill" />}
                    onClick={upload.onTrue}
                  >
                    Yuklash
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    startIcon={<Iconify icon="eva:download-fill" />}
                    onClick={handleExport}
                  >
                    Eksport
                  </Button>
                  <ToggleButtonGroup
                    size="small"
                    value={view}
                    exclusive
                    onChange={handleChangeView}
                  >
                    <ToggleButton value="list">
                      <Iconify icon="solar:list-bold" />
                    </ToggleButton>
                    <ToggleButton value="grid">
                      <Iconify icon="mingcute:dot-grid-fill" />
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Stack>
              )}
            </Stack>
          </Grid>

          {/* Files Tab Content */}
          {currentTab === 'files' && (
            <Grid xs={12}>
              {view === 'list' ? (
                <Box sx={{ gap: 2, display: 'flex', flexDirection: 'column' }}>
                  {STUDENT_FILES.map((file) => (
                    <FileRecentItem
                      key={file.id}
                      file={file}
                      onDelete={() => console.info('DELETE', file.id)}
                    />
                  ))}
                </Box>
              ) : (
                <Box
                  gap={3}
                  display="grid"
                  gridTemplateColumns={{
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                    lg: 'repeat(4, 1fr)',
                  }}
                >
                  {STUDENT_FILES.map((file) => (
                    <FileManagerFileItem
                      key={file.id}
                      file={file}
                      onDelete={() => console.info('DELETE', file.id)}
                    />
                  ))}
                </Box>
              )}
            </Grid>
          )}

          {/* Achievements Tab Content */}
          {currentTab === 'achievements' && (
            <Grid xs={12}>
              <EmptyContent
                title="Yutuqlar qismi tez orada qo'shiladi"
                filled
                sx={{
                  py: 10,
                }}
              />
            </Grid>
          )}

          {/* Skills Tab Content */}
          {currentTab === 'skills' && (
            <Grid xs={12}>
              <EmptyContent
                filled
                title="Ko'nikmalar qismi tez orada qo'shiladi"
                sx={{
                  py: 10,
                }}
              />
            </Grid>
          )}

          {/* About Tab Content */}
          {currentTab === 'about' && (
            <Grid xs={12}>
              <EmptyContent
                filled
                title="Men haqimda qismi tez orada qo'shiladi"
                sx={{
                  py: 10,
                }}
              />
            </Grid>
          )}
        </Grid>
      </DashboardContent>

      <FileManagerNewFolderDialog open={upload.value} onClose={upload.onFalse} />

      <FileManagerNewFolderDialog
        open={newFolder.value}
        onClose={newFolder.onFalse}
        title="New Folder"
        folderName={folderName}
        onChangeFolderName={handleChangeFolderName}
        onCreate={handleCreateNewFolder}
      />
    </>
  );
}
