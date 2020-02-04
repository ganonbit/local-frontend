import React from 'react';

import { generatePath, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faComment, faBell } from '@fortawesome/free-solid-svg-icons';

import Search from '../../components/Search';
import Default, { Mobile } from '../../components/Wrappers/Queries';
import Notifications from './Notifications';
import ChatNotifications from './ChatNotifications';
import AuthorPage, { AuthorThumbnail } from './AuthorPage';

import * as Routes from 'routes';

const NavItem = ({ children, active, searchlist }) => {
  return (
    <li className={`nav-item ${searchlist && searchlist}`}>
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
        <Notifications refetch={refetch} isMobile={false} />
        <AuthorPage user={auth.user} />
      </div>
    </Default>
  );
};

// REBUILD THE NAVIGATION USING BOOTSTRAP PANES / TABS
export const MobileNav = ({
  refetch,
  auth,
  mobileToggle,
  status,
  isMobile,
}) => {
  return (
    <Mobile>
      <ul className='nav nav-tabs mobile-app-tabs' role='tablist'>
        <NavItem active={true}>
          <Link to='/'>
            <FontAwesomeIcon
              size='2x'
              color='white'
              icon={faHome}
              style={{ height: '24px', marginTop: '4px' }}
            />
          </Link>
        </NavItem>
        <NavItem active={false}>
          <Link
            to={generatePath(Routes.MESSAGES, {
              userId: '5df7cd1ae8d6ec604b737ae5',
            })}
          >
            <FontAwesomeIcon
              size='2x'
              color='white'
              icon={faComment}
              style={{ height: '24px', marginTop: '4px' }}
            />
          </Link>
        </NavItem>
        <NavItem active={false}>
          <Link to={generatePath(Routes.NOTIFICATIONS)}>
            <FontAwesomeIcon
              size='2x'
              color='white'
              icon={faBell}
              style={{ height: '24px', marginTop: '4px' }}
            />
          </Link>
        </NavItem>
        <NavItem active={false} searchlist='search-list'>
          <Search refetch={refetch} auth={auth} mobileToggle={isMobile} />
        </NavItem>
        {/* <Search refetch={refetch} auth={auth} mobileToggle={isMobile} /> */}
        <NavItem active={false}>
          <AuthorThumbnail user={auth.user} />
        </NavItem>
      </ul>
    </Mobile>
  );
};

export default DesktopNav;
