import { motion } from 'framer-motion';

import { config } from '../../config';
import { ProjectsList } from '.';

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
  return (
    <>
      <section
        id='projects'
        className='max-w-[1440px] mx-auto lg:px-[100px] sm:px-[40px] px-6 lg:mt-[240px] mt-[300px]
        bg-secondary dark:bg-secondary-inverted py-20 2xl:rounded-3xl z-0'>
        <div className='flex justify-center lg:bg-secondary dark:lg:bg-secondary-inverted '>
          <h2 className='dark:text-white font-bold md:text-[34px] text-2xl pt-3 lg:px-16 mb-20'>
            My Portfolio
          </h2>
        </div>

        <motion.article
          initial={'offscreen'}
          whileInView={'onscreen'}
          // once:false se repite siempre que se pase por el viewport
          // amount: 1 Toda la carta tiene que pasar para que se active la animacion
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          className='sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-5'>
          {projects.map((project, i) => (
            <motion.div key={project.id} variants={imageAnimate}>
              <ProjectsList
                title={project.title}
                desc={project.description}
                tags={project.tags}
                site={project.urlSite}
                code={project.urlCode}
              />
            </motion.div>
          ))}
        </motion.article>
      </section>
    </>
  );
};
