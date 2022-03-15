import classes from 'styles/components/TestimonialCard.module.scss';

export function TestimonialCard() {
  return (
    <div className={classes.container}>
      <div className={classes.container__heading}>
        <img src="https://picsum.photos/100" alt="Avatar X" />
        <div className={classes.container__heading__name}>
          <strong>John Doe</strong>
          <strong>Designer</strong>
        </div>
      </div>
      <div className={classes.container__testimonial}>
        <p>
          Slate helps you see how many more days you need to work to reach your
          financial goal for the month and year. Slate helps you see how many
          more days you need to work to reach your financial goal for the month
          and year. Your financial goal for the month and year.
        </p>
      </div>
    </div>
  );
}
