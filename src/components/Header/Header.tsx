import { Logo } from '../Logo';
import { Menu } from '../Menu';
import './header.scss';

export const Header = () => {
  return (
    <header className="header">
      <Logo />

      <Menu />
    </header>
  );
};
