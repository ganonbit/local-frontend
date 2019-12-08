import React from 'react';
const Notification = () => (
  <>
    <div class='ui-block-title block-title-bg'>
      <h6 class='title'>Notifications</h6>
      <a href='#1' class='more'>
        <svg class='olymp-three-dots-icon'>
          <use XlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon'></use>
        </svg>
      </a>
    </div>

    <ul class='notification-list'>
      <li>
        <div class='author-thumb'>
          <img src='img/avatar1-sm.jpg' alt='author' />
        </div>
        <div class='notification-event'>
          <a href='#1' class='h6 notification-friend'>
            Mathilda Brinker
          </a>{' '}
          commented on your new{' '}
          <a href='#1' class='notification-link'>
            profile status
          </a>
          .
          <span class='notification-date'>
            <time class='entry-date updated' datetime='2004-07-24T18:18'>
              4 hours ago
            </time>
          </span>
        </div>
        <span class='notification-icon'>
          <svg class='olymp-comments-post-icon'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-comments-post-icon'></use>
          </svg>
        </span>

        <div class='more'>
          <svg class='olymp-three-dots-icon'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon'></use>
          </svg>
          <svg class='olymp-little-delete'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-little-delete'></use>
          </svg>
        </div>
      </li>

      <li class='un-read'>
        <div class='author-thumb'>
          <img src='img/avatar2-sm.jpg' alt='author' />
        </div>
        <div class='notification-event'>
          You and{' '}
          <a href='#1' class='h6 notification-friend'>
            Nicholas Grissom
          </a>{' '}
          just became friends. Write on{' '}
          <a href='#1' class='notification-link'>
            his wall
          </a>
          .
          <span class='notification-date'>
            <time class='entry-date updated' datetime='2004-07-24T18:18'>
              9 hours ago
            </time>
          </span>
        </div>
        <span class='notification-icon'>
          <svg class='olymp-happy-face-icon'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-happy-face-icon'></use>
          </svg>
        </span>

        <div class='more'>
          <svg class='olymp-three-dots-icon'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon'></use>
          </svg>
          <svg class='olymp-little-delete'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-little-delete'></use>
          </svg>
        </div>
      </li>

      <li class='with-comment-photo1'>
        <div class='author-thumb'>
          <img src='img/avatar3-sm.jpg' alt='author' />
        </div>
        <div class='notification-event'>
          <a href='#1' class='h6 notification-friend'>
            Sarah Hetfield
          </a>{' '}
          commented on your{' '}
          <a href='#1' class='notification-link'>
            photo1
          </a>
          .
          <span class='notification-date'>
            <time class='entry-date updated' datetime='2004-07-24T18:18'>
              Yesterday at 5:32am
            </time>
          </span>
        </div>
        <span class='notification-icon'>
          <svg class='olymp-comments-post-icon'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-comments-post-icon'></use>
          </svg>
        </span>

        <div class='comment-photo1'>
          <img src='img/comment-photo1.jpg' alt='photo1' />
          <span>
            “She looks incredible in that outfit! We should see each...”
          </span>
        </div>
        <div class='more'>
          <svg class='olymp-three-dots-icon'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon'></use>
          </svg>
          <svg class='olymp-little-delete'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-little-delete'></use>
          </svg>
        </div>
      </li>

      <li>
        <div class='author-thumb'>
          <img src='img/avatar4-sm.jpg' alt='author' />
        </div>
        <div class='notification-event'>
          <a href='#1' class='h6 notification-friend'>
            Chris Greyson
          </a>{' '}
          liked your{' '}
          <a href='#1' class='notification-link'>
            profile status
          </a>
          .
          <span class='notification-date'>
            <time class='entry-date updated' datetime='2004-07-24T18:18'>
              March 18th at 8:22pm
            </time>
          </span>
        </div>
        <span class='notification-icon'>
          <svg class='olymp-heart-icon'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-heart-icon'></use>
          </svg>
        </span>
        <div class='more'>
          <svg class='olymp-three-dots-icon'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon'></use>
          </svg>
          <svg class='olymp-little-delete'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-little-delete'></use>
          </svg>
        </div>
      </li>

      <li>
        <div class='author-thumb'>
          <img src='img/avatar5-sm.jpg' alt='author' />
        </div>
        <div class='notification-event'>
          <a href='#1' class='h6 notification-friend'>
            Green Goo Rock
          </a>{' '}
          invited you to attend to his event Goo in{' '}
          <a href='#1' class='notification-link'>
            Gotham Bar
          </a>
          .
          <span class='notification-date'>
            <time class='entry-date updated' datetime='2004-07-24T18:18'>
              March 5th at 6:43pm
            </time>
          </span>
        </div>
        <span class='notification-icon'>
          <svg class='olymp-calendar-icon'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-calendar-icon'></use>
          </svg>
        </span>

        <div class='more'>
          <svg class='olymp-three-dots-icon'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon'></use>
          </svg>
          <svg class='olymp-little-delete'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-little-delete'></use>
          </svg>
        </div>
      </li>

      <li>
        <div class='author-thumb'>
          <img src='img/avatar6-sm.jpg' alt='author' />
        </div>
        <div class='notification-event'>
          <a href='#1' class='h6 notification-friend'>
            James Summers
          </a>{' '}
          commented on your new{' '}
          <a href='#1' class='notification-link'>
            profile status
          </a>
          .
          <span class='notification-date'>
            <time class='entry-date updated' datetime='2004-07-24T18:18'>
              March 2nd at 8:29pm
            </time>
          </span>
        </div>
        <span class='notification-icon'>
          <svg class='olymp-comments-post-icon'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-comments-post-icon'></use>
          </svg>
        </span>

        <div class='more'>
          <svg class='olymp-three-dots-icon'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon'></use>
          </svg>
          <svg class='olymp-little-delete'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-little-delete'></use>
          </svg>
        </div>
      </li>

      <li>
        <div class='author-thumb'>
          <img src='img/avatar7-sm.jpg' alt='author' />
        </div>
        <div class='notification-event'>
          <a href='#1' class='h6 notification-friend'>
            Marina Valentine
          </a>{' '}
          commented on your new{' '}
          <a href='#1' class='notification-link'>
            profile status
          </a>
          .
          <span class='notification-date'>
            <time class='entry-date updated' datetime='2004-07-24T18:18'>
              March 2nd at 10:07am
            </time>
          </span>
        </div>
        <span class='notification-icon'>
          <svg class='olymp-comments-post-icon'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-comments-post-icon'></use>
          </svg>
        </span>

        <div class='more'>
          <svg class='olymp-three-dots-icon'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon'></use>
          </svg>
          <svg class='olymp-little-delete'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-little-delete'></use>
          </svg>
        </div>
      </li>
    </ul>
  </>
);

export default Notification;
