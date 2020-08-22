import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Avatar = ({ size, image }) => (
  <div className='avatar-wrapper' size={size}>
    {image ? (
      <LazyLoadImage
        height={100}
        width={100}
        alt='avatar'
        // className='avatar-img'
        src={image}
      />
    ) : (
      <LazyLoadImage
        height={100}
        width={100}
        alt='avatar'
        // className='avatar-img'
        src='https://res.cloudinary.com/hylian/image/upload/f_auto,q_auto/v1576220262/static/Image_from_iOS_1_bnaxnc.jpg'
      />
    )}
  </div>
);

export default Avatar;
