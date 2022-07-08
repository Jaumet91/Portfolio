import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { config } from '../../config';

const iconsFixed = [FiGithub, FiTwitter, FiLinkedin];
const { socialMedia } = config;

export const Footer = () => {
  return (
    <footer className='flex-col w-fit mx-auto left-0 right-0 min-h-[70px]'>
      <ul className='flex justify-between w-[140px] mx-auto left-0 right-0 md:hidden'>
        {socialMedia.map(({ url, name }, i) => {
          const Icon = iconsFixed[i];
          return (
            <li
              key={name}
              className='cursor-pointer dark:text-white text-light-black hover:text-primary dark:hover:text-purple-600'>
              <a
                href={url}
                className='p-3'
                target='_blank'
                rel='noopener noreferrer'>
                <Icon size={20} className='' />
              </a>
            </li>
          );
        })}
      </ul>
      <div className='text-xs pb-10 pt-5 dark:text-white text-light-black'>
        Designed & Built by Jaime Cortes
      </div>
    </footer>
  );
};
