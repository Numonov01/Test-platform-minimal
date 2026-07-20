import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { OverviewPortfolioView } from 'src/sections/overview/portfolio/view';

// ----------------------------------------------------------------------

const metadata = { title: `Portfolio | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <OverviewPortfolioView />
    </>
  );
}
