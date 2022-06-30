import PropTypes from 'prop-types';
import {
  desktopAvatarLight,
  desktopAvatarLighHover,
  desktopAvatarDark,
  desktopAvatarDarkHover,
} from '../../assets';

export const Avatar = ({ theme }) => {
  return (
    <>
      <img
        className='hover:opacity-0 absolute'
        src={theme === 'dark' ? desktopAvatarDark : desktopAvatarLight}
        alt='avatar-1'
      />
      <img
        className='opacity-0 hover:opacity-100 z-10 transition-opacity'
        src={theme === 'dark' ? desktopAvatarDarkHover : desktopAvatarLighHover}
        alt='avatar-2'
      />
    </>
  );
};

Avatar.propTypes = {
  theme: PropTypes.string.isRequired,
};
