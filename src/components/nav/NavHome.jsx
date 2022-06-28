import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGhost } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

import { useScrollDirection } from '../../hooks';
import { config } from '../../config';
import { desktopAvatarLight } from '../../assets';

const { navLinks } = config;

export const NavHome = () => {
  const scrollDirection = useScrollDirection('');
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);

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
    <AnimatePresence>
      <motion.nav
        className={`flex container justify-between py-2 fixed transition-shadow duration-500 min-w-full px-24 ${
          scrolledToTop === false
            ? 'backdrop-blur-sm bg-white/30 shadow-lg shadow-black/5'
            : 'shadow-none'
        }`}
        initial={{ y: -200 }}
        animate={{ y: scrolledToTop || scrollDirection === 'up' ? 0 : -200 }}
        transition={{
          ease: [0.6, 0.01, -0.05, 0.95],
          duration: scrollDirection === 'up' ? 0.35 : 0.6,
        }}>
        <Link to='/' className='order-first' onClick={handleOnClick}>
          <div className='flex items-center ml-5'>
            <img src={desktopAvatarLight} />
            <span className='ml-3'>Jaime Cortes</span>
          </div>
        </Link>

        <div className='order-last flex items-center'>
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
          <Link className='px-3 mx-2' to='/blog' onClick={handleOnClick}>
            Blog
          </Link>
          <button className='justify-self-start px-6 py-2 rounded-lg mx-2 bg-secondary'>
            Resume
          </button>
          <FaGhost size={21} className=' text-toggle mx-3' />
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};
