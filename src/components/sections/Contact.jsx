import { useContext } from 'react';
import { motion } from 'framer-motion';

import { config } from '../../config';
import { ThemeContext } from '../../utils';

const { email } = config;

const btnAni = {
  hover: { y: -3 },
  tap: { y: 0 },
};

export const Contact = () => {
  const { width, lgScreen } = useContext(ThemeContext);
  return (
    <motion.section
      initial={width > lgScreen ? { y: 80, opacity: 0 } : {}}
      whileInView={width > lgScreen ? { y: 0, opacity: 1 } : {}}
      viewport={width > lgScreen ? { once: true, amount: 0 } : {}}
      transition={width > lgScreen ? { duration: 0.5, delay: 0 } : {}}
      id='contact'
      className='max-w-[600px] pt-16 pb-28 sm:py-20 md:py-24 mx-auto relative'>
      <div>
        <div className='flex-col justify-center w-fit left-0 right-0 mx-auto'>
          <span className='dark:text-primary-inverted text-primary pb-2 flex justify-center'>
            {"What's"} Next?
          </span>
          <h2 className='dark:text-white text-light-black font-bold md:text-[34px] text-2xl pb-5'>
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

      <motion.a
        href={`mailto:${email}`}
        initial={width > lgScreen ? { opacity: 0, y: 10 } : {}}
        animate={width > lgScreen ? { opacity: 1, y: 0 } : {}}
        transition={
          width > lgScreen
            ? {
                ease: 'easeInOut',
                duration: 0.4,
                delay: 1.2,
              }
            : {}
        }
        className='flex justify-center'>
        <motion.button
          variants={btnAni}
          whileHover='hover'
          whileTap='tap'
          className='px-6 py-3 w-fit rounded-md bg-btn hover:shadow-md
                text-white dark:text-background-inverted hover:shadow-black/20 transition-shadow 
                dark:bg-white justify-center'>
          Say Hello
        </motion.button>
      </motion.a>
    </motion.section>
  );
};
