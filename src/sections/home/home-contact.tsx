import { useState } from 'react';
import { Icon } from '@iconify/react';

import { Box, Chip, Stack, Button, Container, TextField, Typography } from '@mui/material';

import { SectionTitle } from './components/section-title';

// ----------------------------------------------------------------------

export function HomeContact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="xl">
        <Stack spacing={5}>
          {/* Header */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Chip
              label="Aloqa"
              sx={{
                bgcolor: '#4F46E5',
                borderRadius: '24px',
                px: 3,
                py: 1.5,
                '&:hover': {
                  bgcolor: '#4338CA',
                },
              }}
            />
          </Box>

          {/* Content */}
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 4, md: 8 }}
            sx={{ alignItems: { xs: 'center', md: 'flex-start' } }}
          >
            <Stack
              spacing={4}
              sx={{
                alignItems: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <SectionTitle title="Biz bilan" txtGradient="bog'laning" />
              </Box>

              {/* Contact Info Grid */}
              <Stack
                direction={{ xs: 'row', md: 'column' }}
                spacing={3}
                sx={{
                  width: '100%',
                  flexWrap: { xs: 'wrap', md: 'nowrap' },
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}
              >
                {/* Address */}
                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  spacing={2}
                  sx={{
                    minWidth: { xs: '140px', sm: '160px', md: 'auto' },
                    maxWidth: { xs: '160px', md: 'none' },
                    alignItems: { xs: 'center', md: 'flex-start' },
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#4f46e5',
                      bgcolor: '#edecfc',
                      borderRadius: 2,
                      flexShrink: 0,
                    }}
                  >
                    <Icon icon="mdi:map-marker" width={28} color="primary.main" />
                  </Box>
                  <Stack>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                      Manzil
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Toshkent, Yunusobod tumani
                    </Typography>
                  </Stack>
                </Stack>

                {/* Phone */}
                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  spacing={2}
                  sx={{
                    minWidth: { xs: '140px', sm: '160px', md: 'auto' },
                    maxWidth: { xs: '160px', md: 'none' },
                    alignItems: { xs: 'center', md: 'flex-start' },
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#4f46e5',
                      bgcolor: '#edecfc',
                      borderRadius: 2,
                      flexShrink: 0,
                    }}
                  >
                    <Icon icon="mdi:phone" width={28} color="primary.main" />
                  </Box>
                  <Stack>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                      Telefon
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      +998 71 123 45 67
                    </Typography>
                  </Stack>
                </Stack>

                {/* Email */}
                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  spacing={2}
                  sx={{
                    minWidth: { xs: '140px', sm: '160px', md: 'auto' },
                    maxWidth: { xs: '160px', md: 'none' },
                    alignItems: { xs: 'center', md: 'flex-start' },
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#4f46e5',
                      bgcolor: '#edecfc',
                      borderRadius: 2,
                      flexShrink: 0,
                    }}
                  >
                    <Icon icon="mdi:email" width={28} color="primary.main" />
                  </Box>
                  <Stack>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                      Email
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      info@kelajak.uz
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>

            {/* Right side - Contact Form */}
            <Stack
              component="form"
              onSubmit={handleSubmit}
              sx={{
                flex: 1.2,
                width: { xs: '100%', md: 'auto' },
                maxWidth: { xs: '600px', md: 'none' },
                p: { xs: 3, md: 4 },
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
              }}
            >
              <Stack spacing={3}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <TextField
                    fullWidth
                    label="Ism"
                    placeholder="Ismingiz"
                    value={formData.firstName}
                    onChange={handleChange('firstName')}
                    required
                  />
                  <TextField
                    fullWidth
                    label="Familiya"
                    placeholder="Familiyangiz"
                    value={formData.lastName}
                    onChange={handleChange('lastName')}
                    required
                  />
                </Stack>

                <TextField
                  fullWidth
                  type="email"
                  label="Email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={handleChange('email')}
                  required
                />

                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Xabar"
                  placeholder="Xabaringizni yozing..."
                  value={formData.message}
                  onChange={handleChange('message')}
                  required
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{
                    bgcolor: '#4F46E5',
                    px: 4,
                    py: 1.5,
                    '&:hover': {
                      bgcolor: '#4338CA',
                    },
                  }}
                >
                  Yuborish
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
