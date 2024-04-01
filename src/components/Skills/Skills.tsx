import { Container } from '../Container';
import './skills.scss';
import { skills } from '../../assets/skills/skills';
import { Skill } from '../Skill';

export const Skills = () => {
  return (
    <Container className="container main__container" hasLine>
      <section className="skills">
        <div className="skills__info">
          <h2 className="skills__title">My Tech Stack</h2>

          <p className="skills__description">
            The skills, tools and technologies I am really good at:
          </p>
        </div>

        <div className="skills__icons">
          <ul className="skills__list">
            {skills.map(skill => (
              <li className="skills__item" key={skill.label}>
                <Skill skill={skill} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Container>
  );
};
