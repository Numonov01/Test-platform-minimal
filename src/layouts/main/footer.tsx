import type { Theme, SxProps, Breakpoint } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { _socials } from 'src/_mock';

import { Logo } from 'src/components/logo';
import { Iconify, SocialIcon } from 'src/components/iconify';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'Minimal',
    children: [
      { name: 'About us', href: paths.about },
      { name: 'Contact us', href: paths.contact },
      { name: 'FAQs', href: paths.faqs },
    ],
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Terms and condition', href: '#' },
      { name: 'Privacy policy', href: '#' },
    ],
  },
  { headline: 'Contact', children: [{ name: 'support@minimals.cc', href: '#' }] },
];

// ----------------------------------------------------------------------

export type FooterProps = {
  layoutQuery: Breakpoint;
  sx?: SxProps<Theme>;
};

export function Footer({ layoutQuery, sx }: FooterProps) {
  const theme = useTheme();

  return (
    <Box component="footer" sx={{ position: 'relative', bgcolor: 'background.default', ...sx }}>
      <Divider />

      <Container
        sx={{
          pb: 5,
          pt: 10,
          textAlign: 'center',
          [theme.breakpoints.up(layoutQuery)]: { textAlign: 'unset' },
        }}
      >
        <Logo />

        <Grid
          container
          sx={{
            mt: 3,
            justifyContent: 'center',
            [theme.breakpoints.up(layoutQuery)]: { justifyContent: 'space-between' },
          }}
        >
          <Grid {...{ xs: 12, [layoutQuery]: 3 }}>
            <Typography
              variant="body2"
              sx={{
                mx: 'auto',
                maxWidth: 280,
                [theme.breakpoints.up(layoutQuery)]: { mx: 'unset' },
              }}
            >
              The starting point for your next project with Minimal UI Kit, built on the newest
              version of Material-UI ©, ready to be customized to your style.
            </Typography>

            <Stack
              direction="row"
              sx={{
                mt: 3,
                mb: 5,
                justifyContent: 'center',
                [theme.breakpoints.up(layoutQuery)]: { mb: 0, justifyContent: 'flex-start' },
              }}
            >
              {_socials.map((social) => (
                <IconButton key={social.name}>
                  <SocialIcon icon={social.name} />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid {...{ xs: 12, [layoutQuery]: 6 }}>
            <Stack
              spacing={5}
              sx={{
                flexDirection: 'column',
                [theme.breakpoints.up(layoutQuery)]: { flexDirection: 'row' },
              }}
            >
              {LINKS.map((list) => (
                <Stack
                  key={list.headline}
                  spacing={2}
                  sx={{
                    width: 1,
                    alignItems: 'center',
                    [theme.breakpoints.up(layoutQuery)]: { alignItems: 'flex-start' },
                  }}
                >
                  <Typography component="div" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      component={RouterLink}
                      href={link.href}
                      color="inherit"
                      variant="body2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ mt: 10 }}>
          © All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

export type HomeFooterProps = {
  sx?: SxProps<Theme>;
};

export function HomeFooter({ sx }: HomeFooterProps) {
  const quickLinks = [
    { name: 'Bosh sahifa', href: '#bosh-sahifa' },
    { name: 'Dasturlar', href: '#dasturlar' },
    { name: 'Tadbirlar', href: '#tadbirlar' },
  ];

  const directions = [
    { name: 'IT va dasturlash', href: '#dasturlar' },
    { name: 'Dizayn', href: '#dasturlar' },
    { name: 'Matematika', href: '#dasturlar' },
  ];

  const socials = [
    { name: 'instagram', icon: 'mdi:instagram', href: '#' },
    { name: 'facebook', icon: 'mdi:facebook', href: '#' },
    { name: 'twitter', icon: 'ri:twitter-x-fill', href: '#' },
    { name: 'telegram', icon: 'mdi:telegram', href: '#' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        position: 'relative',
        ...sx,
      }}
    >
      <Container sx={{ py: 8 }} maxWidth="xl">
        <Grid
          container
          spacing={4}
          sx={{
            justifyContent: 'space-around',
            alignItems: 'center',
            alignContent: 'center',
          }}
        >
          {/* Left - Logo & Description */}
          <Grid xs={12} md={3}>
            <Logo />
            <Typography
              variant="body2"
              sx={{
                mt: 2,
                mb: 3,
                color: 'text.secondary',
                lineHeight: 1.7,
              }}
            >
              Respublika &quot;Kelajak&quot; markazi - zamonaviy ta&apos;lim va kelajak kasblarini
              o&apos;rganish markazi.
            </Typography>
            <Stack direction="row" spacing={1}>
              {socials.map((social) => (
                <IconButton
                  key={social.name}
                  component={Link}
                  href={social.href}
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'primary.main',
                      bgcolor: 'action.hover',
                    },
                  }}
                >
                  <SocialIcon icon={social.name} />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* Middle - Quick Links */}
          <Grid xs={6} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
              Tez havolalar
            </Typography>
            <Stack spacing={1.5}>
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  {...(link.href.startsWith('#') ? {} : { component: RouterLink })}
                  href={link.href}
                  color="inherit"
                  underline="none"
                  sx={{
                    color: 'text.secondary',
                    transition: 'color 0.2s',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Middle - Directions */}
          <Grid xs={6} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
              Yo&apos;nalishlar
            </Typography>
            <Stack spacing={1.5}>
              {directions.map((link) => (
                <Link
                  key={link.name}
                  {...(link.href.startsWith('#') ? {} : { component: RouterLink })}
                  href={link.href}
                  color="inherit"
                  underline="none"
                  sx={{
                    color: 'text.secondary',
                    transition: 'color 0.2s',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Right - Contact */}
          <Grid xs={12} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
              Aloqa
            </Typography>
            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                <Box component="span" sx={{ color: 'text.secondary', display: 'flex' }}>
                  <Iconify icon="mdi:phone" width={20} />
                </Box>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  +998 71 123 45 67
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                <Box component="span" sx={{ color: 'text.secondary', display: 'flex' }}>
                  <Iconify icon="mdi:email" width={20} />
                </Box>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  info@kelajak.uz
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} sx={{ alignItems: 'flex-start' }}>
                <Box component="span" sx={{ color: 'text.secondary', display: 'flex', mt: 0.3 }}>
                  <Iconify icon="mdi:map-marker" width={20} />
                </Box>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Toshkent, Yunusobod
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom Copyright */}
        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: '1px solid',
            borderColor: 'divider',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            © 2025 &quot;Kelajak&quot; markazi. Barcha huquqlar himoyalangan.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link
              href="#"
              underline="none"
              sx={{
                color: 'text.secondary',
                fontSize: '0.875rem',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              Maxfiylik siyosati
            </Link>
            <Link
              href="#"
              underline="none"
              sx={{
                color: 'text.secondary',
                fontSize: '0.875rem',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              Foydalanish shartlari
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
