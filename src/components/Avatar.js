import React from 'react';

const Avatar = ({ size, image }) => (
  <div className='avatar-wrapper' size={size}>
    {image ? (
      <img alt='avatar' className='avatar-img' src={image} />
    ) : (
      <img
        alt='avatar'
        className='avatar-img'
        src='https://res.cloudinary.com/weare270b/image/upload/v1576220262/static/q_auto/Image_from_iOS_1_bnaxnc.jpg'
      />
    )}
  </div>
);

export default Avatar;
