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
    <NavLink className={linkClass} to={path}>
      <img src={image} alt='img' className='left-menu-icon' />
      <span className={titleClass}>{title}</span>
    </NavLink>
  </li>
);
export default ListItem;
