import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGhost } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

import { useScrollDirection } from '../../hooks';
import { desktopAvatarLight, desktopAvatarLighHover } from '../../assets';

const btnAni = {
  hover: { y: -3 },
  tap: { y: 0 },
};

export const NavBlog = () => {
  const scrollDirection = useScrollDirection('');
  const [scrolledToTop, setScrolledToTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledToTop(window.pageYOffset < 50);
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleOnClick = e => {
    window.scrollTo({ top: 0 });
  };

  return (
    <AnimatePresence>
      <motion.nav
        className={`flex container justify-between py-2 fixed 
        transition-shadow duration-500 min-w-full px-24
        ${
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
            <img
              className='hover:opacity-0 absolute'
              src={desktopAvatarLight}
            />
            <img
              className='opacity-0 hover:opacity-100 z-10 transition-opacity'
              src={desktopAvatarLighHover}
            />
            <span className='ml-3'>Jaime Cortes</span>
          </div>
        </Link>

        <div className='order-last flex items-center'>
          <motion.div variants={btnAni} whileHover='hover' whileTap='tap'>
            <Link
              to='/'
              onClick={handleOnClick}
              className='py-2.5 px-6 mx-2 bg-secondary rounded-lg hover:shadow-md shadow-black/5 
                shadow transition-shadow'>
              Portfolio
            </Link>
          </motion.div>

          <motion.div variants={btnAni} whileHover='hover' whileTap='tap'>
            <Link
              to='/blog'
              onClick={handleOnClick}
              className='py-2.5 px-6 mx-2 bg-secondary rounded-lg hover:shadow-md shadow-black/5 
                shadow transition-shadow'>
              Blog
            </Link>
          </motion.div>

          <motion.button
            variants={btnAni}
            whileHover='hover'
            whileTap='tap'
            className='px-6 py-2 rounded-lg ml-2 bg-secondary hover:shadow-md shadow-black/5 
              shadow transition-shadow'>
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
  );
};
