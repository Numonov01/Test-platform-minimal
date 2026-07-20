// src/routes/paths.ts
import { paramCase } from 'src/utils/change-case';

import { _id, _postTitles } from 'src/_mock/assets';

// ----------------------------------------------------------------------

const MOCK_ID = _id[1];

const MOCK_TITLE = _postTitles[2];

const ROOTS = {
  AUTH: '/auth',
  AUTH_DEMO: '/auth-demo',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page403: '/error/403',
  page404: '/error/404',
  page500: '/error/500',
  components: '/components',
  docs: 'https://docs.minimals.cc',
  changelog: 'https://docs.minimals.cc/changelog',
  zoneStore: 'https://mui.com/store/items/zone-landing-page/',
  minimalStore: 'https://mui.com/store/items/minimal-dashboard/',
  freeUI: 'https://mui.com/store/items/minimal-dashboard-free/',
  figma: 'https://www.figma.com/design/cAPz4pYPtQEXivqe11EcDE/%5BPreview%5D-Minimal-Web.v6.0.0',
  product: {
    root: `/product`,
    checkout: `/product/checkout`,
    details: (id: string) => `/product/${id}`,
    demo: { details: `/product/${MOCK_ID}` },
  },
  patienr: {
    root: `/patient`,
    new: `/patient/new`,
    details: (id: string) => `/patient/${id}`,
    info: (id: string) => `/patient/${id}/info`,
    edit: (id: string) => `/patient/${id}/edit`,
    demo: {
      details: `/patient/${MOCK_ID}`,
      info: `/patient/${MOCK_ID}/info`,
      edit: `/patient/${MOCK_ID}/edit`,
    },
  },

  post: {
    root: `/post`,
    details: (title: string) => `/post/${paramCase(title)}`,
    demo: { details: `/post/${paramCase(MOCK_TITLE)}` },
  },
  // AUTH
  auth: {
    amplify: {
      signIn: `${ROOTS.AUTH}/amplify/sign-in`,
      verify: `${ROOTS.AUTH}/amplify/verify`,
      signUp: `${ROOTS.AUTH}/amplify/sign-up`,
      updatePassword: `${ROOTS.AUTH}/amplify/update-password`,
      resetPassword: `${ROOTS.AUTH}/amplify/reset-password`,
    },
    jwt: {
      signIn: `${ROOTS.AUTH}/jwt/sign-in`,
      signUp: `${ROOTS.AUTH}/jwt/sign-up`,
    },
    firebase: {
      signIn: `${ROOTS.AUTH}/firebase/sign-in`,
      verify: `${ROOTS.AUTH}/firebase/verify`,
      signUp: `${ROOTS.AUTH}/firebase/sign-up`,
      resetPassword: `${ROOTS.AUTH}/firebase/reset-password`,
    },
    auth0: {
      signIn: `${ROOTS.AUTH}/auth0/sign-in`,
    },
    supabase: {
      signIn: `${ROOTS.AUTH}/supabase/sign-in`,
      verify: `${ROOTS.AUTH}/supabase/verify`,
      signUp: `${ROOTS.AUTH}/supabase/sign-up`,
      updatePassword: `${ROOTS.AUTH}/supabase/update-password`,
      resetPassword: `${ROOTS.AUTH}/supabase/reset-password`,
    },
  },
  authDemo: {
    split: {
      signIn: `${ROOTS.AUTH_DEMO}/split/sign-in`,
      signUp: `${ROOTS.AUTH_DEMO}/split/sign-up`,
      resetPassword: `${ROOTS.AUTH_DEMO}/split/reset-password`,
      updatePassword: `${ROOTS.AUTH_DEMO}/split/update-password`,
      verify: `${ROOTS.AUTH_DEMO}/split/verify`,
    },
    centered: {
      signIn: `${ROOTS.AUTH_DEMO}/centered/sign-in`,
      signUp: `${ROOTS.AUTH_DEMO}/centered/sign-up`,
      resetPassword: `${ROOTS.AUTH_DEMO}/centered/reset-password`,
      updatePassword: `${ROOTS.AUTH_DEMO}/centered/update-password`,
      verify: `${ROOTS.AUTH_DEMO}/centered/verify`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    fileManager: `${ROOTS.DASHBOARD}/file-manager`,
    permission: `${ROOTS.DASHBOARD}/permission`,
    calendar: `${ROOTS.DASHBOARD}/calendar`,
    general: {
      app: `${ROOTS.DASHBOARD}/app`,
      course: `${ROOTS.DASHBOARD}/course`,
      portfolio: `${ROOTS.DASHBOARD}/portfolio`,
      live: `${ROOTS.DASHBOARD}/live`,
      finance: `${ROOTS.DASHBOARD}/finance`,
      orientation: `${ROOTS.DASHBOARD}/orientation`,
      faq: `${ROOTS.DASHBOARD}/faq`,
    },
    user: {
      root: `${ROOTS.DASHBOARD}/user`,
      new: `${ROOTS.DASHBOARD}/user/new`,
      list: `${ROOTS.DASHBOARD}/user/list`,
      cards: `${ROOTS.DASHBOARD}/user/cards`,
      profile: `${ROOTS.DASHBOARD}/user/profile`,
      account: `${ROOTS.DASHBOARD}/user/account`,
      edit: (id: string) => `${ROOTS.DASHBOARD}/user/${id}/edit`,
      demo: {
        edit: `${ROOTS.DASHBOARD}/user/${MOCK_ID}/edit`,
      },
    },

    course: {
      root: `${ROOTS.DASHBOARD}/course`,
      new: `${ROOTS.DASHBOARD}/course/new`,
      list: `${ROOTS.DASHBOARD}/course/list`,
      details: (id: string) => `${ROOTS.DASHBOARD}/course/${id}`,
      demo: {
        details: `${ROOTS.DASHBOARD}/course/${MOCK_ID}`,
      },
    },

    portfolio: {
      root: `${ROOTS.DASHBOARD}/portfolio`,
      new: `${ROOTS.DASHBOARD}/portfolio/new`,
      list: `${ROOTS.DASHBOARD}/portfolio/list`,
      details: (id: string) => `${ROOTS.DASHBOARD}/portfolio/${id}`,
      demo: {
        details: `${ROOTS.DASHBOARD}/portfolio/${MOCK_ID}`,
      },
    },

    live: {
      root: `${ROOTS.DASHBOARD}/live`,
      new: `${ROOTS.DASHBOARD}/live/new`,
      list: `${ROOTS.DASHBOARD}/live/list`,
      details: (id: string) => `${ROOTS.DASHBOARD}/live/${id}`,
      demo: {
        details: `${ROOTS.DASHBOARD}/live/${MOCK_ID}`,
      },
    },

    finance: {
      root: `${ROOTS.DASHBOARD}/finance`,
      new: `${ROOTS.DASHBOARD}/finance/new`,
      list: `${ROOTS.DASHBOARD}/finance/list`,
      details: (id: string) => `${ROOTS.DASHBOARD}/finance/${id}`,
      demo: {
        details: `${ROOTS.DASHBOARD}/finance/${MOCK_ID}`,
      },
    },

    orientation: {
      root: `${ROOTS.DASHBOARD}/orientation`,
      new: `${ROOTS.DASHBOARD}/orientation/new`,
      list: `${ROOTS.DASHBOARD}/orientation/list`,
      details: (id: string) => `${ROOTS.DASHBOARD}/orientation/${id}`,
      edit: (id: string) => `${ROOTS.DASHBOARD}/orientation/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/orientation/${MOCK_ID}`,
      },
    },

    faq: {
      root: `${ROOTS.DASHBOARD}/faq`,
      new: `${ROOTS.DASHBOARD}/faq/new`,
      list: `${ROOTS.DASHBOARD}/faq/list`,
      details: (id: string) => `${ROOTS.DASHBOARD}/faq/${id}`,
      demo: {
        details: `${ROOTS.DASHBOARD}/faq/${MOCK_ID}`,
      },
    },
  },
};
