import { useContext, useState, useEffect } from 'react';
import { AiOutlineBulb, AiOutlineDesktop } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';

import { ThemeContext } from '../../utils';
import {
  armClosedDark,
  armClosedLight,
  patternMeshDark,
  patternMeshLight,
  vectorStairsDark,
  vectorStairsLight,
  threeDDark,
  threeDLight,
  imagesLight,
  imagesDark,
  iphoneFrame,
} from '../../assets';

const variants = {
  enter: direction => {
    return {
      x: direction > 0 ? 10 : -10,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: direction => {
    return {
      zIndex: 0,
      x: direction < 0 ? 10 : -10,
      opacity: 0,
    };
  },
};

export const About = () => {
  const { theme } = useContext(ThemeContext);
  const [isShownHoverBulbLogo, setIsShownHoverBulbLogo] = useState(false);
  const [isShownHoverBracketLogo, setIsShownHoverBracketLogo] = useState(false);
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, imagesLight.length, page);

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    setTimeout(() => paginate(1), 5000);
  }, [paginate]);

  return (
    <>
      <section
        id='about'
        className='max-w-[900px] mx-auto relative dark:bg-background-inverted pt-14'>
        <motion.article
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          className=''>
          <div className=''>
            <span className='dark:text-primary-inverted text-primary pb-3'>
              Who I am
            </span>
          </div>
          <div className='flex justify-start items-center mt-2 mb-10'>
            <h2 className='dark:text-white text-light-black font-bold md:text-[34px] text-2xl shrink-0'>
              About me
            </h2>
            <span className='w-full h-[1px] bg-light-black dark:bg-white ml-3 mt-1 rounded-3xl'></span>
          </div>
          <p className='dark:text-white text-light-black mb-4'>
            Hello, {"I'm"} Jaime Cortes a electronic engenieer based in Spain. I
            develop websites with{' '}
            <span className='text-primary dark:text-primary-inverted'>
              MERN Stack
            </span>{' '}
            <span className='italic'>
              {'"'}MongoDB, Express, React and Node.js{'"'}
            </span>{' '}
            and design them with softwares like Figma. {"I'm"} also learning the
            techonology behind web 3.0.
          </p>
          <p className='dark:text-white text-light-black'>
            A few months ago {"I've"}discovered my passion for the world of web
            development and the beauty behind building useful websites like the
            one you will find in this portfolio. {"I'm"} now looking for a
            junior dev position to finally kick start my career and learn among
            professionals.
          </p>
        </motion.article>

        <div className='sm:grid sm:grid-cols-2 sm:grid-flow-row-dense md:gap-x-8 sm:gap-x-4'>
          <div className='sm:col-span-1'>
            <motion.div
              className='sm:max-w-[416px]'
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0 }}
              onMouseEnter={() => setIsShownHoverBulbLogo(true)}
              onMouseLeave={() => setIsShownHoverBulbLogo(false)}>
              <div className='flex items-center pt-14'>
                <AiOutlineBulb
                  size={60}
                  className={`${
                    isShownHoverBulbLogo
                      ? 'bg-[#00ADFD] '
                      : 'bg-primary dark:bg-primary-inverted'
                  } p-2 rounded-md text-white mr-3 transition-colors drop-shadow-md`}
                />

                <h3 className='dark:text-white text-light-black font-bold md:text-[24px] text-xl justify-center'>
                  Product Design
                </h3>
              </div>
              <div className='dark:text-white text-light-black mb-6 pt-4'>
                I work with certain design tools to create high-fidelity designs
                and prototypes. Strong preference for easy to use, intuitive
                UX/UI.
              </div>
              <span
                className={`${
                  isShownHoverBulbLogo
                    ? 'bg-[#00ADFD]'
                    : 'bg-primary dark:bg-primary-inverted'
                } block w-full h-[5px] rounded-b-3xl transition-colors drop-shadow-sm`}></span>
            </motion.div>
          </div>

          <div className='sm:col-span-full grid place-content-center'>
            <div className='w-[342px] h-[700px] my-14 sm:mt-20 relative flex justify-center items-center overflow-hidden'>
              <img className='w-full absolute z-10' src={iphoneFrame} />
              <AnimatePresence initial={true} custom={direction}>
                <motion.img
                  className='absolute w-[310px] left-[18px]'
                  key={page}
                  src={
                    theme === 'dark'
                      ? imagesDark[imageIndex]
                      : imagesLight[imageIndex]
                  }
                  custom={direction}
                  variants={variants}
                  initial='enter'
                  animate='center'
                  exit='exit'
                  drag='x'
                  transition={{
                    x: {
                      type: 'ease',
                    },
                    opacity: { duration: 0.4 },
                  }}
                />
              </AnimatePresence>
            </div>
          </div>
          <div className='sm:col-span-1 sm:pt-14'>
            <motion.div
              className='sm:max-w-[416px] lg:row-span-2'
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0 }}
              onMouseEnter={() => setIsShownHoverBracketLogo(true)}
              onMouseLeave={() => setIsShownHoverBracketLogo(false)}>
              <div className='flex items-center'>
                <AiOutlineDesktop
                  size={60}
                  className={`${
                    isShownHoverBracketLogo
                      ? 'bg-[#e31f73] '
                      : 'bg-primary dark:bg-primary-inverted'
                  } p-2 rounded-md text-white mr-3 transition-colors drop-shadow-md`}
                />
                <h3 className='dark:text-white text-light-black font-bold md:text-[24px] text-xl  justify-center'>
                  Website Development
                </h3>
              </div>
              <div className='dark:text-white text-light-black mb-6 pt-4'>
                Websites {"don't"} have to be static. I love making pages come
                to life. My layouts will work on any device, big or small.
              </div>
              <span
                className={`${
                  isShownHoverBracketLogo
                    ? 'bg-[#e31f73]'
                    : 'bg-primary dark:bg-primary-inverted'
                } block w-full h-[5px] rounded-b-3xl transition-colors drop-shadow-sm`}></span>
            </motion.div>
          </div>
        </div>

        {/* <div className='absolute right-0 -top-[300px] lg:hidden'>
          <img
            src={theme === 'dark' ? patternMeshDark : patternMeshLight}
            alt='vector-about'
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.4,
            delay: 1.8,
          }}
          className='absolute lg:-top-[400px] sm:-top-[420px] -top-[315px] banner:left-10 lg:-left-10
            -left-20 lg:block lg:w-[500px]'>
          <img
            src={theme === 'dark' ? armClosedDark : armClosedLight}
            alt='vector-about'
          />
        </motion.div> */}

        {/* <div className='mt-[100px] sm:mt-[200px] lg:mt-0 lg:row-span-4 hidden lg:min-w-[400px]'>
          <img src={theme === 'dark' ? threeDDark : threeDLight} />
        </div>

        <div className='hidden sm:block absolute left-[100px] lg:left-[700px] lg:bottom-[680px] bottom-[600px] rotate-90'>
          <img
            src={theme === 'dark' ? vectorStairsDark : vectorStairsLight}
            alt='vector-about'
          />
        </div>

        <div className='absolute right-0 -bottom-[150px] lg:-bottom-[100px]'>
          <img
            src={theme === 'dark' ? patternMeshDark : patternMeshLight}
            alt='vector-about'
          />
        </div> */}
      </section>
    </>
  );
};
