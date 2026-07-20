import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

const FAQ_DATA = [
  {
    id: 1,
    category: 'Umumiy savollar',
    questions: [
      {
        id: 'q1',
        question: 'CRM tizimi nima?',
        answer:
          "CRM (Customer Relationship Management) - bu mijozlar bilan munosabatlarni boshqarish tizimi. U sizga mijozlar ma'lumotlarini saqlash, aloqalarni kuzatish, savdo voronkasini boshqarish va mijozlar bilan aloqalarni yaxshilashga yordam beradi.",
      },
      {
        id: 'q2',
        question: 'Tizimdan foydalanish uchun qanday talablar bor?',
        answer:
          "Tizimdan foydalanish uchun sizga faqat internet ulanishi va zamonaviy brauzer kerak. Tizim bulutda joylashgan bo'lib, hech qanday qo'shimcha dasturiy ta'minot o'rnatish talab qilinmaydi.",
      },
      {
        id: 'q3',
        question: "Ma'lumotlarim qanchalik xavfsiz?",
        answer:
          "Biz ma'lumotlar xavfsizligini juda jiddiy qabul qilamiz. Barcha ma'lumotlar shifrlangan, xavfsiz serverlar tarafidan saqlanadi va muntazam zaxira nusxalari olinadi. Sizning ma'lumotlaringiz faqat siz va ruxsat bergan foydalanuvchilar tomonidan ko'rinadi.",
      },
    ],
  },
  {
    id: 2,
    category: 'Akkaunt va sozlamalar',
    questions: [
      {
        id: 'q4',
        question: "Parolimni qanday o'zgartirishim mumkin?",
        answer:
          "Parolingizni o'zgartirish uchun: 1) Profilingizga o'ting, 2) \"Xavfsizlik\" bo'limini tanlang, 3) \"Parolni o'zgartirish\" tugmasini bosing va ko'rsatmalarga amal qiling.",
      },
      {
        id: 'q5',
        question: "Jamoa a'zolarini qanday qo'shaman?",
        answer:
          'Jamoa a\'zolarini qo\'shish uchun "Sozlamalar" > "Jamoa" bo\'limiga o\'ting va "Yangi a\'zo qo\'shish" tugmasini bosing. Ularning email manzilini kiriting va tegishli rolni tanlang.',
      },
      {
        id: 'q6',
        question: 'Foydalanuvchi ruxsatlarini qanday boshqaraman?',
        answer:
          'Har bir foydalanuvchi uchun turli rollar va ruxsatlarni belgilashingiz mumkin. "Sozlamalar" > "Jamoa" > "Rollar va ruxsatlar" bo\'limida bu sozlamalarni boshqaring.',
      },
    ],
  },
  {
    id: 3,
    category: 'Mijozlar bilan ishlash',
    questions: [
      {
        id: 'q7',
        question: "Yangi mijoz qanday qo'shiladi?",
        answer:
          "Yangi mijoz qo'shish uchun \"Mijozlar\" bo'limiga o'ting va \"+\" tugmasini bosing. Kerakli ma'lumotlarni to'ldiring va saqlang.",
      },
      {
        id: 'q8',
        question: 'Mijozlarni import qilish mumkinmi?',
        answer:
          'Ha, siz Excel yoki CSV fayl orqali mijozlarni ommaviy import qilishingiz mumkin. "Mijozlar" > "Import" bo\'limidan foydalaning.',
      },
      {
        id: 'q9',
        question: "Mijoz tarixini qanday ko'raman?",
        answer:
          "Har bir mijoz kartochkasida uning barcha aloqalari, bitimlar va muloqotlar tarixi ko'rsatiladi. Mijoz nomini bosib, batafsil ma'lumotlarni ko'ring.",
      },
    ],
  },
  {
    id: 4,
    category: "To'lovlar va tariflar",
    questions: [
      {
        id: 'q10',
        question: "Qanday to'lov usullari mavjud?",
        answer:
          "Biz bank kartalari (Visa, Mastercard, Uzcard, Humo), bank o'tkazmalari va elektron to'lov tizimlarini qabul qilamiz.",
      },
      {
        id: 'q11',
        question: "Tarifni o'zgartirish mumkinmi?",
        answer:
          'Ha, istalgan vaqtda tarifingizni o\'zgartirishingiz mumkin. "Sozlamalar" > "Tarif rejasi" bo\'limidan kerakli tarifni tanlang.',
      },
      {
        id: 'q12',
        question: 'Pulni qaytarish siyosati qanday?',
        answer:
          "Agar xizmatdan qoniqmasangiz, 30 kun ichida pulni to'liq qaytarishni so'rashingiz mumkin. Batafsil ma'lumot uchun qo'llab-quvvatlash xizmatiga murojaat qiling.",
      },
    ],
  },
  {
    id: 5,
    category: 'Texnik yordam',
    questions: [
      {
        id: 'q13',
        question: "Qo'llab-quvvatlash xizmati qachon ishlaydi?",
        answer:
          "Bizning qo'llab-quvvatlash xizmatimiz dushanba-shanba, 9:00 dan 18:00 gacha ishlaydi. Email orqali 24/7 murojaat qilishingiz mumkin.",
      },
      {
        id: 'q14',
        question: 'Mobil ilova bormi?',
        answer:
          'Ha, bizda Android va iOS uchun mobil ilovalar mavjud. App Store yoki Google Play orqali yuklab olishingiz mumkin.',
      },
      {
        id: 'q15',
        question: 'Tizim boshqa dasturlar bilan integratsiya qilinishi mumkinmi?',
        answer:
          'Ha, tizim ko\'plab mashhur dasturlar bilan integratsiya qilinishi mumkin, jumladan, email xizmatlari, kalendar, messenger va boshqalar. "Sozlamalar" > "Integratsiyalar" bo\'limini ko\'ring.',
      },
    ],
  },
];

// ----------------------------------------------------------------------

export function FaqContent() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      <Stack spacing={4}>
        {FAQ_DATA.map((category) => (
          <Card key={category.id} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {category.category}
            </Typography>
            <Stack spacing={1}>
              {category.questions.map((question) => (
                <Accordion
                  key={question.id}
                  expanded={expanded === question.id}
                  onChange={handleChange(question.id)}
                  sx={{
                    '&:before': { display: 'none' },
                    boxShadow: (theme) => theme.customShadows.card,
                  }}
                >
                  <AccordionSummary
                    expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}
                    sx={{
                      '&:hover': {
                        bgcolor: 'action.hover',
                      },
                    }}
                  >
                    <Typography variant="subtitle1">{question.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" color="text.secondary">
                      {question.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Stack>
          </Card>
        ))}
      </Stack>

      <Card sx={{ p: 3, mt: 4, bgcolor: 'background.neutral' }}>
        <Typography variant="h6" gutterBottom>
          Javobingizni topa olmadingizmi?
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Boshqa savollaringiz bo&apos;lsa, biz bilan bog&apos;laning. Sizga yordam berishdan mamnun
          bo&apos;lamiz!
        </Typography>
        <Stack direction="row" spacing={2}>
          <Box>
            <Typography variant="caption" color="text.secondary" display="block">
              Email
            </Typography>
            <Typography variant="body2">support@crm.uz</Typography>
          </Box>
          <Box>
            <Typography variant="caption" color="text.secondary" display="block">
              Telefon
            </Typography>
            <Typography variant="body2">+998 90 123 45 67</Typography>
          </Box>
        </Stack>
      </Card>
    </Box>
  );
}
