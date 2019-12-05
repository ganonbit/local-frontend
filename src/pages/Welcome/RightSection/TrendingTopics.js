import React from 'react';
import { Link } from 'react-router-dom';
const TrendingTopics = () => {
  const items = [];
  for (let i = 0; i < 6; i++) {
    items.push(
      <li className='inline-items' key={i}>
        <div className='notification-event'>
          <Link to='' className='h6 notification-friend'>
            #TrendingTopic
          </Link>
          <span className='chat-message-item'>99.9K Likes</span>
        </div>
        <span
          className='notification-icon'
          data-toggle='tooltip'
          data-placement='top'
          data-original-title='ADD TO YOUR FAVS'
        ></span>
      </li>
    );
  }
  return (
    <div className='ui-block'>
      <div className='ui-block-title topics'>
        <h6 className='title'>Trending Topics</h6>
        <Link to='' className='more'></Link>
      </div>

      <ul className='widget w-friend-pages-added notification-list friend-requests'>
        {items}
      </ul>
    </div>
  );
};
export default TrendingTopics;
