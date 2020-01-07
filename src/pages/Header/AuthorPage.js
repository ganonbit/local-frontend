import React from 'react';
import { Link, generatePath } from 'react-router-dom';
import Avatar from 'components/Avatar';
import * as Routes from 'routes';

import {
  OlympMenu,
  RewardIcon,
  SettingIcon,
  LogOut,
  CheckIcon,
  DropDownArrowIcon,
  EnvelopeIcon,
} from 'components/icons';
const AuthorPage = ({ user }) => {
  return (
    <div className='author-page author vcard inline-items more'>
      <div className='author-thumb'>
        <Avatar image={user.image} />
        <span className='icon-status online'></span>
        <div className='more-dropdown more-with-triangle'>
          <div className='mCustomScrollbar' data-mcs-theme='dark'>
            <div className='ui-block-title ui-block-title-small'>
              <h6 className='title'>Your Account</h6>
            </div>
            <ul className='account-settings'>
              <li>
                <Link
                  to={generatePath(Routes.USER_PROFILE, {
                    username: user.username,
                  })}
                >
                  <OlympMenu className='olymp-camera-icon' />
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <Link to={Routes.SETTINGS}>
                  <SettingIcon className='olymp-star-icon left-menu-icon' />

                  <span>Profile Settings</span>
                </Link>
              </li>
              <li>
                <Link to={Routes.REWARDS}>
                  <RewardIcon className='olymp-logout-icon' />
                  <span>Rewards</span>
                </Link>
              </li>
              <li>
                <a href='/' onClick={() => localStorage.clear()}>
                  <LogOut className='olymp-logout-icon' />
                  <span>Log Out</span>
                </a>
              </li>

              <li>
                <a href='#' data-toggle='modal' data-target='#referralUrl'>
                  <EnvelopeIcon className='envelope-icon' />
                  <span>Refer User</span>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <Link to={Routes.TERM_AND_CONDITIONS}>
                  <span>Terms and Conditions</span>
                </Link>
              </li>
              {/* <li>
                <Link to='#'>
                  <span>Idea Submission</span>
                </Link>
              </li> */}
              <li>
                <Link to={Routes.COMMUNITY_GUIDELINE}>
                  <span>Community Guidelines</span>
                </Link>
              </li>
              <li>
                <Link to={Routes.FAQ}>
                  <span>FAQs</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Link to className='author-name fn my-auto'>
        <div className='author-title author-title-custom'>
          {`${user.firstName} ${user.lastName}`}
          <DropDownArrowIcon className='olymp-dropdown-arrow-icon' />
        </div>
      </Link>
    </div>
  );
};

// split authorPage content into separate sections for mobile
export const MobileAuthorPage = ({ user }) => {
  return (
    <Link
      to={generatePath(Routes.USER_PROFILE, {
        username: user.username,
      })}
    >
      <div className='author-page author vcard inline-items more'>
        <div className='author-thumb'>
          <Avatar image={user.image} />
          <span className='icon-status online'></span>
        </div>
        <div className='author-title author-title-custom'>
          {`${user.firstName} ${user.lastName}`}
        </div>
      </div>
    </Link>
  );
};

export const MobileAuthorSettings = ({ user }) => {
  return (
    <>
      <ul className='account-settings'>
        <li>
          <Link
            to={generatePath(Routes.USER_PROFILE, {
              username: user.username,
            })}
          >
            <OlympMenu className='olymp-camera-icon' />
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link to={Routes.SETTINGS}>
            <SettingIcon className='olymp-star-icon left-menu-icon' />

            <span>Profile Settings</span>
          </Link>
        </li>
        <li>
          <Link to={Routes.REWARDS}>
            <RewardIcon className='olymp-logout-icon' />
            <span>Rewards</span>
          </Link>
        </li>
        <li>
          <a href='/' onClick={() => localStorage.clear()}>
            <LogOut className='olymp-logout-icon' />
            <span>Log Out</span>
          </a>
        </li>

        <li>
          <a href='#' data-toggle='modal' data-target='#referralUrl'>
            <EnvelopeIcon className='envelope-icon' />
            <span>Refer User</span>
          </a>
        </li>
      </ul>
    </>
  );
};

export default AuthorPage;
