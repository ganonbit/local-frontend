import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Headroom from 'react-headroom';
import EmailVerificationModal from './EmailVerificationModal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import * as Routes from 'routes';

/**
 * Main Layout for Registration
 */
const MainLayout = ({ children, location }) => {
  const [className, setClassName] = useState(
    'headroom--top headroom--not-bottom'
  );

  return (
    <div className='landing-page'>
      <EmailVerificationModal />
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
            <Link to={Routes.SIGN_IN} className='logo'>
              <div className='img-wrap'>
                <LazyLoadImage
                  src='https://res.cloudinary.com/hylian/image/upload/f_auto,q_auto/v1598090517/static/logo_transparent_cropped_jxkh58.png'
                  alt='Local'
                />
              </div>
            </Link>
          </div>
        </div>
      </Headroom>
      <div className='content-bg-wrap'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
              {location.pathname === Routes.SIGN_UP && (
                <div className='landing-content'>
                  <h1>
                    The first ever online community that rewards local fans!
                  </h1>
                  <p>
                    You’re one step closer to some delicious content. Be sure to
                    keep earning points and get your rewards.
                  </p>

                  <p>Already have an account?</p>
                  <Link
                    to={{
                      pathname: Routes.SIGN_IN,
                    }}
                    className='btn px-4 py-2 btn-border c-white'
                  >
                    Log In
                  </Link>
                </div>
              )}
              {location.pathname === Routes.SIGN_IN && (
                <div className='landing-content'>
                  <h1>
                    Welcome back to the online community that rewards local
                    fans!
                  </h1>
                  <p>Get back to that delicious content.</p>
                </div>
              )}
            </div>
            {children}
          </div>
        </div>
      </div>
      <div className='user-ftr'></div>
    </div>
  );
};
export default withRouter(MainLayout);
