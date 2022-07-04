import { useContext, useState, useEffect } from 'react';
import { AiOutlineBulb, AiOutlineDesktop } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';

import { ThemeContext } from '../../utils';
import {
  imagesLight,
  imagesDark,
  iphoneFrame,
  patternMeshDark,
  patternMeshLight,
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
    <section
      id='about'
      className='max-w-[900px] mx-auto relative py-16 sm:py-20 md:py-24'>
      <div className='lg:relative'>
        <motion.article
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5, delay: 0 }}>
          <div>
            <span className='dark:text-primary-inverted text-primary pb-3'>
              Who I am
            </span>
          </div>
          <div className='flex justify-start items-center mt-2 mb-10'>
            <h2 className='dark:text-white text-light-black font-bold md:text-[34px] text-2xl shrink-0'>
              About me
            </h2>
            <span className='w-full sm:w-[300px] h-[1px] bg-slate-400 dark:bg-slate-600  ml-3 mt-1 rounded-3xl'></span>
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
      </div>

      <div className='sm:grid sm:grid-cols-2 sm:grid-flow-row-dense lg:grid-flow-row lg:gap-x-20 md:gap-x-8 sm:gap-x-4'>
        <div className='sm:col-span-1 lg:col-start-2 lg:row-start-1 lg:mt-7'>
          <motion.div
            className='sm:max-w-[276px] md:min-w-[276px] md:max-w-[317px] lg:max-w-full'
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
                    ? 'bg-[#00ADFD] drop-shadow-md'
                    : 'bg-primary dark:bg-primary-inverted'
                } p-2 rounded-md text-white mr-3 transition-colors`}
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
              } block w-full h-[5px] rounded-b-3xl transition-colors`}></span>
          </motion.div>
        </div>

        <div className='sm:col-span-full grid place-content-center lg:place-content-start lg:mt-10 lg:col-start-1 lg:col-span-1'>
          <div className='w-[342px] h-[700px] my-14  lg:mt-10 sm:mt-20 sm:mb-0 relative flex justify-center items-center overflow-hidden'>
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

        <div className='sm:col-span-1 sm:pt-14 lg:col-start-2 lg:row-start-1 lg:mt-[370px] lg:pt-0 lg:relative'>
          <motion.div
            className='sm:max-w-[276px] md:min-w-[276px] md:max-w-[317px] lg:max-w-full'
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
                    ? 'bg-[#e31f73] drop-shadow-md'
                    : 'bg-primary dark:bg-primary-inverted'
                } p-2 rounded-md text-white mr-3 transition-colors`}
              />
              <h3 className='dark:text-white text-light-black font-bold md:text-[24px] text-xl  justify-center'>
                Website Development
              </h3>
            </div>
            <div className='dark:text-white text-light-black mb-6 pt-4'>
              Websites {"don't"} have to be static. I love making pages come to
              life with cool animations. My layouts will work on any device, big
              or small.
            </div>
            <span
              className={`${
                isShownHoverBracketLogo
                  ? 'bg-[#e31f73]'
                  : 'bg-primary dark:bg-primary-inverted'
              } block w-full h-[5px] rounded-b-3xl transition-colors drop-shadow-sm mb-6 sm:mb-0`}></span>
          </motion.div>
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0 }}
            className='absolute right-0 -bottom-[100px] hidden lg:block'>
            <img
              src={theme === 'dark' ? patternMeshDark : patternMeshLight}
              alt='vector-about'
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};