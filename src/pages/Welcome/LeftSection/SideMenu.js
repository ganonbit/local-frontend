import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = () => {
  return (
    <div className='ui-block-menu ui-block-menu-sidebar'>
      <ul className='d-flex'>
        <li>
          <Link to=''>Privacy</Link>
        </li>
        <li>
          <Link to=''>Terms</Link>
        </li>
        <li>
          <Link to=''>Cookies</Link>
        </li>
        <li>
          <div className='dropdown'>
            <button
              type='button'
              className='dropdown-toggle'
              data-toggle='dropdown'
            >
              More
            </button>
            <div className='dropdown-menu'>
              <Link to='' className='dropdown-item'>
                Link 1
              </Link>
              <Link to='' className='dropdown-item'>
                Link 2
              </Link>
              <Link to='' className='dropdown-item'>
                Link 3
              </Link>
            </div>
          </div>
        </li>
      </ul>
      <h5>Avocado Nation © 2019</h5>
      <img
        src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avocado-primary-logo_y2ribz.png'
        alt=''
      />
    </div>
  );
};
export default SideMenu;
