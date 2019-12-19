import React from 'react';
import {Link} from 'react-router-dom'
import * as Routes from 'routes'
export default function Badges() {
  return (
    <div className='ui-block'>
      <div className='ui-block-title topics'>
        <h6 className='title'>Badges</h6>
      </div>
      <div className='ui-block-content'>
        {/* <!-- W-Badges --> */}

        {/* <!-- W-Badges --> */}

        <ul className='widget w-badges'>
          <li>
            <Link to={Routes.BADGES}>
              <img
                src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/badge1_uylxzt.png'
                alt='author'
              />
            </Link>
          </li>
          <li>
            <Link to={Routes.BADGES}>
              <img
                src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/badge4_bbyrgn.png'
                alt='author'
              />
            </Link>
          </li>
          <li>
            <Link to={Routes.BADGES}>
              <img
                src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/badge3_ainxuo.png'
                alt='author'
              />
            </Link>
          </li>
          <li>
            <Link to={Routes.BADGES}>
              <img
                src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/badge6_aposcg.png'
                alt='author'
              />
            </Link>
          </li>
          <li>
            <Link to={Routes.BADGES}>
              <img
                src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/badge11_myr5bu.png'
                alt='author'
              />
            </Link>
          </li>
          <li>
            <Link to={Routes.BADGES}>
              <img
                src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/badge8_mxrrta.png'
                alt='author'
              />
            </Link>
          </li>
          <li>
            <Link to={Routes.BADGES}>
              <img
                src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/badge10_clxxbh.png'
                alt='author'
              />
            </Link>
          </li>
          <li>
            <Link to={Routes.BADGES}>
              <img
                src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/badge13_rgeymj.png'
                alt='author'
              />
            </Link>
          </li>
          <li>
            <Link to={Routes.BADGES}>
              <img
                src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/badge7_wztpe7.png'
                alt='author'
              />
            </Link>
          </li>
          <li>
            <Link to={Routes.BADGES}>
              <img
                src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/badge12_za7acs.png'
                alt='author'
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
