import { About } from '../About';
import { Hero } from '../Hero';
import { Projects } from '../Projects';
import './main.scss';

export const Main = () => {
  return (
    <main className="main">
      <Hero />

      <Projects />

      <About />
    </main>
  );
};
