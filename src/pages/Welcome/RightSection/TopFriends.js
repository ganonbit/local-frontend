import React from 'react';
import { Link } from 'react-router-dom';

const TopFriends = () => {
  const items = [];
  for (let i = 0; i < 3; i++) {
    items.push(
      <li className='inline-items' key={i}>
        <div className='author-thumb'>
          <img
            src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avatar38-sm.jpg'
            alt='author'
          />
        </div>
        <div className='notification-event'>
          <Link to='' className='h6 notification-friend'>
            Selma Avocado
          </Link>
          <span className='chat-message-item'>82 Friends in Common</span>
        </div>
        <span className='notification-icon'>
          <Link to='' className='accept-request'>
            <span className='icon-add without-text'></span>
          </Link>
        </span>
      </li>
    );
  }
  return (
    <>
      <div className='ui-block top-users'>
        <div className='ui-block-title'>
          <h6 className='title'>Top 20 Users</h6>
          <Link to='' className='more'></Link>
        </div>
        <ul className='widget w-friend-pages-added notification-list friend-requests'>
          {items}
        </ul>
      </div>
      {/* <div className='ui-block refer-friend'>
        <Link to='' className='btn btn-lg'>
          Refer a Friend!
        </Link>
      </div> */}
    </>
  );
};
export default TopFriends;
