import React from 'react';
import { Link } from 'react-router-dom';
import { HappyFaceIcon } from 'components/icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const TopFriends = () => {
  const items = [];
  for (let i = 0; i < 3; i++) {
    items.push(
      <li className='d-flex justify-content-start align-items-center px-3 py-2' key={i}>
        <div className='author-thumb'>
          <LazyLoadImage
            src='https://res.cloudinary.com/weare270b/image/upload/f_auto,q_auto/v1578579972/user/51abdbc5-b280-414e-99f9-23680491eedc.png'
            alt='author'
          />
        </div>
        <div className='notification-event'>
          <Link to='#' className='h6 notification-friend'>
            Selma Avocado
          </Link>
        </div>
        <span className='notification-icon'>
          <div
            className='accept-request'
            onClick={e => {
              e.preventDefault();
            }}
          >
            <span className='without-text'>
              <HappyFaceIcon />
            </span>
          </div>
        </span>
      </li>
    );
  }
  return (
    <>
      <div className='ui-block top-users'>
        <div className='ui-block-title'>
          <h6 className='title'>Top 20 Users</h6>
          <Link to='#' className='more'></Link>
        </div>
        <ul className='widget w-friend-pages-added notification-list friend-requests'>
          {items}
        </ul>
      </div>
      {/* <div className='ui-block refer-friend'>
        <Link to='#' className='btn btn-lg'>
          Refer a Friend!
        </Link>
      </div> */}
    </>
  );
};
export default TopFriends;
