import React, { useState } from 'react'
import Sidebar from 'react-sidebar'
import {
  SidebarContent,
  SidebarMainContent
} from '../../components/HomeContainer/index'
import './style/customSidebar.css'

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
          open={sidebarOpen}
          onSetOpen={() => onSetSidebarOpen}
          docked={true}
          styles={{
            root: {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              overflow: 'hidden'
            },
            sidebar: {
              position: 'fixed',
              top: 0,
              bottom: 0,
              transition: 'transform .3s ease-out',
              WebkitTransition: '-webkit-transform .3s ease-out',
              willChange: 'transform',
              overflowY: 'initial'
            },
            content: {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
              transition: 'left .3s ease-out, right .3s ease-out'
            },
            overlay: {
              zIndex: 1,
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0,
              visibility: 'hidden',
              transition: 'opacity .3s ease-out, visibility .3s ease-out',
              backgroundColor: 'rgba(0,0,0,.3)'
            },
            dragHandle: {
              zIndex: 1,
              position: 'fixed',
              top: 0,
              bottom: 0
            }
          }}>
          <SidebarMainContent onSetSidebarOpen={onSetSidebarOpen} />
        </Sidebar>
      </div>
    </div>
  )
}
export default SidebarNavigation
