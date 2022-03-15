import { FiLayout, FiGlobe, FiInfo } from 'react-icons/fi';

import featuresImg from 'assets/features.svg';

import classes from 'styles/pages/Features.module.scss';

export function FeaturesSection() {
  return (
    <section className={classes.container} id="product">
      <h1>Features</h1>
      <span>
        Most calendars are designed for teams. Slate is designed for freelancers
        who want a simple way to plan their schedule.
      </span>
      <div className={classes.container__content}>
        <div className={classes.container__content__image}>
          <img src={featuresImg} alt="Gamifica Features" />
        </div>
        <div className={classes.container__content__items}>
          <div>
            <h2>
              <FiGlobe />A single source of truth
            </h2>
            <p>
              When you add work to your Slate calendar we automatically
              calculate useful insights
            </p>
          </div>
          <div>
            <h2>
              <FiLayout />
              Intuitive interface
            </h2>
            <p>
              When you add work to your Slate calendar we automatically
              calculate useful insights
            </p>
          </div>
          <div>
            <h2>
              <FiInfo />
              Or with rules
            </h2>
            <p>
              When you add work to your Slate calendar we automatically
              calculate useful insights
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
