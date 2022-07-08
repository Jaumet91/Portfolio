import { useContext } from 'react';
import { motion } from 'framer-motion';

import { config } from '../../../config';
import { ProjectsList } from './ProjectsList';
import { ThemeContext } from '../../../utils';

const { projects } = config;

const imageAnimate = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const Projects = () => {
  const { width, lgScreen } = useContext(ThemeContext);
  return (
    <section
      id='projects'
      className='max-w-[1000px] mx-auto py-16 sm:py-20 md:py-24'>
      <div>
        <div>
          <span className='dark:text-primary-inverted text-primary pb-3'>
            My portfolio
          </span>
        </div>
        <div className='flex justify-start items-center mt-2 mb-10'>
          <h2 className='dark:text-white text-light-black font-bold md:text-[34px] text-2xl shrink-0'>
            Projects
          </h2>
          <span className='w-full sm:w-[300px] h-[1px] bg-slate-400 dark:bg-slate-600 ml-3 mt-1 rounded-3xl'></span>
        </div>
      </div>

      <motion.div
        initial={width > lgScreen ? 'offscreen' : ''}
        whileInView={width > lgScreen ? 'onscreen' : ''}
        viewport={width > lgScreen ? { once: true, amount: 0 } : {}}
        transition={width > lgScreen ? { staggerChildren: 0.2 } : {}}
        className='sm:grid sm:grid-cols-2 xl:grid-cols-3 sm:gap-x-5 my-12'>
        {projects.map((project, i) => (
          <motion.div key={project.id} variants={imageAnimate}>
            <ProjectsList
              title={project.title}
              desc={project.description}
              tags={project.tags}
              site={project.urlSite}
              code={project.urlCode}
              i={i}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
