import React from 'react';
import { useStore } from 'store';
import PropTypes from 'prop-types';
import { withApollo } from 'react-apollo';
import { useMediaQuery } from 'react-responsive';

import { UPDATE_NOTIFICATION_SEEN } from 'graphql/notification';
import Default, { Mobile } from '../../components/Wrappers/Queries';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const Notifications = ({ client, refetch, isMobile }) => {
  const [{ auth }] = useStore();
  // const isMobile = useMediaQuery({ maxWidth: 767 });

  const updateNotificationSeen = async () => {
    try {
      await client.mutate({
        mutation: UPDATE_NOTIFICATION_SEEN,
        variables: {
          input: {
            userId: auth.user.id,
          },
        },
      });
      refetch();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {!isMobile ? (
        <div
          className='control-icon more has-items'
          onMouseLeave={() => updateNotificationSeen()}
        >
          <FontAwesomeIcon
            size='2x'
            color='white'
            icon={faBell}
            style={{ height: '24px' }}
          />
          {!auth.user.newNotifications.length ? null : (
            <div className='label-avatar bg-primary'>
              {auth.user.newNotifications.length}
            </div>
          )}
          <div className='more-dropdown more-with-triangle triangle-top-center'>
            <div className='ui-block-title ui-block-title-small'>
              <h6 className='title'>Notifications</h6>
              {/* <a href>Mark all as read</a>
            <a href>Settings</a> */}
            </div>

            <div className='mCustomScrollbar' data-mcs-theme='dark'>
              <ul className='notification-list'>
                <li>
                  <div className='author-thumb'>
                    <img
                      src='https://res.cloudinary.com/weare270b/image/upload/v1576220262/static/Image_from_iOS_1_bnaxnc.jpg'
                      alt='author'
                    />
                  </div>
                  <div className='notification-event'>
                    <div>
                      <a href className='h6 notification-friend'>
                        Reese
                      </a>{' '}
                      commented on your new{' '}
                      <a href className='notification-link'>
                        post
                      </a>
                    </div>
                    <span className='notification-date'>
                      <time
                        className='entry-date updated'
                        dateTime='2004-07-24T18:18'
                      >
                        4 hours ago
                      </time>
                    </span>
                  </div>
                  <span className='notification-icon'>
                    <svg
                      className='olymp-comments-post-icon'
                      xlinkHref='svg-icons/sprites/icons.svg#olymp-comments-post-icon'
                    />
                  </span>

                  <div className='more'>
                    <svg
                      className='olymp-three-dots-icon'
                      xlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon'
                    />
                    <svg
                      className='olymp-little-delete'
                      xlinkHref='svg-icons/sprites/icons.svg#olymp-little-delete'
                    />
                  </div>
                </li>

                <li className='un-read'>
                  <div className='author-thumb'>
                    <img
                      src='https://res.cloudinary.com/weare270b/image/upload/v1576220262/static/Image_from_iOS_1_bnaxnc.jpg'
                      alt='author'
                    />
                  </div>
                  <div className='notification-event'>
                    <div>
                      <a href className='h6 notification-friend'>
                        Nicholas Grissom
                      </a>{' '}
                      just followed you!
                    </div>
                    <span className='notification-date'>
                      <time
                        className='entry-date updated'
                        dateTime='2004-07-24T18:18'
                      >
                        9 hours ago
                      </time>
                    </span>
                  </div>
                  <span className='notification-icon'>
                    <svg
                      className='olymp-happy-face-icon'
                      xlinkHref='svg-icons/sprites/icons.svg#olymp-happy-face-icon'
                    />
                  </span>

                  <div className='more'>
                    <svg
                      className='olymp-three-dots-icon'
                      xlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon'
                    />
                    <svg
                      className='olymp-little-delete'
                      xlinkHref='svg-icons/sprites/icons.svg#olymp-little-delete'
                    />
                  </div>
                </li>

                <li className='with-comment-photo'>
                  <div className='author-thumb'>
                    <img
                      src='https://res.cloudinary.com/weare270b/image/upload/v1576220262/static/Image_from_iOS_1_bnaxnc.jpg'
                      alt='author'
                    />
                  </div>
                  <div className='notification-event'>
                    <div>
                      <a href className='h6 notification-friend'>
                        Sarah Hetfield
                      </a>{' '}
                      commented on your{' '}
                      <a href className='notification-link'>
                        photo
                      </a>
                      .
                    </div>
                    <span className='notification-date'>
                      <time
                        className='entry-date updated'
                        dateTime='2004-07-24T18:18'
                      >
                        Yesterday at 5:32am
                      </time>
                    </span>
                  </div>
                  <span className='notification-icon'>
                    <svg
                      className='olymp-comments-post-icon'
                      xlinkHref='svg-icons/sprites/icons.svg#olymp-comments-post-icon'
                    />
                  </span>
                </li>
              </ul>
            </div>

            <a href className='view-all bg-primary'>
              View All Notifications
            </a>
          </div>
        </div>
      ) : (
        <div className='tab-pane' id='notification' role='tabpanel'>
          <div
            className='mCustomScrollbar ps ps--theme_default'
            data-mcs-theme='dark'
          >
            <div className='ui-block-title ui-block-title-small'>
              <h6 className='title'>FRIEND REQUEST</h6>
              <a href='#'>Find Friends</a>
              <a href='#'>Settings</a>
            </div>
            <ul className='notification-list friend-requests'>
              <li>
                <div className='notification-event'>
                  <div>
                    <a href className='h6 notification-friend'>
                      Nicholas Grissom
                    </a>{' '}
                    just followed you!
                  </div>
                  <span className='notification-date'>
                    <time
                      className='entry-date updated'
                      dateTime='2004-07-24T18:18'
                    >
                      9 hours ago
                    </time>
                  </span>
                </div>
                <span className='notification-icon'>
                  <svg
                    className='olymp-happy-face-icon'
                    xlinkHref='svg-icons/sprites/icons.svg#olymp-happy-face-icon'
                  />
                </span>

                <div className='more'>
                  <svg
                    className='olymp-three-dots-icon'
                    xlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon'
                  />
                  <svg
                    className='olymp-little-delete'
                    xlinkHref='svg-icons/sprites/icons.svg#olymp-little-delete'
                  />
                </div>
              </li>
            </ul>
            <a href='#' className='view-all bg-blue'>
              Check all your Events
            </a>
          </div>
        </div>
      )}
    </>
  );
};

Notification.propTypes = {
  client: PropTypes.object.isRequired,
};

export default withApollo(Notifications);
