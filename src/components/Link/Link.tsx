import { IProjectLink } from '../../types/Project';
import './link.scss';

type Props = {
  link: IProjectLink;
};

export const Link: React.FC<Props> = ({ link: { path, name, style } }) => {
  return (
    <a href={path} target="_blank" className="link">
      <span className={`link__name link__name--${style}`}>{name}</span>
    </a>
  );
};
