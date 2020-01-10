import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBell } from '@fortawesome/free-solid-svg-icons';

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
        <Notifications refetch={refetch} isMobile={false} />
        <AuthorPage user={auth.user} />
      </div>
    </Default>
  );
};

// REBUILD THE NAVIGATION USING BOOTSTRAP PANES / TABS
export const MobileNav = ({ refetch, auth, mobileToggle }) => {
  return (
    <Mobile>
      {!mobileToggle && (
        <Nav justify variant='tabs' defaultActiveKey='/home'>
          <Nav.Item>
            <Nav.Link href='/home'>Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='link-1'>Loooonger NavLink</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='link-2'>Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='disabled' disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      )}
      {mobileToggle && (
        <div className='tab-content tab-content-responsive'>
          <Notifications refetch={refetch} isMobile={true} />
        </div>
      )}
    </Mobile>
  );
};

export default DesktopNav;

{
  /* <Nav justify variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav> */
}

// <ul className='nav nav-tabs mobile-app-tabs' role='tablist'>
//           <NavItem active={true}>
//             <FontAwesomeIcon
//               size='2x'
//               color='white'
//               icon={faHome}
//               style={{ height: '24px', marginTop: '5px' }}
//             />
//           </NavItem>
//           <NavItem active={false}>
//             <ChatNotifications />
//           </NavItem>
//           <NavItem active={false}>
//             <a
//               href='#notifications'
//               data-toggle='tab'
//               role='tab'
//               selected='true'
//             >
//               <FontAwesomeIcon
//                 size='2x'
//                 color='white'
//                 icon={faBell}
//                 style={{ height: '24px', marginTop: '5px' }}
//               />
//             </a>
//           </NavItem>
//           <NavItem active={false}>
//             <Search refetch={refetch} auth={auth} />
//           </NavItem>
//         </ul>
