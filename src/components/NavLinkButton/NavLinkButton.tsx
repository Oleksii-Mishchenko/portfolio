import { INavLinkButton } from '../../types/NavLinkButton';
import './nav-link-button.scss';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  navLinkButton: INavLinkButton;
};

export const NavLinkButton: React.FC<Props> = ({
  navLinkButton: { label },
  ...rest
}) => {
  return (
    <button className="nav-link-button" {...rest}>
      {label}
    </button>
  );
};
