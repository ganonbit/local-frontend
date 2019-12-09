import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Headroom from 'react-headroom';
/**
 * Main Layout for Registration
 */
const MainLayout = ({ children }) => {
  const [className, setClassName] = useState(
    'headroom--top headroom--not-bottom'
  );

  return (
    <div className='landing-page'>
      <div className='content-bg-wrap'></div>
      <div className='content-bg-wrap'></div>
      <Headroom
        disableInlineStyles
        className={`header--standard header--standard-landing animated ${className}`}
        onPin={() =>
          setClassName('headroom--not-bottom slideDown headroom--top')
        }
        onUnpin={() =>
          setClassName('headroom--not-bottom headroom--not-top slideUp')
        }
      >
        <div className='container'>
          <div className='header--standard-wrap'>
            <Link to='/login' className='logo'>
              <div className='img-wrap'>
                <img
                  src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avocado-logo_i9pyxb.png'
                  alt='Avocado'
                />
              </div>
            </Link>
          </div>
        </div>
      </Headroom>

      <div className='header-spacer--standard'></div>

      <div className='container'>
        <div className='row display-flex'>
          <div className='col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
            <div className='landing-content'>
              <h1>Welcome to the Biggest Social Network in the World</h1>
              <p>
                We are the best and biggest social network with 5 billion active
                users all around the world. Share you thoughts, write blog
                posts, show your favourite music via Stopify, earn badges and
                much more!
              </p>

              <Link
                to={{ pathname: '/signup' }}
                className='btn btn-md btn-border c-white'
              >
                Register Now
              </Link>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
export default MainLayout;
