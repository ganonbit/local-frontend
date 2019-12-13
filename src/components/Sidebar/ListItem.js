import React from 'react';
import { NavLink } from 'react-router-dom';
const ListItem = ({
  linkClass,
  titleClass,
  title,
  onSetSidebarOpen,
  sideBarOpenModel,
  image,
  path,
}) => (
  <li
    onClick={() => sideBarOpenModel && onSetSidebarOpen(false, 'fixed-sidebar')}
  >
    {path ? (
      <NavLink className={linkClass} to={path}>
        <img src={image} alt='img' className='left-menu-icon' />
        <span className='collapse-menu-title'>{title}</span>
      </NavLink>
    ) : (
      <div className='collapse-menu-wrap'>
        <img src={image} alt='img' className='left-menu-icon' />
        <span className='collapse-menu-title'>{title}</span>
      </div>
    )}
  </li>
);
export default ListItem;
