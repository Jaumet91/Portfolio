import { useContext } from 'react';
import { motion } from 'framer-motion';

import { ThemeContext } from '../../utils';

import { workingDark, workingLight } from '../../assets';

const btnAni = {
  hover: { y: -3 },
  tap: { y: 0 },
};

export const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section id='contact' className='max-w-[1000px] mt-56 mx-auto relative'>
      <div className='absolute -top-[640px] -left-[160px]'>
        <img
          src={theme === 'dark' ? workingDark : workingLight}
          alt='vector-about'
        />
      </div>
      <div
        className='bg-secondary rounded-md md:py-20 py-14 md:px-0 sm:px-12 px-6
         dark:text-white dark:bg-secondary-inverted'>
        <div>
          <div className='flex justify-center lg:bg-secondary dark:lg:bg-secondary-inverted '>
            <h2 className='dark:text-white font-bold md:text-[34px] text-2xl pb-3'>
              Get in touch
            </h2>
          </div>
          <div
            className=' lg:bg-white dark:lg:bg-background-inverted mb-14
            dark:text-white lg:px-16 text-center'>
            {"I'm"} available to work on your projects and bring your ideas to
            life. {"I'm"} just a click away.
          </div>
        </div>

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
            className='px-2 py-3 w-[130px] rounded-md bg-btn hover:shadow-md
                text-white dark:text-background-inverted hover:shadow-black/30 transition-shadow 
                dark:bg-white justify-center'>
            Say Hello
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
