import React, { useState, setState } from 'react';

import '../assets/svg-icons/back-to-top.svg';
import HeaderTitle from '../pages/Header/HeaderTitle';
import Search from '../components/Search';
import Default, {
  Desktop,
  Tablet,
  Mobile,
} from '../components/Wrappers/Queries';
import { library } from '@fortawesome/fontawesome-svg-core';

import { useStore } from 'store';
import UserReferralModal from '../pages/Header/UserReferralModal';
import Notifications from '../pages/Header/Notifications';
import ChatNotifications from '../pages/Header/ChatNotifications';
import AuthorPage from '../pages/Header/AuthorPage';

/*
  TODO: 
  -- Expand search into individual components for more flexibility
*/

const TopHeader = ({ refetch }) => {
  const [{ auth }] = useStore();

  return (
    <>
      <Default>
        <header className='header' id='site-header'>
          <HeaderTitle />
          <div className='header-content-wrapper'>
            <Search refetch={refetch} auth={auth} />

            <div className='control-block'>
              <ChatNotifications />
              <Notifications refetch={refetch} />
              <AuthorPage user={auth.user} />
            </div>
          </div>

          <UserReferralModal />
        </header>
      </Default>
      <Mobile>
        <header
          className='header header-responsive'
          id='site-header-responsive'
        >
          <ul className='nav nav-tabs mobile-app-tabs' role='tablist'>
            <li className='nav-item'>
              <ChatNotifications />
            </li>
            <li className='nav-item'>
              <Notifications refetch={refetch} />
            </li>
            <li className='nav-item'>
              <Search refetch={refetch} auth={auth} />
            </li>
          </ul>
        </header>
      </Mobile>
    </>
  );
};
export default TopHeader;
