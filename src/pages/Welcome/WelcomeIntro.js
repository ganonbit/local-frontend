import React from 'react';
import { Link } from 'react-router-dom';

import * as Routes from 'routes';

const WelcomeIntro = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 m-auto pb-4'>
          <p className='register-now-title'>
            Here’s a sneak-peek. <Link to={Routes.SIGN_UP}>Join now</Link> to
            gain full access and start earning rewards!
          </p>
        </div>
      </div>
    </div>
  );
};
export default WelcomeIntro;
