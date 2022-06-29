import { About, Projects, Contact, Head } from '../pages/Home';
import { NavHome } from '../nav';

export const Home = () => {
  return (
    <div className='dark:bg-background-inverted bg-white transition-colors'>
      <NavHome />
      <Head />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};
