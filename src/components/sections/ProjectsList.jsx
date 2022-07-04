import { useState } from 'react';
import { motion } from 'framer-motion';
import { IoFolderOutline } from 'react-icons/io5';
import { FiGithub } from 'react-icons/fi';
import { MdOpenInNew } from 'react-icons/md';
import PropTypes from 'prop-types';

export const ProjectsList = ({ title, desc, tags, code, site }) => {
  const [selectedItem, setSelectedItem] = useState(false);

  return (
    <motion.div
      className='dark:bg-secondary-inverted bg-secondary mb-5 cursor-pointer rounded-md
       mx-auto  max-h-[400px] relative hover:drop-shadow-md transition-shadow'
      whileHover={{ y: -5 }}
      onMouseEnter={() => setSelectedItem(true)}
      onMouseLeave={() => setSelectedItem(false)}>
      <div className='flex justify-between items-center'>
        <div className='absolute dark:text-white text-light-black  top-[37px] right-[80px]'>
          <a
            href={code}
            className='mr-3 dark:hover:text-purple-600 hover:text-primary transition-colors'
            target='_blank'
            rel='noreferrer'>
            <FiGithub size={25} />
          </a>
        </div>
        <div className='absolute dark:text-white text-light-black right-[29px] top-[35px]'>
          <a
            href={site}
            className='dark:hover:text-purple-600 hover:text-primary transition-colors'
            target='_blank'
            rel='noreferrer'>
            <MdOpenInNew size={28} />
          </a>
        </div>
      </div>
      <a href={site} target='_blank' rel='noreferrer' className='w-full h-full'>
        <div className='pt-8 px-8'>
          <span className='text-primary dark:text-primary-inverted'>
            <IoFolderOutline size={50} />
          </span>
        </div>
        <div className='px-8 pb-8'>
          <h3
            className={`${
              selectedItem
                ? 'dark:text-primary-inverted text-primary'
                : 'dark:text-white text-light-black '
            } mt-10 font-medium md:text-2xl text-xl transition-colors`}>
            {title}
          </h3>
          <div className='dark:text-white text-light-black  mt-3'>{desc}</div>
          <div className='flex dark:text-white text-light-black text-sm mt-3'>
            {tags.map((tag, i) => (
              <div key={i} className='mr-2'>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </a>
    </motion.div>
  );
};

ProjectsList.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  code: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
};
