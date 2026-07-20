import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { OverviewFinanceView } from 'src/sections/overview/finance/view';

// ----------------------------------------------------------------------

const metadata = { title: `Finance | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <OverviewFinanceView />
    </>
  );
}
