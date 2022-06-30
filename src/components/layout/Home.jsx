import { About, Projects, Contact, Hero } from '../pages/Home';
import { NavHome } from '../nav';

export const Home = () => {
  return (
    <>
      <NavHome />
      <main className='dark:bg-background-inverted bg-white transition-colors'>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
};
