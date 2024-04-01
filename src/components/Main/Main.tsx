import { About } from '../About';
import { Hero } from '../Hero';
import { Projects } from '../Projects';
import { Skills } from '../Skills';
import './main.scss';

export const Main = () => {
  return (
    <main className="main">
      <Hero />
      <Skills />
      <Projects />
      <About />
    </main>
  );
};
