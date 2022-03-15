import { TestimonialCard } from 'components/TestimonialCard';
import classes from 'styles/pages/Testimonials.module.scss';

export function Testimonials() {
  return (
    <section className={classes.container}>
      <h1>Testimonials</h1>

      <div className={classes.container__testimonials}>
        {[...Array(4).keys()].map((item) => (
          <TestimonialCard />
        ))}
      </div>
    </section>
  );
}
