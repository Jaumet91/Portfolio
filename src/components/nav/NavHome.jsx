import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGhost } from 'react-icons/fa';
import { motion, AnimatePresence, useCycle } from 'framer-motion';

import { useScrollDirection } from '../../hooks';
import { config } from '../../config';
import { desktopAvatarLight, desktopAvatarLighHover } from '../../assets';
import { NavToggler } from './';

const { navLinks } = config;

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
    clipPath: `circle(1500px at 230px 40px)`,
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    clipPath: `circle(25px at 230px 40px)`,
    transition: {
      duration: 0.4,
      delay: 0.4,
    },
  },
};

export const NavHome = () => {
  const scrollDirection = useScrollDirection('');
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 875;

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
  };

  return (
    <>
      {width > breakpoint ? (
        <AnimatePresence>
          <motion.nav
            className={`flex container justify-between py-2 fixed transition-shadow duration-500 
          min-w-full px-20 ${
            scrolledToTop === false
              ? 'backdrop-blur-sm bg-white/30 shadow-lg shadow-black/5'
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
                <img
                  className='hover:opacity-0 absolute'
                  src={desktopAvatarLight}
                />
                <img
                  className='opacity-0 hover:opacity-100 z-10 transition-opacity'
                  src={desktopAvatarLighHover}
                />
                <span className='ml-3 hidden lg:block'>Jaime Cortes</span>
              </div>
            </Link>

            <div className='order-last hidden md:flex items-center'>
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
                            className='absolute inset-0 bg-hover-1 rounded-lg -z-10'
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
                  className='py-2.5 px-6 mx-2 bg-secondary rounded-lg hover:shadow-md
               shadow-black/5 shadow transition-shadow'>
                  Blog
                </Link>
              </motion.div>

              <motion.button
                variants={btnAni}
                whileHover='hover'
                whileTap='tap'
                className='px-6 py-2 rounded-lg ml-2 bg-secondary hover:shadow-md 
              shadow-black/5 shadow transition-shadow'>
                Resume
              </motion.button>

              <div
                className='hover:bg-hover-1 w-10 h-10 rounded-md place-content-center grid
           transition-colors ml-3'>
                <FaGhost
                  size={37}
                  className=' text-toggle hover:text-hover-2 cursor-pointer transition-colors p-2'
                />
              </div>
            </div>
          </motion.nav>
        </AnimatePresence>
      ) : (
        <>
          <div className='fixed z-10 w-screen h-screen'>
            <motion.div
              className={`flex container justify-between py-2 fixed transition-shadow duration-500 
          min-w-full px-5 z-20 ${
            scrolledToTop === false
              ? 'backdrop-blur-sm bg-white/30 shadow-lg shadow-black/5'
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
                  <img
                    className='active:opacity-0 absolute'
                    src={desktopAvatarLight}
                  />
                  <img
                    className='opacity-0 hover:opacity-100 z-10 transition-opacity'
                    src={desktopAvatarLighHover}
                  />
                </div>
              </Link>
              <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}>
                <motion.div className='background' variants={sidebarVariants}>
                  <NavToggler toggle={() => toggleOpen()} />
                  <motion.ul
                    variants={navigationVariants}
                    className=' p-5 absolute top-[100px] w-[260px]'>
                    {navLinks.map(({ url, name }, i) => {
                      return (
                        <motion.li key={i} variants={menuItemVariants}>
                          <a href={url}>
                            <span className='icon-placeholder'></span>
                            <span className='flex items-center mb-5 space-x-6 cursor-pointer'>
                              {name}
                            </span>
                          </a>
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                </motion.div>
              </motion.nav>
            </motion.div>
          </div>
        </>
      )}
    </>
  );
};
