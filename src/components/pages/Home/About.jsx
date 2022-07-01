import { useContext, useState } from 'react';
import { motion } from 'framer-motion';

import { ThemeContext } from '../../../utils';
import {
  armClosedDark,
  armClosedLight,
  patternMeshDark,
  patternMeshLight,
  reactLogoDark,
  reactLogoLight,
  reactHover,
  bracketLogoDark,
  bracketLogoLight,
  bracketHover,
  threeDDark,
  threeDLight,
} from '../../../assets';

export const About = () => {
  const { theme } = useContext(ThemeContext);
  const [isShownHoverReactLogo, setIsShownHoverReactLogo] = useState(false);
  const [isShownHoverBracketLogo, setIsShownHoverBracketLogo] = useState(false);

  return (
    <>
      <section
        className='max-w-[1440px] mx-auto lg:px-[100px] sm:px-[40px] px-6 lg:mt-[570px] mt-[200px] relative
        bg-secondary dark:bg-secondary-inverted py-20'>
        <motion.article
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          className='lg:grid lg:grid-cols-12 md:py-20 py-10 lg:py-0 md:px-12 sm:px-12 relative lg:z-0 z-10
                    px-6 rounded-3xl dark:bg-background-inverted lg:dark:bg-secondary-inverted
                  bg-white lg:bg-secondary'>
          <div
            className='flex justify-center lg:block lg:col-span-8 lg:col-start-5 lg:bg-white
                 dark:lg:bg-background-inverted lg:rounded-t-3xl lg:pt-10 '>
            <span className='dark:text-primary-inverted text-primary lg:px-16 '>
              Who I am
            </span>
          </div>
          <div
            className='flex justify-center lg:block lg:col-span-8 lg:col-start-5
              lg:bg-white dark:lg:bg-background-inverted '>
            <h2 className='dark:text-white font-bold md:text-[34px] text-2xl pt-3 lg:px-16 justify-center'>
              About me
            </h2>
          </div>
          <div
            className='lg:col-start-5 lg:col-span-8 pt-6 lg:bg-white dark:lg:bg-background-inverted
            dark:text-white lg:px-16 col-span-full'>
            Hello, {"I'm"} Jaime Cortes a electronic engenieer based in Spain. I
            develop websites with MERN stack and design them with softwares like
            Figma. {"I'm"} also learning the techonology behind web 3.0.
          </div>
          <div
            className='lg:col-start-5 lg:col-span-8 pt-6 lg:bg-white dark:lg:bg-background-inverted
            dark:text-white lg:px-16 rounded-b-3xl col-span-full lg:pb-10'>
            A few months ago {"I've"}discovered my passion for the world of web
            development and the beauty behind building useful websites like the
            one you will find in this portfolio. {"I'm"} now looking for a
            junior dev position to finally kick start my career and learn among
            professionals.
          </div>
        </motion.article>
        <div className='absolute right-0 -top-[220px] lg:hidden'>
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
          id='about'
          className='absolute lg:-top-[400px] sm:-top-[420px] -top-[315px] banner:left-10 lg:-left-10
            -left-20 lg:block lg:w-[500px]'>
          <img
            src={theme === 'dark' ? armClosedDark : armClosedLight}
            alt='vector-about'
          />
        </motion.div>
      </section>
      <section className='max-w-[1440px] mx-auto lg:px-[100px] sm:px-[40px] px-6 lg:mt-[570px] mt-[100px] relative'>
        <div
          className=''
          onMouseEnter={() => setIsShownHoverReactLogo(true)}
          onMouseLeave={() => setIsShownHoverReactLogo(false)}>
          <div className='flex justify-center mb-8'>
            <img
              className='absolute'
              src={theme === 'dark' ? reactLogoDark : reactLogoLight}
              alt='vector-about'
            />
            <img
              className={`${
                isShownHoverReactLogo ? 'opacity-100' : ''
              } opacity-0  z-10 transition-opacity`}
              src={reactHover}
              alt='vector-about'
            />
          </div>
          <div className='flex justify-center mb-6'>
            <h2 className='dark:text-white font-bold md:text-[34px] text-2xl justify-center'>
              Product Design
            </h2>
          </div>
          <div className='dark:text-white mb-6 px-3'>
            I work with certain design tools to create high-fidelity designs and
            prototypes. I design accessible and usable products which aid
            business growth.
          </div>
          <span
            className={`${
              isShownHoverReactLogo
                ? 'bg-[#00ADFD]'
                : 'bg-secondary dark:bg-primary-inverted'
            } block w-full h-[5px] rounded-b-3xl transition-colors`}></span>
        </div>

        <div
          className='mt-[100px]'
          onMouseEnter={() => setIsShownHoverBracketLogo(true)}
          onMouseLeave={() => setIsShownHoverBracketLogo(false)}>
          <div className='flex justify-center mb-8'>
            <img
              className='absolute'
              src={theme === 'dark' ? bracketLogoDark : bracketLogoLight}
              alt='vector-about'
            />
            <img
              className={`${
                isShownHoverBracketLogo ? 'opacity-100' : ''
              } opacity-0  z-10 transition-opacity`}
              src={bracketHover}
              alt='vector-about'
            />
          </div>
          <div className='flex justify-center mb-6'>
            <h2 className='dark:text-white font-bold md:text-[34px] text-2xl justify-center'>
              Website Development
            </h2>
          </div>
          <div className='dark:text-white mb-6 px-3'>
            I use various web technologies to develop attractive websites which
            converts visitors to customers. I develop creative and responsive
            website layouts.
          </div>
          <span
            className={`${
              isShownHoverBracketLogo
                ? 'bg-[#E62074]'
                : 'bg-secondary dark:bg-primary-inverted'
            } block w-full h-[5px] rounded-b-3xl transition-colors`}></span>
        </div>

        <div className='mt-[100px]'>
          <img src={theme === 'dark' ? threeDDark : threeDLight} />
        </div>

        <div className='absolute right-0 -bottom-[150px] lg:hidden'>
          <img
            src={theme === 'dark' ? patternMeshDark : patternMeshLight}
            alt='vector-about'
          />
        </div>
      </section>
    </>
  );
};
