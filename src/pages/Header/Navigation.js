import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Search from '../../components/Search';
import Default, { Mobile } from '../../components/Wrappers/Queries';

import Notifications from './Notifications';
import ChatNotifications from './ChatNotifications';
import AuthorPage from './AuthorPage';

const NavItem = ({ children, active }) => {
  return (
    <li className='nav-item'>
      <div className={active ? 'nav-link active' : 'nav-link'}>{children}</div>
    </li>
  );
};

const DesktopNav = ({ refetch, auth }) => {
  return (
    <Default>
      <Search refetch={refetch} auth={auth} />
      <div className='control-block'>
        <ChatNotifications />
        <Notifications refetch={refetch} />
        <AuthorPage user={auth.user} />
      </div>
    </Default>
  );
};

export const MobileNav = ({ refetch, auth }) => {
  return (
    <Mobile>
      <ul className='nav nav-tabs mobile-app-tabs' role='tablist'>
        <NavItem active={true}>
          <ChatNotifications />
        </NavItem>
        <NavItem active={false}>
          <Notifications refetch={refetch} />
        </NavItem>
        <NavItem active={false}>
          <Search refetch={refetch} auth={auth} />
        </NavItem>
      </ul>
    </Mobile>
  );
};

export default DesktopNav;
