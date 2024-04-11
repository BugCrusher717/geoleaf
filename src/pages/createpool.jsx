import { Helmet } from 'react-helmet-async';

import { CreatePoolView } from 'src/sections/createpool/view';

// ----------------------------------------------------------------------

export default function CreatePoolPage() {
  return (
    <>
      <Helmet>
        <title> CreatePoolPage | Minimal UI </title>
      </Helmet>

      <CreatePoolView />
    </>
  );
}
