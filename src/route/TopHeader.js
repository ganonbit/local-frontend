import React from 'react';

import '../assets/svg-icons/back-to-top.svg';
import HeaderTitle from '../pages/Header/HeaderTitle';
import Search from '../components/Search'
import { useStore } from 'store';
const TopHeader = () => {
  const [{ auth }] = useStore();

  return (
    <header className='header' id='site-header'>
      <HeaderTitle />
      <div className='header-content-wrapper'>
        <Search auth={auth}/>
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
