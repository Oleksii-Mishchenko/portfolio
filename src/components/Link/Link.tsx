import cn from 'classnames';
import { IProjectLink } from '../../types/Project';
import './link.scss';

type Props = {
  link: IProjectLink;
  relClass?: string;
};

export const Link: React.FC<Props> = ({
  link: { path, name, style },
  relClass,
}) => {
  return (
    <a href={path} target="_blank" className={cn('link', relClass)}>
      <span className={`link__name link__name--${style}`}>{name}</span>
    </a>
  );
};
