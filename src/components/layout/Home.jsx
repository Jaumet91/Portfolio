import { About, Projects, Contact } from '../pages/Home';
import { NavHome } from '../nav';

export const Home = () => {
  return (
    <>
      <NavHome />
      <main className='dark:bg-background-inverted bg-white transition-colors'>
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
};
