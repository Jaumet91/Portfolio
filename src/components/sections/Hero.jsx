import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section
      id='hero'
      className='flex mx-auto min-h-screen max-w-[1000px] relative'>
      <div className='flex-col relative my-auto'>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.4,
            delay: 1,
          }}>
          <h1 className=' dark:text-slate-300 text-light-black mb-1'>
            Hi, my name is
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.4,
            delay: 1.1,
          }}>
          <h1 className='font-bold leading-tight big-heading dark:text-primary-inverted text-primary'>
            Jaime Cortes
            <span className='text-primary dark:text-primary-inverted'>.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.4,
            delay: 1.2,
          }}>
          <h1 className='font-semibold leading-tight big-heading dark:text-white text-light-black'>
            I build things for the web
            <span className='text-light-black dark:text-white'>.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.4,
            delay: 1.3,
          }}
          className='mt-5'>
          <p className='leading-relaxed dark:text-slate-300 text-light-black md:max-w-[540px]'>
            {"I'm"} a electronic engineer and {"I'm"} specializing in building
            exceptional digital experiences. {"I've"} entered the world of web
            development in April 2022, taken a deep interest in making websites
            the best they can be for everyone using them.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.4,
            delay: 1.4,
          }}
          className='mt-10'>
          <a href='#contact'>
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
              className='px-8 py-4 sm:w-[200px] w-[195px] rounded-md bg-primary hover:shadow-md
              dark:text-white hover:shadow-black015 transition-shadow 
              dark:bg-primary-inverted justify-center text-light-black'>
              {"Let's"} book a call
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
