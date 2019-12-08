import React from 'react';
const FriendRequest = () => (
  <>
    <div className='ui-block-title block-title-bg'>
      <h6 className='title'>Friend Requests</h6>
      <a href='1#' className='more'>
        <svg className='olymp-three-dots-icon'>
          <use XlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon'></use>
        </svg>
      </a>
    </div>
    <ul className='notification-list friend-requests'>
      <li>
        <div className='author-thumb'>
          <img src='img/avatar15-sm.jpg' alt='author' />
        </div>
        <div className='notification-event'>
          <a href='1#' className='h6 notification-friend'>
            Tamara Romanoff
          </a>
          <span className='chat-message-item'>
            Mutual Friend: Sarah Hetfield
          </span>
        </div>
        <span className='notification-icon'>
          <a href='1#' className='accept-request'>
            <span className='icon-add'>
              <svg className='olymp-happy-face-icon'>
                <use XlinkHref='svg-icons/sprites/icons.svg#olymp-happy-face-icon'></use>
              </svg>
            </span>
            Accept Friend Request
          </a>
          <a href='1#' className='accept-request request-del'>
            <span className='icon-minus'>
              <svg className='olymp-happy-face-icon'>
                <use XlinkHref='svg-icons/sprites/icons.svg#olymp-happy-face-icon'></use>
              </svg>
            </span>
          </a>
        </span>
        <div className='more'>
          <svg className='olymp-three-dots-icon'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon'></use>
          </svg>
          <svg className='olymp-little-delete'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-little-delete'></use>
          </svg>
        </div>
      </li>
      <li>
        <div className='author-thumb'>
          <img src='img/avatar16-sm.jpg' alt='author' />
        </div>
        <div className='notification-event'>
          <a href='1#' className='h6 notification-friend'>
            Tony Stevens
          </a>
          <span className='chat-message-item'>4 Friends in Common</span>
        </div>
        <span className='notification-icon'>
          <a href='1#' className='accept-request'>
            <span className='icon-add'>
              <svg className='olymp-happy-face-icon'>
                <use XlinkHref='svg-icons/sprites/icons.svg#olymp-happy-face-icon'></use>
              </svg>
            </span>
            Accept Friend Request
          </a>
          <a href='1#' className='accept-request request-del'>
            <span className='icon-minus'>
              <svg className='olymp-happy-face-icon'>
                <use XlinkHref='svg-icons/sprites/icons.svg#olymp-happy-face-icon'></use>
              </svg>
            </span>
          </a>
        </span>
        <div className='more'>
          <svg className='olymp-three-dots-icon'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon'></use>
          </svg>
          <svg className='olymp-little-delete'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-little-delete'></use>
          </svg>
        </div>
      </li>
      <li className='accepted'>
        <div className='author-thumb'>
          <img src='img/avatar17-sm.jpg' alt='author' />
        </div>
        <div className='notification-event'>
          You and{' '}
          <a href='1#' className='h6 notification-friend'>
            Mary Jane Stark
          </a>{' '}
          just became friends. Write on{' '}
          <a href='1#' className='notification-link'>
            his wall
          </a>
          .
        </div>
        <span className='notification-icon'>
          <svg className='olymp-happy-face-icon'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-happy-face-icon'></use>
          </svg>
        </span>
        <div className='more'>
          <svg className='olymp-three-dots-icon'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon'></use>
          </svg>
          <svg className='olymp-little-delete'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-little-delete'></use>
          </svg>
        </div>
      </li>
      <li>
        <div className='author-thumb'>
          <img src='img/avatar18-sm.jpg' alt='author' />
        </div>
        <div className='notification-event'>
          <a href='1#' className='h6 notification-friend'>
            Stagg Clothing
          </a>
          <span className='chat-message-item'>9 Friends in Common</span>
        </div>
        <span className='notification-icon'>
          <a href='1#' className='accept-request'>
            <span className='icon-add'>
              <svg className='olymp-happy-face-icon'>
                <use XlinkHref='svg-icons/sprites/icons.svg#olymp-happy-face-icon'></use>
              </svg>
            </span>
            Accept Friend Request
          </a>
          <a href='1#' className='accept-request request-del'>
            <span className='icon-minus'>
              <svg className='olymp-happy-face-icon'>
                <use XlinkHref='svg-icons/sprites/icons.svg#olymp-happy-face-icon'></use>
              </svg>
            </span>
          </a>
        </span>
        <div className='more'>
          <svg className='olymp-three-dots-icon'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon'></use>
          </svg>
          <svg className='olymp-little-delete'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-little-delete'></use>
          </svg>
        </div>
      </li>
    </ul>
  </>
);
export default FriendRequest;
