import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import ListItemText from '@mui/material/ListItemText';

import { Label } from 'src/components/label';
import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  title?: string;
  subheader?: string;
  list: {
    id: string;
    roomName: string;
    cameraId: string;
    location: string;
    viewers: number;
    duration: string;
    status: 'live' | 'recording' | 'offline';
    thumbnailUrl: string;
    resolution: string;
  }[];
};

export function LiveStreams({ title, subheader, list, sx, ...other }: Props) {
  return (
    <Box sx={{ ...sx }} {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ p: 0, mb: 3 }} />

      <Grid container spacing={3}>
        {list.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4}>
            <StreamCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

// ----------------------------------------------------------------------

type StreamCardProps = BoxProps & {
  item: Props['list'][number];
};

function StreamCard({ item, sx, ...other }: StreamCardProps) {
  return (
    <Box
      sx={{
        width: 1,
        borderRadius: 2,
        position: 'relative',
        bgcolor: 'background.neutral',
        overflow: 'hidden',
        ...sx,
      }}
      {...other}
    >
      {/* Video Thumbnail */}
      <Box
        sx={{
          position: 'relative',
          '&:hover .view-overlay': {
            opacity: 1,
          },
        }}
      >
        <Image
          alt={item.roomName}
          src={item.thumbnailUrl}
          ratio="16/9"
          sx={{
            filter: item.status === 'offline' ? 'grayscale(100%)' : 'none',
          }}
        />

        {/* Hover Overlay with View Button */}
        <Box
          className="view-overlay"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            transition: 'opacity 0.3s',
          }}
        >
          <Button
            variant="contained"
            color="inherit"
            size="large"
            startIcon={<Iconify icon="solar:eye-bold" />}
            onClick={(e) => {
              e.stopPropagation();
            }}
            sx={{
              boxShadow: (theme) => theme.customShadows.z8,
            }}
          >
            Ko&apos;rish
          </Button>
        </Box>

        {/* Live Status Badge */}
        {item.status === 'live' ? (
          <Chip
            icon={
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: 'error.main',
                  animation: 'pulse 2s infinite',
                }}
              />
            }
            label="LIVE"
            color="success"
            size="small"
            sx={{
              position: 'absolute',
              top: 12,
              left: 12,
              fontWeight: 'bold',
              '@keyframes pulse': {
                '0%, 100%': { opacity: 1 },
                '50%': { opacity: 0.5 },
              },
            }}
          />
        ) : (
          <Chip
            label="OFFLINE"
            color="error"
            size="small"
            sx={{
              position: 'absolute',
              top: 12,
              left: 12,
              fontWeight: 'bold',
              '@keyframes pulse': {
                '0%, 100%': { opacity: 1 },
                '50%': { opacity: 0.5 },
              },
            }}
          />
        )}

        {/* Duration Badge */}
        {item.status !== 'offline' && (
          <Label
            variant="filled"
            color="default"
            sx={{
              position: 'absolute',
              bottom: 12,
              right: 12,
              bgcolor: 'rgba(0, 0, 0, 0.72)',
            }}
          >
            {item.duration}
          </Label>
        )}
      </Box>

      {/* Stream Info */}
      <Box sx={{ p: 2, gap: 1.5, display: 'flex', flexDirection: 'column' }}>
        <ListItemText
          primary={item.roomName}
          secondary={item.location}
          primaryTypographyProps={{
            typography: 'subtitle2',
            noWrap: true,
          }}
          secondaryTypographyProps={{
            mt: 0.5,
            component: 'span',
            typography: 'caption',
            color: 'text.disabled',
            noWrap: true,
          }}
        />

        <Box
          sx={{
            gap: 2,
            display: 'flex',
            alignItems: 'center',
            typography: 'caption',
            color: 'text.secondary',
          }}
        >
          <Box sx={{ gap: 0.5, display: 'flex', alignItems: 'center' }}>
            <Iconify width={16} icon="solar:eye-bold" sx={{ flexShrink: 0 }} />
            {item.viewers.toLocaleString()}
          </Box>

          <Box sx={{ gap: 0.5, display: 'flex', alignItems: 'center' }}>
            <Iconify width={16} icon="solar:videocamera-record-bold" sx={{ flexShrink: 0 }} />
            {item.resolution}
          </Box>

          <Box sx={{ gap: 0.5, display: 'flex', alignItems: 'center' }}>
            <Iconify width={16} icon="solar:camera-bold" sx={{ flexShrink: 0 }} />
            {item.cameraId}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
