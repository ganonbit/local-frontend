import React from 'react';
import SideMenu from './SideMenu';
import LeftVideoSection from './LeftVideoSection';

export default function LeftSection() {
  return (
    <aside className='col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12 ui-block-blur'>
      <LeftVideoSection />
      <div className='ui-block'>
        <img className='health-bnr' src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/health-bnr-img_pboov7.png' alt='' />
      </div>
      <SideMenu />
    </aside>
  );
}
