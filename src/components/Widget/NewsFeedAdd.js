import React from 'react';
import { Link } from 'react-router-dom';

import * as Routes from 'routes';

const NewsFeedAdd = () => (
  <>
    <div className='ui-block'>
    <Link to='/discover'>
      <img
        className='health-bnr'
        src='https://res.cloudinary.com/weare270b/image/upload/v1576838840/static/discover-bnr-img_tyvded.jpg'
        alt='get inspired! click here to check avocado posts'
      />
    </Link>
    </div>
    <div className='ui-block-menu ui-block-menu-sidebar'>
      <ul className='d-flex'>
        <li>
          <Link to={Routes.PRIVACY_POLICY}>Privacy</Link>
        </li>
        <li>
          <Link to={Routes.TERM_AND_CONDITIONS}>Terms</Link>
        </li>
        <li>
          <Link to={Routes.COMMUNITY_GUIDELINE}>Community Guideline</Link>
        </li>
        {/* <li>
          <div className='dropdown'>
            <button
              type='button'
              className='dropdown-toggle'
              data-toggle='dropdown'
            >
              More
            </button>
            <div className='dropdown-menu'>
              <Link to='#' className='dropdown-item'>
                Link 1
              </Link>
              <Link to='#' className='dropdown-item'>
                Link 2
              </Link>
              <Link to='#' className='dropdown-item'>
                Link 3
              </Link>
            </div>
          </div>
        </li> */}
      </ul>
      <h5>Avocado Nation © 2019</h5>
      <img
        src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avocado-primary-logo_y2ribz.png'
        alt=''
      />
    </div>
  </>
);
export default NewsFeedAdd;
