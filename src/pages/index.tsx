import { WithHeader } from 'containers/withHeader';

import { HeroSection } from './Hero';

import classes from 'styles/pages/App.module.scss';
import { FeaturesSection } from './Features';
import { Contents } from './Contents';
import { Gallery } from './Gallery';
import { Partners } from './Partners';
import { Testimonials } from './Testimonials';

function App() {
  return (
    <main className={classes.container}>
      <HeroSection />
      <FeaturesSection />
      <Contents />
      <Gallery />
      <Partners />
      <Testimonials />
    </main>
  );
}

export default WithHeader(App);
