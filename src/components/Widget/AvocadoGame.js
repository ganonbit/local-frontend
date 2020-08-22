import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const LocalGame = () => {
  return (
    <div className='ui-block'>
      <div className='widget w-action'>
        <div className='ui-block-title'>
          <LazyLoadImage
            src='https://res.cloudinary.com/hylian/image/upload/f_auto,q_auto/v1575849612/static/star-icon2_es9h9w.png'
            alt=''
          />
          <Link
            to
            onClick={e => {
              e.preventDefault();
            }}
            className='more'
          ></Link>
        </div>
        <LazyLoadImage
          src='https://res.cloudinary.com/hylian/image/upload/f_auto,q_auto/v1575849612/static/game-remote_zxpou0.png'
          alt='Olympus'
        />
        <div className='content'>
          <span>Game</span>
          <h4 className='title'>
            What kind of <br />
            local lover are you?
          </h4>
          <Link to='/' className='btn btn-bg-secondary btn-md'>
            Play Now!
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LocalGame;
