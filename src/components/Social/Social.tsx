import { ISocial } from '../../types/Social';
import './social.scss';

type Props = {
  social: ISocial;
};

export const Social: React.FC<Props> = ({ social }) => {
  const { image: Component, link } = social;

  return (
    <a href={link} target="_blank" className="social">
      <Component className="social__image" />
    </a>
  );
};
