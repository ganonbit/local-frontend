import React from 'react'
import ListItem from './ListItem'
const SidebarMainContent = ({ onSetSidebarOpen }) => {
  const sidebarList = [
    'Collapse Menu',
    'Newsfeed',
    'Fav Pages Feedback',
    'Friend Groups',
    'Community Badges',
    'Account Stats',
    'Manage Widgets'
  ]
  return (
    <div className="fixed-sidebar-left sidebar--large" id="sidebar-left-1">
      <a href="02-ProfilePage.html" className="logo">
        <div className="img-wrap">
          <img src="img/avocado-img.png" alt="Olympus" />
        </div>
        <div className="title-block">
          <h6 className="logo-title">olympus</h6>
        </div>
      </a>
      <div className="mCustomScrollbar" data-mcs-theme="dark">
        <ul className="left-menu">
          {sidebarList.map(title => (
            <ListItem
              linkClass="js-sidebar-open"
              titleClass="left-menu-title"
              title={title}
              key={title}
              onSetSidebarOpen={(open, activeSideClass) =>
                onSetSidebarOpen(open, activeSideClass)
              }
              sideBarOpenModel={title === 'Collapse Menu'}
            />
          ))}
        </ul>

        <div className="profile-completion">
          <div className="skills-item">
            <div className="skills-item-info">
              <span className="skills-item-title">Profile Completion</span>
              <span className="skills-item-count">
                <span
                  className="count-animate"
                  data-speed="1000"
                  data-refresh-interval="50"
                  data-to="76"
                  data-from="0"></span>
                <span className="units">76%</span>
              </span>
            </div>
            <div className="skills-item-meter">
              <span
                className="skills-item-meter-active bg-primary"
                style={{ width: '76%' }}></span>
            </div>
          </div>

          <span>
            Complete <a href="#1">your profile</a> so people can know more about
            you!
          </span>
        </div>
      </div>
    </div>
  )
}
export default SidebarMainContent
