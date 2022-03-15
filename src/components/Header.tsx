import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import classes from 'styles/components/Header.module.scss';
import { Button } from './CTAButton';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Product', href: '#product' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  function toggleMenu() {
    setIsMenuOpen((p) => !p);
  }

  return (
    <header className={classes.header}>
      <a href="/" className={classes.header__logo}></a>

      <nav
        className={`${classes.header__nav} ${
          isMenuOpen ? classes.openMenu : ''
        }`}
      >
        <ul>
          {links.map(({ label, href }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
        <Button variant="outlined">CTA Button</Button>
      </nav>

      <button onClick={toggleMenu} className={classes.header__toggleBtn}>
        {isMenuOpen ? <FiX size={32} /> : <FiMenu size={32} />}
      </button>
    </header>
  );
}
