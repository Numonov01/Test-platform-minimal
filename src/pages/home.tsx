import { Helmet } from 'react-helmet-async';

import { HomeView } from 'src/sections/home/view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'Kelajak Markazi - Ta&apos;lim kelajak kaliti',
  description:
    'Zamonaviy o&apos;quv dasturlari, professional o&apos;qituvchilar va keng imkoniyatlar.',
};

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>

      <HomeView />
    </>
  );
}
