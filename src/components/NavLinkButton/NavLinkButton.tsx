import { INavLinkButton } from '../../types/NavLinkButton';
import { ISectionId } from '../../types/SectionId';
import './nav-link-button.scss';

type Props = {
  navLinkButton: INavLinkButton;
  handleClick: (sectionId: ISectionId) => void;
};

export const NavLinkButton: React.FC<Props> = ({
  navLinkButton: { sectionId, label },
  handleClick,
}) => {
  return (
    <button className="nav-link-button" onClick={() => handleClick(sectionId)}>
      {label}
    </button>
  );
};
