import React from 'react';
import { useStore } from 'store';
const Notification = () => {
  const [{ auth }] = useStore();
  console.log('---------------------Auth', auth);
  return (
    <>
      <div className='ui-block-title block-title-bg'>
        <h6 className='title'>Notifications</h6>
        <a href='#1' className='more'>
          <svg className='olymp-three-dots-icon'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon'></use>
          </svg>
        </a>
      </div>

      <ul className='notification-list'>
        <li>
          <div className='author-thumb'>
            <img
              src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avatar1-sm.jpg'
              alt='author'
            />
          </div>
          <div className='notification-event'>
            <a href='#1' className='h6 notification-friend'>
              Mathilda Brinker
            </a>{' '}
            commented on your new{' '}
            <a href='#1' className='notification-link'>
              profile status
            </a>
            .
            <span className='notification-date'>
              <time className='entry-date updated' datetime='2004-07-24T18:18'>
                4 hours ago
              </time>
            </span>
          </div>
          <span className='notification-icon'>
            <svg className='olymp-comments-post-icon'>
              <use XlinkHref='svg-icons/sprites/icons.svg#olymp-comments-post-icon'></use>
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

        <li className='un-read'>
          <div className='author-thumb'>
            <img
              src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avatar2-sm.jpg'
              alt='author'
            />
          </div>
          <div className='notification-event'>
            You and{' '}
            <a href='#1' className='h6 notification-friend'>
              Nicholas Grissom
            </a>{' '}
            just became friends. Write on{' '}
            <a href='#1' className='notification-link'>
              his wall
            </a>
            .
            <span className='notification-date'>
              <time className='entry-date updated' datetime='2004-07-24T18:18'>
                9 hours ago
              </time>
            </span>
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

        <li className='with-comment-photo1'>
          <div className='author-thumb'>
            <img
              src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avatar3-sm.jpg'
              alt='author'
            />
          </div>
          <div className='notification-event'>
            <a href='#1' className='h6 notification-friend'>
              Sarah Hetfield
            </a>{' '}
            commented on your{' '}
            <a href='#1' className='notification-link'>
              photo1
            </a>
            .
            <span className='notification-date'>
              <time className='entry-date updated' datetime='2004-07-24T18:18'>
                Yesterday at 5:32am
              </time>
            </span>
          </div>
          <span className='notification-icon'>
            <svg className='olymp-comments-post-icon'>
              <use XlinkHref='svg-icons/sprites/icons.svg#olymp-comments-post-icon'></use>
            </svg>
          </span>

          <div className='comment-photo1'>
            <img
              src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/comment-photo1.jpg'
              alt='photo1'
            />
            <span>
              “She looks incredible in that outfit! We should see each...”
            </span>
          </div>
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
            <img
              src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avatar4-sm.jpg'
              alt='author'
            />
          </div>
          <div className='notification-event'>
            <a href='#1' className='h6 notification-friend'>
              Chris Greyson
            </a>{' '}
            liked your{' '}
            <a href='#1' className='notification-link'>
              profile status
            </a>
            .
            <span className='notification-date'>
              <time className='entry-date updated' datetime='2004-07-24T18:18'>
                March 18th at 8:22pm
              </time>
            </span>
          </div>
          <span className='notification-icon'>
            <svg className='olymp-heart-icon'>
              <use XlinkHref='svg-icons/sprites/icons.svg#olymp-heart-icon'></use>
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
            <img
              src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avatar5-sm.jpg'
              alt='author'
            />
          </div>
          <div className='notification-event'>
            <a href='#1' className='h6 notification-friend'>
              Green Goo Rock
            </a>{' '}
            invited you to attend to his event Goo in{' '}
            <a href='#1' className='notification-link'>
              Gotham Bar
            </a>
            .
            <span className='notification-date'>
              <time className='entry-date updated' datetime='2004-07-24T18:18'>
                March 5th at 6:43pm
              </time>
            </span>
          </div>
          <span className='notification-icon'>
            <svg className='olymp-calendar-icon'>
              <use XlinkHref='svg-icons/sprites/icons.svg#olymp-calendar-icon'></use>
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
            <img
              src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avatar6-sm.jpg'
              alt='author'
            />
          </div>
          <div className='notification-event'>
            <a href='#1' className='h6 notification-friend'>
              James Summers
            </a>{' '}
            commented on your new{' '}
            <a href='#1' className='notification-link'>
              profile status
            </a>
            .
            <span className='notification-date'>
              <time className='entry-date updated' datetime='2004-07-24T18:18'>
                March 2nd at 8:29pm
              </time>
            </span>
          </div>
          <span className='notification-icon'>
            <svg className='olymp-comments-post-icon'>
              <use XlinkHref='svg-icons/sprites/icons.svg#olymp-comments-post-icon'></use>
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
            <img
              src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avatar7-sm.jpg'
              alt='author'
            />
          </div>
          <div className='notification-event'>
            <a href='#1' className='h6 notification-friend'>
              Marina Valentine
            </a>{' '}
            commented on your new{' '}
            <a href='#1' className='notification-link'>
              profile status
            </a>
            .
            <span className='notification-date'>
              <time className='entry-date updated' datetime='2004-07-24T18:18'>
                March 2nd at 10:07am
              </time>
            </span>
          </div>
          <span className='notification-icon'>
            <svg className='olymp-comments-post-icon'>
              <use XlinkHref='svg-icons/sprites/icons.svg#olymp-comments-post-icon'></use>
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
      </ul>
    </>
  );
};
export default Notification;
