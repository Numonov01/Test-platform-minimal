import { Helmet } from 'react-helmet-async';

import { useParams } from 'src/routes/hooks';

import { _orientations } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { OrientationEditView } from 'src/sections/overview/orientation/view';

// ----------------------------------------------------------------------

const metadata = { title: `Orientation edit | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  const { id = '' } = useParams();

  const currentOrientation = _orientations.find((orientation) => orientation.id === id);

  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <OrientationEditView orientation={currentOrientation} />
    </>
  );
}
