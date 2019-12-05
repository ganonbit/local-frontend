import React from 'react';
import { Link } from 'react-router-dom';
const LeftVideoSection = () => {
  return (
    <div className='ui-block'>
      <div className='ui-block-title ui-block-post'>
        <h6 className='title'>Top Posts</h6>
        <Link to='#' className='more'></Link>
      </div>
      <div className='ui-block-content'>
        <ul className='widget w-last-video'>
          <li>
            <Link
              to='https://vimeo.com/ondemand/viewfromabluemoon4k/147865858'
              className='play-video play-video--small'
            >
              <img src='img/play-btn.png' alt='' />
            </Link>
            <img
              className='video-bnr'
              src='img/avocado-mexico.png'
              alt='video'
            />
            <div className='video-content'>
              <div className='title'>System of a Revenge - Hypnotize...</div>
              <time className='published' dateTime='2017-03-24T18:18'>
                3:25
              </time>
            </div>
            <div className='overlay'></div>
          </li>
          <li>
            <Link
              to='https://youtube.com/watch?v=excVFQ2TWig'
              className='play-video play-video--small'
            >
              <img src='img/play-btn.png' alt='' />
            </Link>
            <img
              className='video-bnr'
              src='img/avocado-mexico2.png'
              alt='video'
            />
            <div className='video-content'>
              <div className='title'>Green Goo - Live at Dan’s Arena</div>
              <time className='published' dateTime='2017-03-24T18:18'>
                5:48
              </time>
            </div>
            <div className='overlay'></div>
          </li>
          <li>
            <img className='video-bnr' src='img/video-bnr.png' alt='video' />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default LeftVideoSection;
