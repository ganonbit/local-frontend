import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import * as Routes from 'routes';
import moment from 'moment';

const copyYear = new Date().getFullYear();

let ProfileInfo = ({ user }) => {
  return (
    <>
      <div className='ui-block'>
        <div className='ui-block-title ui-block-post'>
          <h6 className='title'>Info</h6>
        </div>
        <div className='ui-block-content'>
          <ul className='widget w-personal-info item-block'>
            {user.bio && (
              <li>
                <span className='title'>Bio:</span>
                <span className='text'>{user.bio}</span>
              </li>
            )}
            <li>
              <span className='title'>Joined:</span>
              <span className='text'>
                {moment(new Date(parseInt(user.createdAt))).format(
                  'MMMM Do, YYYY'
                )}
              </span>
            </li>
            {user.location && (
              <li>
                <span className='title'>Based in:</span>
                <span className='text'>{user.location}</span>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className='ui-block-menu ui-block-menu-left'>
        <ul className='d-flex'>
          <li>
            <Link to={Routes.PRIVACY_POLICY}>Privacy</Link>
          </li>
          <li>
            <Link to={Routes.TERM_AND_CONDITIONS}>Terms</Link>
          </li>
        </ul>
        <h5>Local Social © {copyYear}</h5>
        <img
          src='https://res.cloudinary.com/hylian/image/upload/f_auto,q_auto/v1578333627/static/local-primary-logo_color_l9xyvo.png'
          alt='local social logo'
        />
      </div>
    </>
  );
};

ProfileInfo.propTypes = {
  user: PropTypes.object.isRequired,
};

export default ProfileInfo;
