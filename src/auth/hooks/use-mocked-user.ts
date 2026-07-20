import { _mock } from 'src/_mock';

// To get the user from the <AuthContext/>, you can use

// Change:
// import { useMockedUser } from 'src/auth/hooks';
// const { user } = useMockedUser();

// To:
// import { useAuthContext } from 'src/auth/hooks';
// const { user } = useAuthContext();

// ----------------------------------------------------------------------

export function useMockedUser() {
  const user = {
    id: '8864c717-587d-472a-929a-8e5f298024da-0',
    displayName: 'Numonov Tohir',
    email: 'numonovtokhir@gmail.com',
    photoURL: 'https://i.pinimg.com/474x/7d/de/33/7dde338d2ca21f84ce726669bf99b25b.jpg',
    phoneNumber: _mock.phoneNumber(1),
    country: _mock.countryNames(1),
    address: 'Tashkent',
    state: 'Toshkent',
    city: 'Yunusobod',
    zipCode: '1000',
    about: 'Praesent turpis. Phasellus viverra nulla ut metus varius laoreet. Phasellus tempus.',
    role: 'superadmin',
    isPublic: true,
  };

  return { user };
}
