import React from 'react';
import ListItem from './ListItem';
import Default, { Desktop, Tablet, Mobile } from '../Wrappers/Queries';
import AuthorPage from '../../pages/Header/AuthorPage';
import { useStore } from 'store';

const SidebarMainContent = ({ onSetSidebarOpen, isAuth }) => {
  const [{ auth }] = useStore();
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
      <div className='logo'>
        <div className='img-wrap'>
          <img
            src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avocado-img_fwdb02.png'
            alt='Olympus'
          />
        </div>
      </div>
      <div className='mCustomScrollbar' data-mcs-theme='dark'>
        <Mobile>
          <div className='control-block'>
            <AuthorPage user={auth.user} hideAccountFeatures={true} />
          </div>
          <div className='ui-block-title ui-block-title-small'>
            <h6 className='title'>MAIN SECTIONS</h6>
          </div>
        </Mobile>
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
        <Mobile>
          <div className='ui-block-title ui-block-title-small'>
            <h6 className='title'>YOUR ACCOUNT</h6>
          </div>
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
          <div className='ui-block-title ui-block-title-small'>
            <h6 className='title'>ABOUT AVOCADO NATION</h6>
          </div>
        </Mobile>
      </div>
    </div>
  );
};
export default SidebarMainContent;
