import { Logo } from '../Logo';
import './header.scss';

export const Header = () => {
  return (
    <header className="header">
      <Logo />
      <nav className="menu">Menu</nav>
      <button className="header__menu-button" />
    </header>
  );
};
