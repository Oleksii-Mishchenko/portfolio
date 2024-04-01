import { ISkill } from '../../types/Skill';
import './skill.scss';

type Props = {
  skill: ISkill;
};

export const Skill: React.FC<Props> = ({ skill }) => {
  const { image: SVGImage, label } = skill;

  return (
    <article className="skill">
      <SVGImage className="skill__image" />

      <p className="skill__label">{label}</p>
    </article>
  );
};
