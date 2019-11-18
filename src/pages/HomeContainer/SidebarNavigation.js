import React, { useState } from 'react'
import Sidebar from 'react-sidebar'
import {
  SidebarContent,
  SidebarMainContent
} from '../../components/HomeContainer/index'
import './style/customSidebar.css'
import SidebarStyles from './Sidebar'
const SidebarNavigation = () => {
  const [sidebarOpen, setSidebarOpen] = useState({
    open: false,
    activeClass: 'fixed-sidebar'
  })
  let onSetSidebarOpen = (open, activeSidebarClass) => {
    setSidebarOpen({ open: open, activeClass: activeSidebarClass })
  }
  return (
    <div className="page-has-left-panels page-has-right-panels pr-0">
      <div className={sidebarOpen.activeClass} style={{ width: '270px' }}>
        <Sidebar
          sidebar={<SidebarContent onSetSidebarOpen={onSetSidebarOpen} />}
          open={sidebarOpen.open}
          // onSetOpen={sidebarOpen.open}
          docked={true}
          styles={SidebarStyles}>
          <SidebarMainContent onSetSidebarOpen={onSetSidebarOpen} />
        </Sidebar>
      </div>
    </div>
  )
}
export default SidebarNavigation
