import React, { useState } from "react";
import Sidebar from "react-sidebar";
import SidebarContent from "./SidebarContent";
import SidebarMainContent from "./SidebarContentDetail";
import "./style/customSidebar.css";
import SidebarStyles from "./SidebarConfig";
const SidebarNavigation = () => {
  const [sidebarOpen, setSidebarOpen] = useState({
    open: false,
    activeClass: "fixed-sidebar"
  });
  let onSetSidebarOpen = (open, activeSidebarClass) => {
    setSidebarOpen({ open: open, activeClass: activeSidebarClass });
  };
  return (
    <div className={sidebarOpen.activeClass} style={{ width: "270px" }}>
      <Sidebar
        sidebar={<SidebarContent onSetSidebarOpen={onSetSidebarOpen} />}
        open={sidebarOpen.open}
        // onSetOpen={sidebarOpen.open}
        docked={true}
        styles={SidebarStyles}
      >
        <SidebarMainContent onSetSidebarOpen={onSetSidebarOpen} />
      </Sidebar>
    </div>
  );
};
export default SidebarNavigation;
