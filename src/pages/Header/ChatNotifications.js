import React, { Component } from 'react';
export default class ChatNotifications extends Component {
  render() {
    return (
      <div className='control-icon more has-items'>
        <img
          src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/inbox-img_pvtt1m.png'
          alt='chatt'
        />
        <div className='label-avatar bg-purple'>2</div>

        <div className='more-dropdown more-with-triangle triangle-top-center'>
          <div className='ui-block-title ui-block-title-small'>
            <h6 className='title'>Chat / Messages</h6>
            <a href='#1'>Mark all as read</a>
            <a href='#1'>Settings</a>
          </div>

          <div className='mCustomScrollbar' data-mcs-theme='dark'>
            <ul className='notification-list chat-message'>
              <li className='message-unread'>
                <div className='author-thumb'>
                  <img
                    src='https://res.cloudinary.com/weare270b/image/upload/v1576219679/static/SelmaProfile-Crop_ltwm5s.png'
                    alt='author'
                  />
                </div>
                <div className='notification-event'>
                  <a href='#1' className='h6 notification-friend'>
                    Selma
                  </a>
                  <span className='chat-message-item'>
                    Hi! It’s Selma, I just wanted to let you know that we
                    have a new feature...
                  </span>
                  <span className='notification-date'>
                    <time
                      className='entry-date updated'
                      dateTime='2019-12-13T18:18'
                    >
                      4 hours ago
                    </time>
                  </span>
                </div>
                <span className='notification-icon'>
                  <svg
                    className='olymp-chat---messages-icon'
                    xlinkHref='svg-icons/sprites/icons.svg#olymp-chat---messages-icon'
                  />
                </span>
                <div className='more'>
                  <svg
                    className='olymp-three-dots-icon'
                    xlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon'
                  />
                </div>
              </li>

              <li>
                <div className='author-thumb'>
                  <img
                    src='https://res.cloudinary.com/weare270b/image/upload/v1576219679/static/SelmaProfile-Crop_ltwm5s.png'
                    alt='author'
                  />
                </div>
                <div className='notification-event'>
                  <a href='#1' className='h6 notification-friend'>
                    Selma
                  </a>
                  <span className='chat-message-item'>
                   Thanks for your idea!
                  </span>
                  <span className='notification-date'>
                    <time
                      className='entry-date updated'
                      dateTime='2004-07-24T18:18'
                    >
                      14 hours ago
                    </time>
                  </span>
                </div>
                <span className='notification-icon'>
                  <svg
                    className='olymp-chat---messages-icon'
                    xlinkHref='svg-icons/sprites/icons.svg#olymp-chat---messages-icon'
                  />
                </span>

                <div className='more'>
                  <svg
                    className='olymp-three-dots-icon'
                    xlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon'
                  />
                </div>
              </li>
              <li>
                <div className='author-thumb'>
                  <img
                    src='https://res.cloudinary.com/weare270b/image/upload/v1576219679/static/SelmaProfile-Crop_ltwm5s.png'
                    alt='author'
                  />
                </div>
                <div className='notification-event'>
                  <a href='#1' className='h6 notification-friend'>
                    Selma
                  </a>
                  <span className='chat-message-item'>
                    Welcome to Avocado Nation!
                  </span>
                  <span className='notification-date'>
                    <time
                      className='entry-date updated'
                      dateTime='2004-07-24T18:18'
                    >
                      2 days ago
                    </time>
                  </span>
                </div>
                <span className='notification-icon'>
                  <svg
                    className='olymp-chat---messages-icon'
                    xlinkHref='svg-icons/sprites/icons.svg#olymp-chat---messages-icon'
                  />
                </span>
                <div className='more'>
                  <svg
                    className='olymp-three-dots-icon'
                    xlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon'
                  />
                </div>
              </li>

              <li className='chat-group'>
                <div className='author-thumb'>
                  <img
                    src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avatar11-sm.jpg'
                    alt='author'
                  />
                  <img
                    src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avatar12-sm.jpg'
                    alt='author'
                  />
                  <img
                    src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avatar13-sm.jpg'
                    alt='author'
                  />
                  <img
                    src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avatar10-sm.jpg'
                    alt='author'
                  />
                </div>
                <div className='notification-event'>
                  <a href='#1' className='h6 notification-friend'>
                    You, Faye, Ed &amp; Jet +3
                  </a>
                  <span className='last-message-author'>Ed:</span>
                  <span className='chat-message-item'>
                    Yeah! Seems fine by me!
                  </span>
                  <span className='notification-date'>
                    <time
                      className='entry-date updated'
                      dateTime='2004-07-24T18:18'
                    >
                      March 16th at 10:23am
                    </time>
                  </span>
                </div>
                <span className='notification-icon'>
                  <svg
                    className='olymp-chat---messages-icon'
                    xlinkHref='svg-icons/sprites/icons.svg#olymp-chat---messages-icon'
                  />
                </span>
                <div className='more'>
                  <svg
                    className='olymp-three-dots-icon'
                    xlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon'
                  />
                </div>
              </li>
            </ul>
          </div>

          <a href='#1' className='view-all bg-purple'>
            View All Messages
          </a>
        </div>
      </div>
    );
  }
}
