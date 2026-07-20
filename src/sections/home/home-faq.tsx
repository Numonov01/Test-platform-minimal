import { useState } from 'react';

import {
  Box,
  Chip,
  Stack,
  Container,
  Accordion,
  Typography,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';

import { Iconify } from 'src/components/iconify';

import { SectionTitle } from './components/section-title';

// ----------------------------------------------------------------------

const FAQS = [
  {
    id: 1,
    question: "Qanday qilib ro'yxatdan o'tish mumkin?",
    answer:
      "Ro'yxatdan o'tish uchun saytning yuqori qismidagi 'Ro'yxatdan o'tish' tugmasini bosing. Keyin kerakli ma'lumotlaringizni to'ldiring va tasdiqlang. Jarayon juda oddiy va tez amalga oshiriladi.",
  },
  {
    id: 2,
    question: "To'garaklar qancha turadi?",
    answer:
      "To'garaklar davomiyligi yo'nalishga qarab 3 oydan 12 oygacha bo'lishi mumkin. Har bir dastur uchun aniq muddatlar kurs tavsifida ko'rsatilgan. Intensiv kurslar ham mavjud.",
  },
  {
    id: 3,
    question: 'Videokuzatuv qanday ishlaydi?',
    answer:
      "Barcha darslar videoga yozib olinadi va talabalar uchun maxsus platformada saqlanadi. Siz istalgan vaqtda darslarni qayta ko'rishingiz mumkin. Video darslar 24/7 mavjud.",
  },
  {
    id: 4,
    question: 'Sertifikat beriladimi?',
    answer:
      "Ha, kursni muvaffaqiyatli tugatgan barcha talabalar rasmiy sertifikat oladilar. Sertifikat elektron va qog'oz variantida beriladi. U mehnat bozoridagietarof etilgan.",
  },
];

// ----------------------------------------------------------------------

export function HomeFaq() {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      component="section"
      sx={{
        py: 8,
      }}
    >
      <Container>
        <Stack spacing={5} sx={{ alignItems: 'center' }}>
          {/* Header */}
          <Box sx={{ textAlign: 'center' }}>
            <Chip
              label="FAQ"
              sx={{
                bgcolor: '#4F46E5',
                color: 'white',
                fontWeight: 600,
                borderRadius: '24px',
                px: 3,
                py: 1.5,
                mb: 3,
                '&:hover': {
                  bgcolor: '#4338CA',
                },
              }}
            />
            <SectionTitle
              title="Ko'p so'raladigan"
              txtGradient="savollar"
              sx={{ textAlign: 'center' }}
            />
          </Box>

          {/* FAQ Items */}
          <Stack spacing={2} sx={{ width: '100%', maxWidth: '900px' }}>
            {FAQS.map((faq) => (
              <Accordion
                key={faq.id}
                expanded={expanded === faq.id}
                onChange={handleChange(faq.id)}
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: '8px !important',
                  '&:before': { display: 'none' },
                  boxShadow: 'none',
                  '&.Mui-expanded': {
                    borderColor: 'primary.main',
                    boxShadow: '0 4px 12px rgba(79, 70, 229, 0.1)',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <Iconify
                      icon="eva:arrow-ios-downward-fill"
                      sx={{
                        color: expanded === faq.id ? 'primary.main' : 'text.secondary',
                        transition: 'color 0.2s',
                      }}
                    />
                  }
                  sx={{
                    px: 3,
                    py: 2,
                    '& .MuiAccordionSummary-content': {
                      my: 1,
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: '1rem', md: '1.125rem' },
                      color: expanded === faq.id ? 'primary.main' : 'text.primary',
                      transition: 'color 0.2s',
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    px: 3,
                    pb: 3,
                    pt: 0,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.8,
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
