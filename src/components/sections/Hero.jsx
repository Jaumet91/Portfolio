import { motion } from 'framer-motion';

const btnAni = {
  hover: { y: -3 },
  tap: { y: 0 },
};

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
            delay: 0.8,
          }}>
          <h1 className=' dark:text-white text-light-black mb-1'>
            Hi, my name is
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.4,
            delay: 1,
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
            delay: 1.4,
          }}
          className='mt-5'>
          <div className='leading-relaxed dark:text-slate-300 text-light-black md:max-w-[540px]'>
            {"I'm"} a electronic engineer specializing in building exceptional
            digital experiences. {"I've"} entered the world of web development
            in March 2022, motivated by my passion and curiosity for
            understanding videogames and digital media.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.4,
            delay: 1.6,
          }}
          className='mt-14'>
          <a href='#contact'>
            <motion.button
              variants={btnAni}
              whileHover='hover'
              whileTap='tap'
              className='px-2 py-3 sm:w-[200px] w-[195px] rounded-md bg-primary hover:shadow-md
                dark:text-white hover:shadow-black/30 transition-shadow 
              dark:bg-primary-inverted justify-center text-light-black'>
              {"Let's"} book a call
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
