import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { OverviewOrientationView } from 'src/sections/overview/orientation/view';

// ----------------------------------------------------------------------

const metadata = { title: `Orientation | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <OverviewOrientationView />
    </>
  );
}
