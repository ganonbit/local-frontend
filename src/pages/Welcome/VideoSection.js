import React from 'react';
import { Link } from 'react-router-dom';
const VideoSection = () => {
  return (
    <div className='avocado-video-bnr mb-5'>
      <img
        src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avocado-video-banner_zpdxf5.png'
        alt=''
      />
      <Link
        to='https://vimeo.com/ondemand/viewfromabluemoon4k/147865858'
        className='play-video play-video--small'
      >
        <img
          src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/video-play-btn_sk5jrs.png'
          alt=''
        />
      </Link>
    </div>
  );
};
export default VideoSection;
