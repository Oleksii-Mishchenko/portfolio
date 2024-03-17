import { useEffect, useState } from 'react';
import cn from 'classnames';
import './menu.scss';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleMediaChange = (event: MediaQueryListEvent) => {
      const isBlocked = isOpen && event.matches;
      document.body.style.overflow = isBlocked ? 'hidden' : 'auto';
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, [isOpen]);

  return (
    <nav className="menu">
      <button
        type="button"
        className="menu__button menu__button--open"
        onClick={() => setIsOpen(true)}
      />

      <ul className={cn('menu__list', { 'menu__list--open': isOpen })}>
        <button
          type="button"
          className="menu__button menu__button--close"
          onClick={() => setIsOpen(false)}
        />

        <li className="menu__item">
          <a href="/" className="menu__link">
            Projects
          </a>
        </li>

        <li className="menu__item">
          <a href="/" className="menu__link">
            About
          </a>
        </li>

        <li className="menu__item">
          <a href="/" className="menu__link">
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};
