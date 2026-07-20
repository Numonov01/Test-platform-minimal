import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const _carouselsMembers = [...Array(6)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  role: _mock.role(index),
  avatarUrl: _mock.image.portrait(index),
}));

// ----------------------------------------------------------------------

export const _faqs = [...Array(8)].map((_, index) => ({
  id: _mock.id(index),
  value: `panel${index + 1}`,
  heading: `Questions ${index + 1}`,
  detail: _mock.description(index),
}));

// ----------------------------------------------------------------------

export const _addressBooks = [...Array(24)].map((_, index) => ({
  id: _mock.id(index),
  primary: index === 0,
  name: _mock.fullName(index),
  email: _mock.email(index + 1),
  fullAddress: _mock.fullAddress(index),
  phoneNumber: _mock.phoneNumber(index),
  company: _mock.companyNames(index + 1),
  addressType: index === 0 ? 'Home' : 'Office',
}));

// ----------------------------------------------------------------------

export const _contacts = [...Array(20)].map((_, index) => {
  const status =
    (index % 2 && 'online') || (index % 3 && 'offline') || (index % 4 && 'alway') || 'busy';

  return {
    id: _mock.id(index),
    status,
    role: _mock.role(index),
    email: _mock.email(index),
    name: _mock.fullName(index),
    phoneNumber: _mock.phoneNumber(index),
    lastActivity: _mock.time(index),
    avatarUrl: _mock.image.avatar(index),
    address: _mock.fullAddress(index),
  };
});

// ----------------------------------------------------------------------

export const _notifications = [...Array(10)].map((_, index) => ({
  id: _mock.id(index),
  avatarUrl: [
    '/assets/illustrations/trainer.png',
    '/assets/illustrations/girl.png',
    '/assets/illustrations/boy.png',
    '/assets/illustrations/girl.png',
    '/assets/illustrations/trainer.png',
    '/assets/illustrations/girl.png',
    '/assets/illustrations/boy.png',
    '/assets/illustrations/trainer.png',
    '/assets/illustrations/girl.png',
    '/assets/illustrations/boy.png',
  ][index],
  type: [
    'payment',
    'payment',
    'payment',
    'payment',
    'payment',
    'order',
    'order',
    'payment',
    'payment',
    'order',
  ][index],
  category: [
    "To'lov",
    "To'lov",
    'Hisob-faktura',
    "To'lov",
    "To'lov",
    'Hisob-faktura',
    'Hisob-faktura',
    "To'lov",
    "To'lov",
    'Hisob-faktura',
  ][index],
  isUnRead: _mock.boolean(index),
  createdAt: _mock.time(index),
  title:
    (index === 0 &&
      `<p><strong>Ali Valiyev</strong> Matematika olimpiadasi uchun <strong>500,000 so'm</strong> to'lov qildi</p>`) ||
    (index === 1 &&
      `<p><strong>Dilnoza Karimova</strong> Ingliz tili kursi uchun <strong>750,000 so'm</strong> to'ladi</p>`) ||
    (index === 2 &&
      `<p><strong>Sardor Rahimov</strong> uchun <strong>Python dasturlash</strong> hisob-fakturasi yaratildi</p>`) ||
    (index === 3 &&
      `<p><strong>Madina Toshmatova</strong> Kimyo kursi uchun <strong>450,000 so'm</strong> to'ladi</p>`) ||
    (index === 4 &&
      `<p><strong>Otabek Yusupov</strong> Shaxmat kursi uchun to'lov amalga oshirmadi</p>`) ||
    (index === 5 && `<p>Yangi hisob-faktura yaratildi va talabaga yuborildi</p>`) ||
    (index === 6 && `<p>Muddati o'tgan hisob-faktura mavjud - <strong>INV-2024-004</strong></p>`) ||
    (index === 7 &&
      `<p><strong>Zarina Ahmadova</strong> Dasturlash kursi uchun <strong>800,000 so'm</strong> to'ladi</p>`) ||
    (index === 8 &&
      `<p>Yangi to'lov Payme orqali qabul qilindi - <strong>650,000 so'm</strong></p>`) ||
    (index === 9 && `<p>Hisob-faktura to'lovi kutilmoqda - <strong>INV-2024-002</strong></p>`) ||
    '',
}));

// ----------------------------------------------------------------------

export const _mapContact = [
  { latlng: [33, 65], address: _mock.fullAddress(1), phoneNumber: _mock.phoneNumber(1) },
  { latlng: [-12.5, 18.5], address: _mock.fullAddress(2), phoneNumber: _mock.phoneNumber(2) },
];

// ----------------------------------------------------------------------

export const _socials = [
  {
    value: 'facebook',
    name: 'Facebook',
    path: 'https://www.facebook.com/caitlyn.kerluke',
  },
  {
    value: 'instagram',
    name: 'Instagram',
    path: 'https://www.instagram.com/caitlyn.kerluke',
  },
  {
    value: 'linkedin',
    name: 'Linkedin',
    path: 'https://www.linkedin.com/caitlyn.kerluke',
  },
  {
    value: 'twitter',
    name: 'Twitter',
    path: 'https://www.twitter.com/caitlyn.kerluke',
  },
];

// ----------------------------------------------------------------------

export const _pricingPlans = [
  {
    subscription: 'basic',
    price: 0,
    caption: 'Forever',
    lists: ['3 prototypes', '3 boards', 'Up to 5 team members'],
    labelAction: 'Current plan',
  },
  {
    subscription: 'starter',
    price: 4.99,
    caption: 'Saving $24 a year',
    lists: [
      '3 prototypes',
      '3 boards',
      'Up to 5 team members',
      'Advanced security',
      'Issue escalation',
    ],
    labelAction: 'Choose starter',
  },
  {
    subscription: 'premium',
    price: 9.99,
    caption: 'Saving $124 a year',
    lists: [
      '3 prototypes',
      '3 boards',
      'Up to 5 team members',
      'Advanced security',
      'Issue escalation',
      'Issue development license',
      'Permissions & workflows',
    ],
    labelAction: 'Choose premium',
  },
];

// ----------------------------------------------------------------------

export const _testimonials = [
  {
    name: _mock.fullName(1),
    postedDate: _mock.time(1),
    ratingNumber: _mock.number.rating(1),
    avatarUrl: _mock.image.avatar(1),
    content: `Excellent Work! Thanks a lot!`,
  },
  {
    name: _mock.fullName(2),
    postedDate: _mock.time(2),
    ratingNumber: _mock.number.rating(2),
    avatarUrl: _mock.image.avatar(2),
    content: `It's a very good dashboard and we are really liking the product . We've done some things, like migrate to TS and implementing a react useContext api, to fit our job methodology but the product is one of the best in terms of design and application architecture. The team did a really good job.`,
  },
  {
    name: _mock.fullName(3),
    postedDate: _mock.time(3),
    ratingNumber: _mock.number.rating(3),
    avatarUrl: _mock.image.avatar(3),
    content: `Customer support is realy fast and helpful the desgin of this theme is looks amazing also the code is very clean and readble realy good job !`,
  },
  {
    name: _mock.fullName(4),
    postedDate: _mock.time(4),
    ratingNumber: _mock.number.rating(4),
    avatarUrl: _mock.image.avatar(4),
    content: `Amazing, really good code quality and gives you a lot of examples for implementations.`,
  },
  {
    name: _mock.fullName(5),
    postedDate: _mock.time(5),
    ratingNumber: _mock.number.rating(5),
    avatarUrl: _mock.image.avatar(5),
    content: `Got a few questions after purchasing the product. The owner responded very fast and very helpfull. Overall the code is excellent and works very good. 5/5 stars!`,
  },
  {
    name: _mock.fullName(6),
    postedDate: _mock.time(6),
    ratingNumber: _mock.number.rating(6),
    avatarUrl: _mock.image.avatar(6),
    content: `CEO of Codealy.io here. We’ve built a developer assessment platform that makes sense - tasks are based on git repositories and run in virtual machines. We automate the pain points - storing candidates code, running it and sharing test results with the whole team, remotely. Bought this template as we need to provide an awesome dashboard for our early customers. I am super happy with purchase. The code is just as good as the design. Thanks!`,
  },
];
