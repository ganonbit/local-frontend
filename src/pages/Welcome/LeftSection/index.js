import React from 'react';
import AvocadoGame from './AvocadoGame';
import SideMenu from './SideMenu';
import LeftVideoSection from './LeftVideoSection';

export default function LeftSection() {
  return (
    <aside className='col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12 ui-block-blur'>
      <LeftVideoSection />
      <div className='ui-block'>
        <img className='health-bnr' src='img/health-bnr-img.png' alt='' />
      </div>
      <AvocadoGame />
      <SideMenu />
    </aside>
  );
}
