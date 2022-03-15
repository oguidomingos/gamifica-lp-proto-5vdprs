import { ReactNode } from 'react';
import classes from 'styles/components/CTAButton.module.scss';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  variant?: 'filled' | 'outlined';
  children: ReactNode;
}

export function Button({
  type = 'button',
  onClick = () => null,
  variant = 'filled',
  children,
}: ButtonProps) {
  return variant === 'filled' ? (
    <button
      onClick={onClick}
      type={type}
      className={`${classes.ctaBtn} ${classes.filled}`}
    >
      {children}
    </button>
  ) : (
    <button
      onClick={onClick}
      type={type}
      className={`${classes.ctaBtn} ${classes.outlined}`}
    >
      {children}
    </button>
  );
}
