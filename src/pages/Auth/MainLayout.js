import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Headroom from 'react-headroom';
import EmailVerificationModal from './EmailVerificationModal';

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
                <img
                  src='https://res.cloudinary.com/weare270b/image/upload/q_auto/v1575849612/static/avocado-logo_i9pyxb.png'
                  alt='Avocado'
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
              <div className='landing-content'>
                <h1>
                  The <b>FIRST EVER</b> online community for avocado lovers is
                  here!
                </h1>
                <p>
                  You will be rewarded for doing what you love to do; sharing
                  your favorite avocado shots, indulging in a scrumptious
                  avocado dish, and collecting the most useful avocado health
                  and wellness tips to help you live your best life ever!
                </p>
                {location.pathname === '/signup' && (
                  <p>Already have an account?</p>
                )}
                <Link
                  to={{
                    pathname:
                      location.pathname === Routes.SIGN_IN
                        ? '/signup'
                        : Routes.SIGN_IN,
                  }}
                  className='btn px-4 py-2 btn-border c-white'
                >
                  {location.pathname === Routes.SIGN_IN
                    ? 'Register Now'
                    : Routes.SIGN_IN}
                </Link>
              </div>
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
