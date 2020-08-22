import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import * as Routes from 'routes';

const WelcomeHeader = () => {
  return (
    <header
      className='header header-registration header-login'
      id='site-header'
    >
      <div className='page-title'>
        <Link to='/'>
          <LazyLoadImage
            src='https://res.cloudinary.com/hylian/image/upload/f_auto,q_auto/v1575849612/static/local-logo_i9pyxb.png'
            alt=''
          />
        </Link>
      </div>
      <div className='header-content-wrapper'>
        <div className='control-block mr-0'>
          <ul className='d-flex align-items-center m-0 user-btns'>
            <li>
              <Link to={Routes.SIGN_IN}>Log In</Link>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <Link to='/signup'>Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default WelcomeHeader;
