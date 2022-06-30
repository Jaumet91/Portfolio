import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGhost, FaRegComment } from 'react-icons/fa';
import { AiOutlineExperiment } from 'react-icons/ai';
import { BiMobileVibration } from 'react-icons/bi';
import { motion, AnimatePresence, useCycle } from 'framer-motion';

import { ThemeContext } from '../../utils';
import { useScrollDirection } from '../../hooks';
import { config } from '../../config';
import { NavToggler, SocialIcons, Avatar } from './';

const { navLinks } = config;

const iconsMenu = [BiMobileVibration, AiOutlineExperiment, FaRegComment];

const btnAni = {
  hover: { y: -3 },
  tap: { y: 0 },
};

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,

      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

const navigationVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const sidebarVariants = {
  open: {
    // clipPath: `circle(1200px at 230px 40px)`,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
  closed: {
    // clipPath: `circle(25px at 230px 40px)`,
    x: 300,
    transition: {
      duration: 0.4,
      delay: 0.4,
    },
  },
};

export const NavHome = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const scrollDirection = useScrollDirection('');
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 875;

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
        <AnimatePresence>
          <motion.nav
            className={`flex container justify-between py-2 fixed transition-shadow duration-500 z-50
              min-w-full px-20 ${
                scrolledToTop === false
                  ? 'backdrop-blur-md bg-white/70 dark:bg-background-inverted/30 shadow-lg shadow-black/5 dark:shadow-black/20'
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
                <span className='ml-3 hidden lg:block dark:text-white'>
                  Jaime Cortes
                </span>
              </div>
            </Link>

            <div className='order-last hidden md:flex items-center dark:text-white'>
              <motion.ul
                className='grid grid-cols-3'
                onHoverEnd={() => setActiveIndex(null)}>
                {navLinks.map(({ url, name }, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <motion.li
                      key={i}
                      className='flex justify-end'
                      onHoverStart={() => setActiveIndex(i)}>
                      <a
                        className='px-5 py-2 mx-2 inline-block relative'
                        href={url}>
                        {isActive ? (
                          <motion.span
                            layoutId='shadow'
                            className='absolute inset-0 dark:bg-[#191c23] bg-primary rounded-lg -z-10'
                          />
                        ) : null}
                        <span>{name}</span>
                      </a>
                    </motion.li>
                  );
                })}
              </motion.ul>

              <motion.div variants={btnAni} whileHover='hover' whileTap='tap'>
                <Link
                  to='/blog'
                  onClick={handleOnClick}
                  className='py-2.5 px-6 mx-2 bg-secondary dark:bg-secondary-inverted rounded-lg hover:shadow-md
               shadow-black/5 transition-shadow'>
                  Blog
                </Link>
              </motion.div>

              <motion.button
                variants={btnAni}
                whileHover='hover'
                whileTap='tap'
                className='px-6 py-2 rounded-lg ml-2 bg-secondary dark:bg-secondary-inverted  hover:shadow-md 
              shadow-black/5 transition-shadow'>
                Resume
              </motion.button>

              <div
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className='hover:bg-hover-1 dark:hover:bg-[#191c23] w-10 h-10 rounded-md place-content-center grid
                  transition-colors ml-3'>
                <FaGhost
                  size={37}
                  className=' text-toggle hover:text-hover-2 dark:hover:text-hover-inverted cursor-pointer transition-colors p-2'
                />
              </div>
            </div>
          </motion.nav>
        </AnimatePresence>
      ) : (
        <>
          <div
            className={`${
              isOpen &&
              'backdrop-blur-sm bg-white/30 dark:bg-background-inverted/30 fixed w-screen h-screen z-50'
            }`}>
            <motion.div
              className={`flex container justify-between py-2 fixed transition-shadow duration-500 
                min-w-full px-5 z-20 ${
                  scrolledToTop === false
                    ? 'backdrop-blur-md bg-white/70 dark:bg-background-inverted/30 shadow-lg shadow-black/5 dark:shadow-black/20'
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
                <div className='flex items-center'>
                  <Avatar theme={theme} />
                </div>
              </Link>
              <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}>
                <NavToggler toggle={() => toggleOpen()} theme={theme} />
                <motion.div className='background' variants={sidebarVariants}>
                  <motion.ul
                    variants={navigationVariants}
                    className=' p-5 absolute left-1/2 -ml-[75px] w-[150px] top-[100px] sm:top-[150px]'>
                    {navLinks.map(({ url, name }, i) => {
                      const Icon = iconsMenu[i];
                      return (
                        <motion.li
                          key={i}
                          variants={menuItemVariants}
                          className='flex items-center space-x-6 cursor-pointer my-14 hover:text-primary
                          dark:hover:text-primary-inverted dark:text-white transition-colors'>
                          <a href={url} onClick={() => toggleOpen(false)}>
                            <div className='flex'>
                              <Icon size={25} />
                              <span className='flex mx-5'>{name}</span>
                            </div>
                          </a>
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                  <div
                    onClick={() =>
                      setTheme(theme === 'dark' ? 'light' : 'dark')
                    }
                    className='hover:bg-[#E3E3E3] dark:hover:bg-[#191c23] w-10 h-10 rounded-md place-content-center grid
                      transition-colors ml-5 mt-5'>
                    <FaGhost
                      size={37}
                      className=' text-toggle hover:text-hover-2 dark:hover:text-hover-inverted cursor-pointer transition-colors p-2'
                    />
                  </div>

                  <motion.div
                    variants={btnAni}
                    whileHover='hover'
                    whileTap='tap'
                    className='absolute left-1/2 -ml-[75px] w-[150px] top-[520px] sm:top-[570px] flex justify-center'>
                    <Link
                      to='/blog'
                      onClick={handleOnClick}
                      className='py-3 px-14 bg-btn rounded-xl hover:shadow-md dark:bg-white
                      shadow-black/5 transition-shadow text-white dark:text-background-inverted'>
                      Blog
                    </Link>
                  </motion.div>

                  <motion.div
                    variants={btnAni}
                    whileHover='hover'
                    whileTap='tap'
                    className='absolute left-1/2 -ml-[75px] w-[150px] top-[450px] sm:top-[500px] flex justify-center'>
                    <button
                      className='px-11 py-3 rounded-xl bg-btn hover:shadow-md text-white dark:text-background-inverted
                      shadow-black/5 transition-shadow dark:bg-white'>
                      Resume {/* TODO: descarga CV */}
                    </button>
                  </motion.div>

                  <div className='absolute left-1/2 -ml-[75px] w-[150px] top-[620px] sm:top-[670px] flex justify-center'>
                    <SocialIcons btnAni={btnAni} size={25} />
                  </div>
                </motion.div>
              </motion.nav>
            </motion.div>
          </div>
        </>
      )}
    </header>
  );
};
