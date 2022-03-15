import classes from 'styles/pages/Partners.module.scss';

export function Partners() {
  const logos = [
    'https://imgur.com/zNyPQLW.png',
    'https://imgur.com/zNyPQLW.png',
    'https://imgur.com/zNyPQLW.png',
    'https://imgur.com/zNyPQLW.png',
    'https://imgur.com/zNyPQLW.png',
    'https://imgur.com/zNyPQLW.png',
  ];
  return (
    <section className={classes.container} id="about">
      <h1>Partners</h1>
      <span>
        We focus on ergonomics and meeting you where you work. It's only a
        keystroke away.
      </span>

      <div className={classes.container__partners}>
        {logos.map((logo) => (
          <img src={logo} alt="Partner" />
        ))}
      </div>
    </section>
  );
}
