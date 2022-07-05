import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export const SkillsProgress = ({ name, skill, i }) => {
  return (
    <div className='flex items-center'>
      <div
        className='text-white text-xs bg-emerald-400 dark:bg-violet-500 h-7 lg:h-[22px] px-5
            grid place-content-center rounded-l w-[110px] my-2 lg:my-1'>
        {name}
      </div>
      <div
        className='relative h-7 lg:h-[22px] w-full overflow-hidden rounded-r shadow-inner
           bg-slate-100 dark:bg-secondary-inverted flex justify-end items-center'>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill}%` }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
          className='absolute inset-0 h-7 lg:h-[22px] transition bg-primary dark:bg-primary-inverted rounded-r'></motion.div>
        <div className='text-end hidden  sm:flex sm:justify-end text-xs px-4 lg:px-2 text-slate-500 '>
          {skill}%
        </div>
      </div>
    </div>
  );
};

SkillsProgress.propTypes = {
  name: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
};
