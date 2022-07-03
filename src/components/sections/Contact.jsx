import { useContext } from 'react';
import { motion } from 'framer-motion';
import validator from 'validator';

import { ThemeContext } from '../../utils';
import { useForm } from '../../hooks';
import {
  phoneIconDark,
  phoneIconLight,
  emailIconLight,
  emailIconDark,
  locationIconDark,
  locationIconLight,
  workingDark,
  workingLight,
  patternMeshDark,
  patternMeshLight,
} from '../../assets';

const btnAni = {
  hover: { y: -3 },
  tap: { y: 0 },
};

export const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const [formMessageValues, handleInputChange] = useForm({
    msgName: '',
    msgEmail: '',
    msgPhone: '',
    msgNote: '',
  });

  const { msgName, msgEmail, msgPhone, msgNote } = formMessageValues;

  const handleMessage = e => {
    e.preventDefault();
    console.log(formMessageValues);
  };

  return (
    <section
      id='contact'
      className='max-w-[1440px] mx-auto lg:px-[100px] sm:px-[40px] lg:pt-64 md:pt-60 mt-[450px] relative'>
      <div className='absolute right-0 -top-[300px] lg:hidden'>
        <img
          src={theme === 'dark' ? patternMeshDark : patternMeshLight}
          alt='vector-about'
        />
      </div>
      <div className='absolute -top-[640px] -left-[160px]'>
        <img
          src={theme === 'dark' ? workingDark : workingLight}
          alt='vector-about'
        />
      </div>
      <div
        className='bg-secondary sm:rounded-3xl md:py-20 py-14 md:px-0 sm:px-12 px-6
         dark:text-white dark:bg-secondary-inverted'>
        <div>
          <div className='flex justify-center lg:bg-secondary dark:lg:bg-secondary-inverted '>
            <h2 className='dark:text-white font-bold md:text-[34px] text-2xl lg:px-16 pb-14 lg:mb-20'>
              Get in touch
            </h2>
          </div>
          <div
            className=' lg:bg-white dark:lg:bg-background-inverted mb-14
            dark:text-white lg:px-16'>
            {"I'm"} available to work on your projects and bring your ideas to
            life. {"I'm"} just a click away.
          </div>
          <div className='flex justify-start items-center mb-10'>
            <div>
              <img
                src={`${
                  theme === 'dark' ? locationIconDark : locationIconLight
                }`}
              />
            </div>
            <div className='pl-7'>Murcia, Spain</div>
          </div>
          <div className='flex justify-start items-center mb-10'>
            <div>
              <img
                src={`${theme === 'dark' ? phoneIconDark : phoneIconLight}`}
              />
            </div>
            <div className='pl-7'>609-431-585</div>
          </div>
          <div className='flex justify-start items-center mb-14'>
            <div>
              <img
                src={`${theme === 'dark' ? emailIconDark : emailIconLight}`}
              />
            </div>
            <div className='pl-7'>email@email.com</div>
          </div>
        </div>

        <div>
          <div className='flex justify-center lg:bg-secondary dark:lg:bg-secondary-inverted '>
            <h2 className='dark:text-white font-bold md:text-[34px] text-2xl pt-3 lg:px-16 mb-7 lg:mb-20'>
              Send me a message
            </h2>
          </div>
          <form onSubmit={handleMessage}>
            <div className='mb-6'>
              <input
                type='text'
                className='dark:bg-background-inverted bg-white p-3 dark:text-white rounded-xl w-full'
                placeholder='Name'
                name='msgName'
                value={msgName}
                onChange={handleInputChange}
              />
            </div>
            <div className='mb-6'>
              <input
                type='text'
                className={`dark:bg-background-inverted bg-white p-3 dark:text-white rounded-xl w-full ${
                  !validator.isEmail(msgEmail)
                    ? 'focus:outline-red-500 text-pink-500 dark:text-pink-500'
                    : 'outline-green-500'
                }`}
                placeholder='Email Adress'
                name='msgEmail'
                value={msgEmail}
                onChange={handleInputChange}
              />
            </div>
            <div className='mb-6'>
              <input
                type='text'
                className='dark:bg-background-inverted bg-white p-3 dark:text-white rounded-xl w-full'
                placeholder='Phone Number'
                name='msgPhone'
                value={msgPhone}
                onChange={handleInputChange}
              />
            </div>
            <div className='mb-6'>
              <input
                type='text'
                className='dark:bg-background-inverted bg-white p-3 dark:text-white rounded-xl w-full pb-[300px]'
                placeholder='Enter your message'
                name='msgNote'
                value={msgNote}
                onChange={handleInputChange}
              />
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
                className='px-2 py-3 sm:w-[200px] w-[195px] rounded-xl bg-btn hover:shadow-md
                text-white dark:text-background-inverted hover:shadow-black/30 transition-shadow 
                dark:bg-white justify-center'
                type='submit'>
                Submit
              </motion.button>
            </motion.div>
          </form>
        </div>
      </div>
    </section>
  );
};
