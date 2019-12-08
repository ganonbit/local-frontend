import React from 'react';
import ListItem from './ListItem';
const SidebarMainContent = ({ onSetSidebarOpen }) => {
  const sidebarList = [
    { title: 'Collapse Menu', image: 'img/close-icon.png', path: null },
    { title: 'Home page', image: 'img/avocado-icon.png', path: '/' },
    { title: 'Discover', image: 'img/search-icon.png', path: '/explore' },
    { title: 'Favs', image: 'img/star-icon.png', path: '/' },
    { title: 'Favs', image: 'img/star-icon.png', path: '/' },
  ];
  return (
    <div className='fixed-sidebar-left sidebar--large' id='sidebar-left-1'>
      <a href='02-ProfilePage.html' className='logo'>
        <div className='img-wrap'>
          <img src='img/avocado-img.png' alt='Olympus' />
        </div>
      </a>
      <div className='mCustomScrollbar' data-mcs-theme='dark'>
        <ul className='left-menu'>
          {sidebarList.map((val, index) => (
            <ListItem
              linkClass='js-sidebar-open'
              titleClass='left-menu-title'
              title={val.title}
              key={index}
              onSetSidebarOpen={(open, activeSideClass) =>
                onSetSidebarOpen(open, activeSideClass)
              }
              sideBarOpenModel={val.title === 'Collapse Menu'}
              image={val.image}
              path={val.path}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default SidebarMainContent;
