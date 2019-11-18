import React from 'react'
import { NavLink } from 'react-router-dom'
const ListItem = ({
  linkClass,
  titleClass,
  title,
  onSetSidebarOpen,
  sideBarOpenModel
}) => (
  <li>
    <NavLink className={linkClass} to="/post">
      <svg
        className="olymp-close-icon left-menu-icon"
        data-toggle="tooltip"
        data-placement="right"
        data-original-title="FRIEND GROUPS">
        {/* <use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-faces-icon"></use> */}
      </svg>
      <span
        className={titleClass}
        onClick={() =>
          sideBarOpenModel && onSetSidebarOpen(false, 'fixed-sidebar')
        }>
        {title}
      </span>
    </NavLink>
  </li>
)
export default ListItem
