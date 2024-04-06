import { useCallback, useEffect, useState } from 'react';
import cn from 'classnames';
import { navLinkButtons } from '../../assets/navLinkButtons/navLinkButtons';
import { NavLinkButton } from '../NavLinkButton';
import './menu.scss';
import { scrollToSection } from '../../utils/scrollToSection';
import { ISectionId } from '../../types/SectionId';

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

  const handleNavButtonClick = useCallback(
    (sectionId: ISectionId) => {
      if (isOpen) {
        setIsOpen(false);
      }

      scrollToSection(sectionId);
    },
    [isOpen],
  );

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

        {navLinkButtons.map(navLinkButton => (
          <li className="menu__item" key={navLinkButton.sectionId}>
            <NavLinkButton
              navLinkButton={navLinkButton}
              onClick={() => handleNavButtonClick(navLinkButton.sectionId)}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
