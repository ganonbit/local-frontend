import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const HeaderTitle = () => {
  return (
    <div className='page-title'>
      <a href='/'>
        <LazyLoadImage
          src='https://res.cloudinary.com/hylian/image/upload/f_auto,q_auto/v1598090517/static/logo_transparent_cropped_jxkh58.png'
          alt='LOGO'
        />
      </a>
    </div>
  );
};

export default HeaderTitle;
