import bannerImg from 'assets/screens.svg';

import { Button } from 'components/CTAButton';

import classes from 'styles/pages/Hero.module.scss';

export function HeroSection() {
  return (
    <section className={classes.container} id="home">
      <h1>
        Reinvente
        <h2>o seu evento economizando</h2>
      </h1>
      <span>
        Seu evento deve ser em um metaverso, e isso nunca foi tão fácil!
      </span>
      <div className={classes.container__actionBtns}>
        <Button variant="outlined">Agende uma Demo</Button>
        <Button>Entre em contato</Button>
      </div>
      <img src={bannerImg} alt="Screens" />
    </section>
  );
}
