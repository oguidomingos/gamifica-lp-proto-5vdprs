import { Button } from 'components/CTAButton';

import boardsImg from 'assets/boards.svg';
import macbookImg from 'assets/macbook.svg';

import classes from 'styles/pages/Contents.module.scss';

export function Contents() {
  return (
    <section className={classes.container}>
      <h1>Contents</h1>
      <span>
        We focus on ergonomics and meeting you where you work. It's only a
        keystroke away.
      </span>

      <div className={classes.container__cards}>
        <div className={classes.container__cards__card}>
          <h2>Work</h2>
          <p>
            Ever wondered if you're too reliant on a client for work? Slate
            helps you identify .
          </p>
          <Button>Sign Up</Button>
          <img src={macbookImg} alt="Macbook" />
        </div>
        <div className={classes.container__cards__card}>
          <h2>Design with real data</h2>
          <p>
            Ever wondered if you're too reliant on a client for work? Slate
            helps you identify .
          </p>
          <Button>Try for free</Button>
          <img src={boardsImg} alt="Boards" />
        </div>
      </div>
    </section>
  );
}
