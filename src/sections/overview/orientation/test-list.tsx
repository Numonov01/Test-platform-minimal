import Box from '@mui/material/Box';

import { TestCard } from './test-card';

// ----------------------------------------------------------------------

const MOCK_TESTS = [
  {
    id: '1',
    title: "Kasb va yo'nalishni aniqlash testi",
    description:
      "Bu test sizning qiziqishlaringiz, ko'nikmalaringiz va shaxsiy xususiyatlaringizga asoslangan holda eng mos kasblarni tavsiya qiladi.",
    totalQuestions: 50,
    duration: 30,
    difficulty: 'Beginner' as const,
  },
  {
    id: '2',
    title: 'Holland Kasb Tanlash Testi',
    description:
      'Holland nazariyasiga asoslangan klassik test. Shaxsiy tipingizni va unga mos keladigan kasb sohalarini aniqlaydi.',
    totalQuestions: 60,
    duration: 25,
    difficulty: 'Intermediate' as const,
  },
  {
    id: '3',
    title: "Qobiliyat va ko'nikmalar baholash",
    description:
      'Turli sohalardagi qobiliyatlaringizni baholash va kuchli tomonlaringizni aniqlash uchun maxsus ishlab chiqilgan test.',
    totalQuestions: 45,
    duration: 35,
    difficulty: 'Advanced' as const,
  },
  {
    id: '4',
    title: 'Motivatsiya va qiziqishlar testi',
    description:
      'Sizni qaysi faoliyat turlari qiziqtirishi va motivatsiya qilishini aniqlashga yordam beradigan psixologik test.',
    totalQuestions: 40,
    duration: 20,
    difficulty: 'Beginner' as const,
  },
  {
    id: '5',
    title: "Kommunikatsiya ko'nikmalari",
    description:
      "Aloqa qilish, jamoa bilan ishlash va muloqot yuritish ko'nikmalaringizni baholash testi.",
    totalQuestions: 35,
    duration: 25,
    difficulty: 'Intermediate' as const,
  },
  {
    id: '6',
    title: 'Etakchilik sifatlari',
    description:
      "Liderlik potensialingizni, rahbarlik qilish qobiliyatlaringizni va jamoani boshqarish ko'nikmalaringizni aniqlash.",
    totalQuestions: 55,
    duration: 40,
    difficulty: 'Advanced' as const,
  },
];

// ----------------------------------------------------------------------

type Props = {
  onStartTest?: (testId: string) => void;
};

export function TestList({ onStartTest }: Props) {
  const handleStartTest = (testId: string) => {
    console.log('Starting test:', testId);
    if (onStartTest) {
      onStartTest(testId);
    }
  };

  return (
    <Box
      gap={3}
      display="grid"
      gridTemplateColumns={{ xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
    >
      {MOCK_TESTS.map((test) => (
        <TestCard key={test.id} {...test} onStart={() => handleStartTest(test.id)} />
      ))}
    </Box>
  );
}
