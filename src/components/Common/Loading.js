import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
export const Loading = () => (
  <div id='hellopreloader'>
    <div className='preloader'>
      <LazyLoadImage
        src='https://res.cloudinary.com/hylian/image/upload/f_auto,q_auto/v1575849612/static/local_loader_n5rjeh.gif'
        alt=''
      />
      <div className='text'>Loading ...</div>
    </div>
  </div>
);
