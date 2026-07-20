import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { OrientationCreateView } from 'src/sections/overview/orientation/view';

// ----------------------------------------------------------------------

const metadata = { title: `Create a new orientation | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <OrientationCreateView />
    </>
  );
}
