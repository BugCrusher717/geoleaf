import { Helmet } from 'react-helmet-async';

import { HowToUsePageView } from 'src/sections/howtouse/view';

export default function HowToUsePage() {
  return (
    <>
      <Helmet>
        <title> Products | Minimal UI </title>
      </Helmet>

      <HowToUsePageView />
    </>
  );
}
