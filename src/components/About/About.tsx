import { Container } from '../Container';
import { Link } from '../Link';
import './about.scss';

export const About = () => {
  return (
    <Container className="container main__container" hasLine>
      <section className="about">
        <h2 className="about__title">About me</h2>

        <div className="about__info">
          <h4 className="about__info-title">
            Hi! I am Oleksii, a Kyiv based front-end developer looking for
            exciting opportunities.
          </h4>

          <p className="about__info-description">
            All my life I have been fascinated by computer technologies, and now
            I have the lucky chance to gain experience in web development. My
            financial education and experience in the banking sector and retail
            have given me resilience, a responsible attitude to quality and
            confidence in professionalism. My goal is to create products that
            combine functionality and usefulness with aesthetic appeal. I derive
            great satisfaction when achieving exciting results that I can be
            proud of. I am always on the lookout for new technologies and
            innovations in the world of web development, so I never stop
            learning and growing. Outside of work, I enjoy traveling, learning
            foreign languages, being passionate about aviation and cycling, as
            well as deeply loving pets and enjoying walks in nature.
          </p>

          <Link link={{ style: 'project', name: 'More about me', path: '/' }} />
        </div>
      </section>
    </Container>
  );
};
