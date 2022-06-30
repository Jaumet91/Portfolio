import { useContext } from 'react';

import { ThemeContext } from '../../../utils';
import { motion } from 'framer-motion';
import {
  patternMeshDark,
  vectorStairsDark,
  patternMeshLight,
  vectorStairsLight,
  iphoneDeskDark,
  iphoneDeskLight,
  iphoneSmallDark,
  iphoneSmallLight,
} from '../../../assets';

const btnAni = {
  hover: { y: -3 },
  tap: { y: 0 },
};

export const Hero = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <section
        id='hero'
        className='max-w-[1440px] mx-auto lg:px-[100px] sm:px-[40px] lg:pt-64 md:pt-60 pt-52 relative'>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.4,
            delay: 1.8,
          }}
          className='absolute lg:right-[30px] lg:top-[170px] hidden lg:block'>
          <img
            src={theme === 'dark' ? vectorStairsDark : vectorStairsLight}
            alt='vector-about'
          />
        </motion.div>

        <div
          className='md:grid sm:grid-cols-12 md:gap-x-2 bg-secondary sm:rounded-3xl
           md:py-20 py-10 md:px-0 sm:px-12 px-6 dark:text-white dark:bg-secondary-inverted'>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.4,
              delay: 0.8,
            }}
            className='md:col-start-2 md:col-span-10'>
            <h1 className='font-extrabold big-heading mb-10'>
              I build things for the web.
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.4,
              delay: 1,
            }}
            className='md:col-start-2 md:col-span-10 z-10 mb-12'>
            <div className='leading-relaxed'>
              Hi, my name is Jaime Cortes and {"I'm"} a electronic engineer
              specializing in building exceptional digital experiences. {"I've"}{' '}
              entered the world of web development in March 2022, motivated by
              my passion and curiosity for understanding videogames and digital
              media.
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.4,
              delay: 1.2,
            }}
            className='flex justify-center md:block md:col-start-2 '>
            <motion.button
              variants={btnAni}
              whileHover='hover'
              whileTap='tap'
              className='px-2 py-3 sm:w-[200px] w-[195px] rounded-xl bg-btn hover:shadow-md
            text-white dark:text-background-inverted hover:shadow-black/30 transition-shadow 
            dark:bg-white justify-center'>
              <a href='#contact'>{"Let's"} book a call</a>
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.4,
            delay: 1.8,
          }}
          className='absolute banner:right-[80px] right-[40px] top-[600px] hidden lg:block z-10'>
          <img
            src={theme === 'dark' ? iphoneDeskDark : iphoneDeskLight}
            alt='iphone-image'
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.6,
            delay: 1.6,
          }}
          className='flex justify-center lg:hidden z-50 py-40 px-6'>
          <img
            src={theme === 'dark' ? iphoneSmallDark : iphoneSmallLight}
            alt='iphone-image'
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.4,
            delay: 1.8,
          }}
          className='absolute lg:left-[0px] lg:top-[800px] hidden lg:block'>
          <img
            src={theme === 'dark' ? patternMeshDark : patternMeshLight}
            alt='vector-about'
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, rotate: 45 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.4,
            delay: 1.8,
          }}
          className='absolute lg:left-[450px] right-[calc(50%_-_30px)] lg:top-[980px] top-[100px] block'>
          <img
            src={theme === 'dark' ? vectorStairsDark : vectorStairsLight}
            alt='vector-about'
          />
        </motion.div>
      </section>
    </>
  );
};
