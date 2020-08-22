import React from 'react';
import SideMenu from './SideMenu';
import LeftVideoSection from './LeftVideoSection';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function LeftSection() {
  return (
    <aside className='col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12 ui-block-blur'>
      <LeftVideoSection />
      <div className='ui-block'>
        <Link to='/discover'>
          <LazyLoadImage
            className='health-bnr'
            src='https://res.cloudinary.com/hylian/image/upload/f_auto,q_auto/v1576838840/static/discover-bnr-img_tyvded.jpg'
            alt='get inspired! click here to check local posts'
          />
        </Link>
      </div>
      <SideMenu />
    </aside>
  );
}
