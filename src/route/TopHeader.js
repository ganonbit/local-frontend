import React from 'react';

import AuthorPage from '../pages/Header/AuthorPage';
import Notifications from '../pages/Header/Notifications';
import ChatNotifications from '../pages/Header/ChatNotifications';
import '../assets/svg-icons/back-to-top.svg';
import HeaderTitle from '../pages/Header/HeaderTitle';
import SearchBar from '../pages/Header/SearchBar';
import { useStore } from 'store';
const TopHeader = () => {
  const [{ auth }] = useStore();
  return (
    <header className='header' id='site-header'>
      <HeaderTitle />
      <div className='header-content-wrapper'>
        <SearchBar />
        <div className='control-block'>
          {/* <FriendRequest /> */}
          <ChatNotifications />
          <Notifications />
          <AuthorPage user={auth.user} />
        </div>
      </div>
      <div className='nav-right-section'>
        {/* 
                    <Notifications />
                    <AuthorPage /> */}
      </div>
    </header>
  );
};
export default TopHeader;
