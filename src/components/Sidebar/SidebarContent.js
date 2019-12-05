import React from 'react';
import { Link } from 'react-router-dom';
import OverlayTriggers from '../Common/ToolTip';

const SidebarContent = ({ onSetSidebarOpen }) => {
  return (
    <div className='fixed-sidebar-left sidebar--small' id='sidebar-left'>
      <Link to='/' className='logo'>
        <div className='img-wrap'>
          <img src='img/avocado-img.png' alt='Olympus' />
        </div>
      </Link>

      <div className='mCustomScrollbarr' data-mcs-theme='dark'>
        <ul className='left-menu'>
          <li>
            <Link className='js-sidebar-open'>
              <OverlayTriggers toolTipText='OPEN MENU' placement='right'>
                <img
                  src='img/menu-img.png'
                  alt='OPEN MENU'
                  onClick={() => onSetSidebarOpen(true, 'fixed-sidebar open')}
                />
              </OverlayTriggers>
            </Link>
          </li>
          <li>
            <a href='03-Newsfeed.html'>
              <OverlayTriggers toolTipText='HOME PAGE' placement='right'>
                <img src='img/avocado-icon.png' alt='' />
              </OverlayTriggers>
            </a>
          </li>
          <li>
            <a href='16-FavPagesFeed.html'>
              <OverlayTriggers toolTipText='DISCOVER' placement='right'>
                <img src='img/search-icon.png' alt='' />
              </OverlayTriggers>
            </a>
          </li>
          <li>
            <a href='17-FriendGroups.html'>
              <OverlayTriggers toolTipText='FAVS' placement='right'>
                <img src='img/star-icon.png' alt='' />
              </OverlayTriggers>
            </a>
          </li>
          <li>
            <a href='18-MusicAndPlaylists.html'>
              <OverlayTriggers toolTipText='POST' placement='right'>
                <img src='img/chat-icon.png' alt='' />
              </OverlayTriggers>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SidebarContent;
