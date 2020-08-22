import React from 'react';
import { Link } from 'react-router-dom';
const TrendingTopics = () => {
  return (
    <div className='ui-block'>
      <div className='ui-block-title topics'>
        <h6 className='title'>Trending Topics</h6>
        <Link to='#' className='more'></Link>
      </div>
      <ul className='widget w-friend-pages-added notification-list friend-requests'>
        <li className='d-flex justify-content-start align-items-center px-3 py-2'>
          <div className='notification-event'>
            <Link to='#' className='h6 notification-friend'>
              #locals
            </Link>
            <span className='chat-message-item'>9k Likes</span>
          </div>
          <span
            className='notification-icon'
            data-toggle='tooltip'
            data-placement='top'
            data-original-title='ADD TO YOUR FAVS'
          ></span>
        </li>
        <li className='inline-items'>
          <div className='notification-event'>
            <Link to='#' className='h6 notification-friend'>
              #thingamole
            </Link>
            <span className='chat-message-item'>6k Likes</span>
          </div>
          <span
            className='notification-icon'
            data-toggle='tooltip'
            data-placement='top'
            data-original-title='ADD TO YOUR FAVS'
          ></span>
        </li>
        <li className='inline-items'>
          <div className='notification-event'>
            <Link to='#' className='h6 notification-friend'>
              #localtoast
            </Link>
            <span className='chat-message-item'>5k Likes</span>
          </div>
          <span
            className='notification-icon'
            data-toggle='tooltip'
            data-placement='top'
            data-original-title='ADD TO YOUR FAVS'
          ></span>
        </li>
        <li className='inline-items'>
          <div className='notification-event'>
            <Link to='#' className='h6 notification-friend'>
              #localrose
            </Link>
            <span className='chat-message-item'>4k Likes</span>
          </div>
          <span
            className='notification-icon'
            data-toggle='tooltip'
            data-placement='top'
            data-original-title='ADD TO YOUR FAVS'
          ></span>
        </li>
        <li className='inline-items'>
          <div className='notification-event'>
            <Link to='#' className='h6 notification-friend'>
              #localnutrition
            </Link>
            <span className='chat-message-item'>2k Likes</span>
          </div>
          <span
            className='notification-icon'
            data-toggle='tooltip'
            data-placement='top'
            data-original-title='ADD TO YOUR FAVS'
          ></span>
        </li>
        <li className='inline-items'>
          <div className='notification-event'>
            <Link to='#' className='h6 notification-friend'>
              #localsocks
            </Link>
            <span className='chat-message-item'>1.5k Likes</span>
          </div>
          <span
            className='notification-icon'
            data-toggle='tooltip'
            data-placement='top'
            data-original-title='ADD TO YOUR FAVS'
          ></span>
        </li>
      </ul>
    </div>
  );
};
export default TrendingTopics;
