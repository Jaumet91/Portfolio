import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import PropTypes from 'prop-types';

// TODO: enlaces redes sociales
export const SocialIcons = ({ btnAni, size }) => {
  return (
    <>
      <motion.div
        className='mx-3 cursor-pointer dark:text-white text-light-black'
        variants={btnAni}
        whileHover='hover'
        whileTap='tap'>
        <FaGithub size={size} />
      </motion.div>
      <motion.div
        className='mx-3 cursor-pointer dark:text-white text-light-black'
        variants={btnAni}
        whileHover='hover'
        whileTap='tap'>
        <FaLinkedin size={size} />
      </motion.div>
      <motion.div
        className='mx-3 cursor-pointer dark:text-white text-light-black'
        variants={btnAni}
        whileHover='hover'
        whileTap='tap'>
        <FaTwitter size={size} />
      </motion.div>
    </>
  );
};

SocialIcons.propTypes = {
  btnAni: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired,
};
