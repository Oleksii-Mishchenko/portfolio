import { projects } from '../../assets/projects/projects';
import { Container } from '../Container';
import { Project } from '../Project';
import './projects.scss';

export const Projects = () => {
  return (
    <Container className="container main__container" hasLine>
      <section className="projects">
        <div className="projects__header">
          <h2 className="projects__title">Featured Projects</h2>

          <p className="projects__description">
            Here are some of the selected projects that showcase my passion for
            front-end development.
          </p>
        </div>

        <ul className="projects__list">
          {projects.map(project => (
            <li className="projects__item" key={project.id}>
              <Project project={project} />
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
};
