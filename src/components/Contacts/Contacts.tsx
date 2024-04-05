import { socials } from '../../assets/socials/socials';
import { ISectionId } from '../../types/SectionId';
import { Container } from '../Container';
import { Social } from '../Social';
import './contacts.scss';

export const Contacts = () => {
  return (
    <Container className="container main__container" id={ISectionId.Contacts}>
      <section className="contacts">
        <div className="contacts__info">
          <h2 className="contacts__title">Let’s connect</h2>

          <p className="contacts__message">
            Should you need to contact me, feel free to do it in any convenient
            way.
          </p>
        </div>

        <div className="contacts__content">
          <div className="contacts__general">
            <p className="contacts__contact">
              Waiting for your emails{' '}
              <a
                href="mailto:alex.mishch@gmail.com"
                className="contacts__contact-link"
              >
                alex.mishch@gmail.com
              </a>
            </p>

            <p className="contacts__contact">
              For more info here’s my{' '}
              <a href="/" target="_blank" className="contacts__contact-link">
                CV
              </a>
            </p>
          </div>

          <ul className="contacts__socials">
            {socials.map(social => (
              <li className="contacts__social" key={social.link}>
                <Social social={social} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Container>
  );
};
