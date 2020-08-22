import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import * as Routes from 'routes';

const copyYear = new Date().getFullYear();

const NewsFeedAdd = () => (
  <>
    <div className='ui-block'>
      <Link to='/discover'>
        <LazyLoadImage
          className='health-bnr'
          src='https://res.cloudinary.com/hylian/image/upload/f_auto,q_auto/v1576838840/static/discover-bnr-img_tyvded.jpg'
          alt='get inspired! click here to check local posts'
        />
      </Link>
    </div>
    <div className='ui-block-menu ui-block-menu-sidebar'>
      <ul className='d-flex'>
        <li>
          <Link to={Routes.PRIVACY_POLICY}>Privacy</Link>
        </li>
        <li>
          <Link to={Routes.TERM_AND_CONDITIONS}>Terms</Link>
        </li>
        <li>
          <Link to={Routes.COMMUNITY_GUIDELINE}>Community Guideline</Link>
        </li>
      </ul>
      <h5>Local Social © {copyYear}</h5>
      <LazyLoadImage
        src='https://res.cloudinary.com/hylian/image/upload/f_auto,q_auto/v1578333627/static/local-primary-logo_color_l9xyvo.png'
        alt='local social logo'
      />
    </div>
  </>
);
export default NewsFeedAdd;
