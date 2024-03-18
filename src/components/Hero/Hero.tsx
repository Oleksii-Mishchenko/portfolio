import { Container } from '../Container';
import { MainButton } from '../MainButton';
import photo from '../../assets/images/portrait.jpg';
import './hero.scss';

export const Hero = () => {
  return (
    <Container className="container main__container" hasLine>
      <section className="hero">
        <div className="hero__info">
          <h1 className="hero__title">{'hi, i am \n oleksii mishchenko.'}</h1>

          <p className="hero__description">
            I am a Kyiv based front-end developer with a focus on creating fast,
            accessible, visually appealing and responsive websites.
          </p>

          <MainButton text="Contact Me" />
        </div>

        <div className="hero__photo">
          <img src={photo} alt="My portrait" className="hero__portrait" />
        </div>
      </section>
    </Container>
  );
};
