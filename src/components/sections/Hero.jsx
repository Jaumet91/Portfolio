import { useContext } from 'react';

import { ThemeContext } from '../../utils';
import { motion } from 'framer-motion';
import {
  patternMeshDark,
  vectorStairsDark,
  patternMeshLight,
  vectorStairsLight,
} from '../../assets';

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
        className='grid place-content-center lg:flex lg:place-content-start
          min-h-screen max-w-[1000px] sm:p-0 mx-auto relative'>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.4,
            delay: 2,
          }}
          className='absolute xl:-right-[160px] lg:-right-[0px] lg:bottom-20 hidden lg:block'>
          <img
            src={theme === 'dark' ? patternMeshDark : patternMeshLight}
            alt='vector-about'
          />
        </motion.div>

        <div className='flex-col relative lg:my-auto'>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.4,
              delay: 1.8,
            }}
            className='absolute -top-[100px] max-w-[300px] left-0 right-0 mx-auto flex justify-center
              lg:hidden'>
            <img
              className='rotate-45 lg:rotate-0'
              src={theme === 'dark' ? vectorStairsDark : vectorStairsLight}
              alt='vector-about'
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.4,
              delay: 0.8,
            }}
            className=''>
            <h1 className='font-semibold leading-tight big-heading dark:text-white text-light-black'>
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
            className='xl:grid xl:grid-cols-2 mt-5'>
            <div className='leading-relaxed dark:text-slate-300 text-light-black md:max-w-[540px]'>
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
            className='flex justify-center md:block mt-14'>
            <a href='#contact'>
              <motion.button
                variants={btnAni}
                whileHover='hover'
                whileTap='tap'
                className='px-2 py-3 sm:w-[200px] w-[195px] rounded-xl bg-primary hover:shadow-md
                dark:text-whitehover:shadow-black/30 transition-shadow 
              dark:bg-primary-inverted justify-center dark:text-white text-light-black'>
                {"Let's"} book a call
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeInOut',
          duration: 0.4,
          delay: 1.8,
        }}
        className='left-0 right-0 mx-auto w-fit scale-50 top-[817px] hidden lg:block z-10'>
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
        className=' lg:hidden z-10 pb-20 pt-52 px-6'>
        <img
          src={theme === 'dark' ? iphoneSmallDark : iphoneSmallLight}
          alt='iphone-image'
        />
      </motion.div> */}
    </>
  );
};
