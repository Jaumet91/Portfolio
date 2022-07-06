import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineExperiment,
  AiOutlineShake,
  AiOutlineCoffee,
} from 'react-icons/ai';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { WiDaySunny, WiHorizon } from 'react-icons/wi';
import { motion, useCycle } from 'framer-motion';

import { ThemeContext } from '../../utils';
import { useScrollDirection } from '../../hooks';
import { config } from '../../config';
import { NavToggler, Avatar } from './';
import {
  container,
  item,
  btnAni,
  menuItemVariants,
  navigationVariants,
  sidebarVariants,
} from './animations';

const { navLinks, socialMedia } = config;

const iconsMenu = [AiOutlineCoffee, AiOutlineExperiment, AiOutlineShake];
const iconsFixed = [FiGithub, FiTwitter, FiLinkedin];

export const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 767;

  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledToTop(window.pageYOffset < 50);
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleOnClick = () => {
    window.scrollTo({ top: 0 });

    if (isOpen) {
      toggleOpen(false);
    }
  };

  return (
    <header>
      {width > breakpoint ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.4,
              delay: 2.2,
            }}
            className='fixed hidden md:block md:left-[20px] lg:left-[40px] w-[40px] bottom-0 z-10'>
            <ul className='flex-col items-center m-0 p-0 dark:text-slate-300 text-light-black mb-5'>
              {socialMedia.map(({ url, name }, i) => {
                const Icon = iconsFixed[i];
                return (
                  <motion.li
                    whileHover={{ y: -3 }}
                    key={name}
                    className='grid place-content-center'>
                    <a
                      href={url}
                      className='p-3'
                      target='_blank'
                      rel='noopener noreferrer'>
                      <Icon
                        size={20}
                        className='hover:text-emerald-400 dark:hover:text-purple-600'
                      />
                    </a>
                  </motion.li>
                );
              })}
            </ul>
            <span className='hidden md:block h-20 w-[1px] m-auto dark:bg-slate-300 bg-light-black'></span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.4,
              delay: 2.2,
            }}
            className='fixed hidden md:block right-[20px] lg:right-[40px] w-[40px] bottom-0 z-10 vertical-r 
            text-light-black dark:text-slate-300 font-extralight tracking-widest'>
            <div className='flex items-center relative'>
              <motion.a
                whileHover={{ y: -3 }}
                href='mailto:jacofu91@gmail.com'
                className='mx-[20px] my-auto mb-5 text-xs hover:text-primary dark:hover:text-purple-500'>
                jacofu91@gmail.com
              </motion.a>
              <span className='hidden md:block h-20 w-[1px] m-auto dark:bg-slate-300 bg-light-black'></span>
            </div>
          </motion.div>

          <motion.nav
            className={`flex container justify-between py-2 fixed transition-shadow duration-500 z-50
              min-w-full px-5 ${
                scrolledToTop === false
                  ? 'backdrop-blur-md bg-white/70 dark:bg-background-inverted/70 shadow-lg shadow-black/5 dark:shadow-black/20'
                  : 'shadow-none'
              }`}
            initial={{ y: -200 }}
            animate={{
              y: scrolledToTop || scrollDirection === 'up' ? 0 : -200,
            }}
            transition={{
              ease: [0.6, 0.01, -0.05, 0.95],
              duration: scrollDirection === 'up' ? 0.35 : 0.6,
            }}>
            <Link to='/' className='order-first' onClick={handleOnClick}>
              <div className='flex items-center ml-5'>
                <Avatar theme={theme} />
              </div>
            </Link>

            <div className='order-last hidden md:flex items-center dark:text-white text-light-black'>
              <motion.ul
                variants={container}
                initial='hidden'
                animate='visible'
                className='grid grid-cols-3'
                onHoverEnd={() => setActiveIndex(null)}>
                {navLinks.map(({ url, name }, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <motion.li
                      key={i}
                      variants={item}
                      className='flex justify-end'
                      onHoverStart={() => setActiveIndex(i)}>
                      <a
                        className='px-6 py-3 mx-2 inline-block relative'
                        href={url}>
                        {isActive ? (
                          <motion.span
                            layoutId='shadow'
                            className='absolute inset-0 dark:bg-[#191c23] bg-primary rounded-md -z-10'
                          />
                        ) : null}
                        <span>{name}</span>
                      </a>
                    </motion.li>
                  );
                })}
              </motion.ul>

              <motion.button
                variants={btnAni}
                whileHover='hover'
                whileTap='tap'
                className='px-6 py-3 rounded-md ml-2 bg-secondary dark:bg-secondary-inverted  hover:shadow-md 
              shadow-black/5 transition-shadow'>
                Resume
              </motion.button>

              <div
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className='hover:bg-hover-1 dark:hover:bg-[#191c23] w-12 h-12 rounded-md place-content-center grid
                  transition-colors ml-3'>
                {theme === 'dark' ? (
                  <WiDaySunny
                    size={42}
                    className=' text-toggle hover:text-hover-2 dark:hover:text-hover-inverted cursor-pointer transition-colors p-2'
                  />
                ) : (
                  <WiHorizon
                    size={42}
                    className=' text-toggle hover:text-hover-2 dark:hover:text-hover-inverted cursor-pointer transition-colors p-2'
                  />
                )}
              </div>
            </div>
          </motion.nav>
        </>
      ) : (
        <>
          <div
            className={`${
              isOpen &&
              'backdrop-blur-md bg-white/70 dark:bg-background-inverted/70 fixed w-screen h-screen z-50'
            }`}>
            <motion.div
              className={`flex container justify-between py-2 fixed transition-shadow duration-500 
                min-w-full px-5 z-20 ${
                  scrolledToTop === false
                    ? 'backdrop-blur-md bg-white/70 dark:bg-background-inverted/70 shadow-lg shadow-black/5 dark:shadow-black/20'
                    : 'shadow-none'
                }`}
              initial={{ y: -200 }}
              animate={
                !isOpen && {
                  y: scrolledToTop || scrollDirection === 'up' ? 0 : -200,
                }
              }
              transition={{
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: scrollDirection === 'up' ? 0.35 : 0.6,
              }}>
              <Link to='/' className='order-first z-20' onClick={handleOnClick}>
                <div className='flex items-center'>
                  <Avatar theme={theme} />
                </div>
              </Link>

              <span
                className={`${isOpen && 'fixed w-screen h-screen z-10'}`}
                onClick={() => {
                  isOpen && toggleOpen();
                }}></span>

              <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}>
                <NavToggler toggle={() => toggleOpen()} theme={theme} />
                <motion.div
                  className='background grid place-content-center'
                  variants={sidebarVariants}>
                  <div
                    onClick={() =>
                      setTheme(theme === 'dark' ? 'light' : 'dark')
                    }
                    className=' dark:bg-opacity-20 bg-opacity-5 bg-black w-12 h-12 rounded-md place-content-center grid
                      transition-colors ml-5 mt-5 absolute z-50'>
                    {theme === 'dark' ? (
                      <WiDaySunny
                        size={45}
                        className=' text-toggle hover:text-hover-2 dark:hover:text-hover-inverted cursor-pointer transition-colors p-2'
                      />
                    ) : (
                      <WiHorizon
                        size={45}
                        className=' text-toggle hover:text-hover-2 dark:hover:text-hover-inverted cursor-pointer transition-colors p-2'
                      />
                    )}
                  </div>
                  <div className='text-center'>
                    <motion.ul
                      variants={navigationVariants}
                      className='inline-block text-center'>
                      {navLinks.map(({ url, name }, i) => {
                        const Icon = iconsMenu[i];
                        return (
                          <motion.li
                            key={i}
                            variants={menuItemVariants}
                            className='cursor-pointer my-14 hover:text-primary text-center
                          dark:hover:text-primary-inverted dark:text-white text-light-black transition-colors'>
                            <a href={url} onClick={() => toggleOpen(false)}>
                              <div className='flex m-auto w-fit'>
                                <Icon size={25} />
                                <span className='ml-5'>{name}</span>
                              </div>
                            </a>
                          </motion.li>
                        );
                      })}
                    </motion.ul>
                  </div>

                  <motion.div
                    variants={btnAni}
                    whileHover='hover'
                    whileTap='tap'
                    className=' w-[150px] flex justify-center'>
                    <button
                      className='px-8 py-4 rounded-md bg-btn hover:shadow-md text-white dark:text-background-inverted
                      shadow-black/5 transition-shadow dark:bg-white'>
                      Resume {/* TODO: descarga CV */}
                    </button>
                  </motion.div>
                </motion.div>
              </motion.nav>
            </motion.div>
          </div>
        </>
      )}
    </header>
  );
};
