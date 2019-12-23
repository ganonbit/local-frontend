import React from 'react';

const NotificationMessages = () => (
  <div class='col col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 padding-r-0'>
    <ul class='notification-list chat-message'>
      <li>
        <div class='author-thumb'>
          <img src='img/avatar8-sm.jpg' alt='author' />
        </div>
        <div class='notification-event'>
          <a href='1#' class='h6 notification-friend'>
            Diana Jameson
          </a>
          <span class='chat-message-item'>
            Hi James! It’s Diana, I just wanted to let you know that we have to
            reschedule...
          </span>
          <span class='notification-date'>
            <time class='entry-date updated' datetime='2004-07-24T18:18'>
              4 hours ago
            </time>
          </span>
        </div>
        <span class='notification-icon'>
          <svg class='olymp-chat---messages-icon'>
            <use xlinkhref='svg-icons/sprites/icons.svg#olymp-chat---messages-icon'></use>
          </svg>
        </span>
        <div class='more'>
          <svg class='olymp-three-dots-icon'>
            <use xlinkhref='svg-icons/sprites/icons.svg#olymp-three-dots-icon'></use>
          </svg>
        </div>
      </li>
      <li>
        <div class='author-thumb'>
          <img src='img/avatar9-sm.jpg' alt='author' />
        </div>
        <div class='notification-event'>
          <a href='1#' class='h6 notification-friend'>
            Jake Parker
          </a>
          <span class='chat-message-item'>Great, I’ll see you tomorrow!.</span>
          <span class='notification-date'>
            <time class='entry-date updated' datetime='2004-07-24T18:18'>
              4 hours ago
            </time>
          </span>
        </div>
        <span class='notification-icon'>
          <svg class='olymp-chat---messages-icon'>
            <use xlinkhref='svg-icons/sprites/icons.svg#olymp-chat---messages-icon'></use>
          </svg>
        </span>
        <div class='more'>
          <svg class='olymp-three-dots-icon'>
            <use xlinkhref='svg-icons/sprites/icons.svg#olymp-three-dots-icon'></use>
          </svg>
        </div>
      </li>
      <li>
        <div class='author-thumb'>
          <img src='img/avatar10-sm.jpg' alt='author' />
        </div>
        <div class='notification-event'>
          <a href='1#' class='h6 notification-friend'>
            Elaine Dreyfuss
          </a>
          <span class='chat-message-item'>
            We’ll have to check that at the office and see if the client is on
            board with...
          </span>
          <span class='notification-date'>
            <time class='entry-date updated' datetime='2004-07-24T18:18'>
              Yesterday at 9:56pm
            </time>
          </span>
        </div>
        <span class='notification-icon'>
          <svg class='olymp-chat---messages-icon'>
            <use xlinkhref='svg-icons/sprites/icons.svg#olymp-chat---messages-icon'></use>
          </svg>
        </span>
        <div class='more'>
          <svg class='olymp-three-dots-icon'>
            <use xlinkhref='svg-icons/sprites/icons.svg#olymp-three-dots-icon'></use>
          </svg>
        </div>
      </li>
      <li class='chat-group'>
        <div class='author-thumb'>
          <img src='img/avatar11-sm.jpg' alt='author' />
          <img src='img/avatar12-sm.jpg' alt='author' />
          <img src='img/avatar13-sm.jpg' alt='author' />
          <img src='img/avatar10-sm.jpg' alt='author' />
        </div>
        <div class='notification-event'>
          <a href='1#' class='h6 notification-friend'>
            You, Faye, Ed & Jet +3
          </a>
          <span class='last-message-author'>Ed:</span>
          <span class='chat-message-item'>Yeah! Seems fine by me!</span>
          <span class='notification-date'>
            <time class='entry-date updated' datetime='2004-07-24T18:18'>
              March 16th at 10:23am
            </time>
          </span>
        </div>
        <span class='notification-icon'>
          <svg class='olymp-chat---messages-icon'>
            <use xlinkhref='svg-icons/sprites/icons.svg#olymp-chat---messages-icon'></use>
          </svg>
        </span>
        <div class='more'>
          <svg class='olymp-three-dots-icon'>
            <use xlinkhref='svg-icons/sprites/icons.svg#olymp-three-dots-icon'></use>
          </svg>
        </div>
      </li>
    </ul>
  </div>
);

export default NotificationMessages;
