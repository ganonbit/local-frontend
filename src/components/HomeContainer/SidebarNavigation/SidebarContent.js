import React from 'react'
const SidebarContent = ({ onSetSidebarOpen }) => (
  <div class="fixed-sidebar-left sidebar--small" id="sidebar-left">
    <a href="02-ProfilePage.html" class="logo">
      <div class="img-wrap">
        <img src="img/avocado-img.png" alt="Olympus" />
      </div>
    </a>
    <div class="mCustomScrollbar" data-mcs-theme="dark">
      <ul class="left-menu">
        <li>
          <a href="#" class="js-sidebar-open">
            <img
              data-toggle="tooltip"
              data-placement="right"
              data-original-title="OPEN MENU"
              src="img/menu-img.png"
              alt=""
              onClick={() => onSetSidebarOpen(true, 'fixed-sidebar open')}
            />
          </a>
        </li>
        <li>
          <a href="03-Newsfeed.html">
            <img
              data-toggle="tooltip"
              data-placement="right"
              data-original-title="NEWSFEED"
              src="img/avocado-icon.png"
              alt=""
            />
          </a>
        </li>
        <li>
          <a href="16-FavPagesFeed.html">
            <img
              data-toggle="tooltip"
              data-placement="right"
              data-original-title="FAV PAGE"
              src="img/search-icon.png"
              alt=""
            />
          </a>
        </li>
        <li>
          <a href="17-FriendGroups.html">
            <img
              data-toggle="tooltip"
              data-placement="right"
              data-original-title="FRIEND GROUPS"
              src="img/star-icon.png"
              alt=""
            />
          </a>
        </li>
        <li>
          <a href="18-MusicAndPlaylists.html">
            <img
              data-toggle="tooltip"
              data-placement="right"
              data-original-title="MUSIC&amp;PLAYLISTS"
              src="img/chat-icon.png"
              alt=""
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
)
export default SidebarContent
