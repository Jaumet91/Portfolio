import { About, Projects, Contact, Head } from '../pages/Home';
import { NavHome } from '../nav';

export const Home = () => {
  return (
    <>
      <NavHome />
      <Head />
      <About />
      <Projects />
      <Contact />
    </>
  );
};
