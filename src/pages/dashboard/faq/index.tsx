import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { OverviewFaqView } from 'src/sections/overview/faq/view';

// ----------------------------------------------------------------------

const metadata = { title: `Qo'llab-quvvatlash | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <OverviewFaqView />
    </>
  );
}
