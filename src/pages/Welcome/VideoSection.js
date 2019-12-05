import React from 'react';
import { Link } from 'react-router-dom';
const VideoSection = () => {
  return (
    <div className='avocado-video-bnr mb-5'>
      <img src='img/avocado-video-banner.png' alt='' />
      <Link
        to='https://vimeo.com/ondemand/viewfromabluemoon4k/147865858'
        className='play-video play-video--small'
      >
        <img src='img/video-play-btn.png' alt='' />
      </Link>
    </div>
  );
};
export default VideoSection;
