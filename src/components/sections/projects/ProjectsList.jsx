import { useState } from 'react';
import { motion } from 'framer-motion';
import { IoFolderOutline } from 'react-icons/io5';
import { FiGithub } from 'react-icons/fi';
import { MdOpenInNew } from 'react-icons/md';
import PropTypes from 'prop-types';

import { calendarApp, journalApp, prueba } from '../../../assets';

const imgProjects = [journalApp, calendarApp, prueba];

export const ProjectsList = ({ title, desc, tags, code, site, i }) => {
  const [selectedItem, setSelectedItem] = useState(false);

  const animate = selectedItem ? { x: 0, opacity: 1 } : { x: -15, opacity: 0 };

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgProjects[i]})`,
        borderRadius: '6px',
      }}
      className='bg-center bg-cover bg-no-repeat mb-5 cursor-pointer mx-auto max-h-[300px] relative'
      whileHover={{ y: -5 }}
      onMouseEnter={() => setSelectedItem(true)}
      onMouseLeave={() => setSelectedItem(false)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={animate}
        transition={{ duration: 0.4, ease: [0.6, 0.05, -0.01, 0.9] }}>
        <div className='absolute dark:text-white text-light-black top-[37px] right-[80px] z-10'>
          <a
            href={code}
            className='mr-3 dark:hover:text-purple-600 hover:text-primary transition-colors'
            target='_blank'
            rel='noreferrer'>
            <FiGithub size={25} />
          </a>
        </div>
        <div className='absolute dark:text-white text-light-black right-[29px] top-[35px] z-10'>
          <a
            href={site}
            className='dark:hover:text-purple-600 hover:text-primary transition-colors'
            target='_blank'
            rel='noreferrer'>
            <MdOpenInNew size={28} />
          </a>
        </div>
        <a href={site} target='_blank' rel='noreferrer'>
          <div className=' bg-secondary/95 dark:bg-secondary-inverted/95 drop-shadow-md transition-shadow rounded-md'>
            <div className='pt-8 px-8 '>
              <span className='text-primary dark:text-primary-inverted'>
                <IoFolderOutline size={50} />
              </span>
            </div>
            <div className='px-8 pb-8 '>
              <h3 className='text-light-black dark:text-white pt-10 font-medium md:text-2xl text-xl transition-colors'>
                {title}
              </h3>
              <div className='dark:text-white text-light-black  mt-3 '>
                {desc}
              </div>
              <div className='flex dark:text-white text-light-black text-sm mt-3'>
                {tags.map((tag, i) => (
                  <div key={i} className='mr-2'>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </a>
      </motion.div>
    </motion.div>
  );
};

ProjectsList.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  code: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
};
