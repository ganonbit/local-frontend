import React from 'react';
import ListItem from './ListItem';
const SidebarMainContent = ({ onSetSidebarOpen }) => {
  const sidebarList = [
    {
      title: 'Collapse Menu',
      image:
        'https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/close-icon_butmdd.png',
      path: null,
    },
    {
      title: 'Home page',
      image:
        'https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avocado-icon_rwvve0.png',
      path: '/',
    },
    {
      title: 'Discover',
      image:
        'https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/search-icon_vpzkxv.png',
      path: '/discover',
    },
    {
      title: 'Rewards',
      image:
        'https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/star-icon_qbwpz1.png',
      path: '/rewards',
    },
    // { title: 'Favs', image: 'https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/star-icon_qbwpz1.png', path: '/' },
  ];
  return (
    <div className='fixed-sidebar-left sidebar--large' id='sidebar-left-1'>
      <a href='02-ProfilePage.html' className='logo'>
        <div className='img-wrap'>
          <img
            src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avocado-img_fwdb02.png'
            alt='Olympus'
          />
        </div>
      </a>
      <div className='mCustomScrollbar' data-mcs-theme='dark'>
        <ul className='left-menu'>
          {sidebarList.map((val, index) => (
            <ListItem
              linkclassName='js-sidebar-open'
              titleclassName='left-menu-title'
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
