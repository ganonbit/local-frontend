import React from 'react';
import { Link, generatePath } from 'react-router-dom';
import OverlayTriggers from '../Common/ToolTip';
import { useStore } from 'store';

import * as Routes from 'routes';

const SidebarContent = ({ onSetSidebarOpen, isAuth }) => {
  const [{ auth }] = useStore();
  return (
    <div className='fixed-sidebar-left sidebar--small' id='sidebar-left'>
      {isAuth ? (
        <Link
          to={generatePath(Routes.USER_PROFILE, {
            username: auth.user.username,
          })}
          className='logo'
        >
          <div className='img-wrap'>
            <img src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avocado-img_fwdb02.png' alt='Olympus' />
          </div>
        </Link>
      ) : (
        <div className='logo'>
          <div className='img-wrap'>
            <img src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avocado-img_fwdb02.png' alt='Olympus' />
          </div>
        </div>
      )}

      <div className='mCustomScrollbarr' data-mcs-theme='dark'>
        {isAuth && (
          <ul className='left-menu'>
            <li>
              <div className='js-sidebar-open'>
                <OverlayTriggers toolTipText='OPEN MENU' placement='right'>
                  <img
                    src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/menu-img_powmte.png'
                    alt='OPEN MENU'
                    onClick={() => onSetSidebarOpen(true, 'fixed-sidebar open')}
                  />
                </OverlayTriggers>
              </div>
            </li>
            <li>
              <a href='/'>
                <OverlayTriggers toolTipText='HOME PAGE' placement='right'>
                  <img src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avocado-icon_rwvve0.png' alt='' />
                </OverlayTriggers>
              </a>
            </li>
            <li>
              <a href='/discover'>
                <OverlayTriggers toolTipText='DISCOVER' placement='right'>
                  <img src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/search-icon_vpzkxv.png' alt='' />
                </OverlayTriggers>
              </a>
            </li>
            {/* <li>
              <a href='/'>
                <OverlayTriggers toolTipText='FAVS' placement='right'>
                  <img src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/star-icon_qbwpz1.png' alt='' />
                </OverlayTriggers>
              </a>
            </li> */}
            <li>
              <a href='/'>
                <OverlayTriggers toolTipText='POST' placement='right'>
                  <img src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/chat-icon_bb8rk2.png' alt='' />
                </OverlayTriggers>
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
export default SidebarContent;
