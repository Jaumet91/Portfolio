import { useContext } from 'react';

import { ThemeContext } from '../../../utils';
import { motion } from 'framer-motion';
import {
  patternMeshDark,
  vectorStairsDark,
  patternMeshLight,
  vectorStairsLight,
} from '../../../assets';

const btnAni = {
  hover: { y: -3 },
  tap: { y: 0 },
};

export const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <section
        id='about'
        className='max-w-[1440px] mx-auto lg:px-[100px] sm:px-[40px] lg:pt-64 md:pt-60 pt-52 relative'>
        <div className='absolute lg:right-[30px] lg:top-[170px] block'>
          <img
            src={theme === 'dark' ? vectorStairsDark : vectorStairsLight}
            alt='vector-about'
          />
        </div>

        <div
          className='md:grid sm:grid-cols-12 md:gap-x-2 md:gap-y-10 bg-secondary sm:rounded-3xl
           md:py-20 py-10 md:px-0 sm:px-12 px-6 dark:text-white dark:bg-secondary-inverted'>
          <div className='md:col-start-2 md:col-span-10'>
            <div className='font-extrabold big-heading md:mb-0 mb-10'>
              I build things for the web.
            </div>
          </div>
          <div className='md:col-start-2 md:col-span-10 z-10 md:mb-0 mb-10'>
            <div className='leading-relaxed'>
              Hi, my name is Jaime Cortes and {"I'm"} a electronic engineer
              specializing in building exceptional digital experiences. {"I've"}{' '}
              entered the world of web development in March 2022, motivated by
              my passion and curiosity for understanding videogames and digital
              media.
            </div>
          </div>
          <div className='flex justify-center md:block md:col-start-2 '>
            <motion.button
              variants={btnAni}
              whileHover='hover'
              whileTap='tap'
              className='px-2 py-3 sm:w-[200px] w-[195px] rounded-xl bg-btn hover:shadow-md
            text-white dark:text-background-inverted hover:shadow-black/30 transition-shadow 
            dark:bg-white justify-center'>
              {"Let's"} book a call
            </motion.button>
          </div>
        </div>

        <div className='absolute lg:left-[0px] lg:top-[800px] block'>
          <img
            src={theme === 'dark' ? patternMeshDark : patternMeshLight}
            alt='vector-about'
          />
        </div>

        <div className='absolute lg:right-[720px] lg:top-[850px] rotate-45 block'>
          <img
            src={theme === 'dark' ? vectorStairsDark : vectorStairsLight}
            alt='vector-about'
          />
        </div>
      </section>
    </>
  );
};
