import { About, Projects, Contact, Hero } from '../sections';
import { Navbar } from '../nav';

export const Home = () => {
  return (
    <>
      <Navbar />
      <main
        className='dark:bg-background-inverted mx-auto lg:px-40 md:px-24 sm:px-12 px-6 bg-white transition-colors
       flex-col min-h-screen'>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
};
