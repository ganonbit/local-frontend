import React from 'react';
import { Link } from 'react-router-dom';

import * as Routes from 'routes';

const SideMenu = () => {
  return (
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
          src='https://res.cloudinary.com/weare270b/image/upload/v1578333627/static/avocado-primary-logo_color_l9xyvo.png'
          alt='avocado nation logo'
        />
    </div>
  );
};
export default SideMenu;
