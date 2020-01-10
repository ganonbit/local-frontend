import React from 'react';
import { useStore } from 'store';
import { generatePath, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withApollo } from 'react-apollo';
import { UPDATE_NOTIFICATION_SEEN } from 'graphql/notification';

import Avatar from 'components/Avatar';

import * as Routes from 'routes';

const Notifications = ({ client, refetch }) => {
  const [{ auth }] = useStore();
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
    <div
      className='icon-outer'
      // onMouseLeave={() => updateNotificationSeen()
      // }
    >
      <div className='control-icon more has-items'>
        <img
          src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/notification-img_cporyu.png'
          alt='notifi'
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
              {auth.user.newNotifications.map(notification => {
                return notification.comment ? (
                  <li>
                    <Link
                      to={generatePath(Routes.USER_PROFILE, {
                        username: notification.author.username,
                      })}
                    >
                      <div className='author-thumb'>
                        <Avatar image={notification.author.image} />
                      </div>
                    </Link>
                    <div className='notification-event'>
                      <div>
                        <a href className='h6 notification-friend'>
                          {`${notification.author.firstName} ${notification.author.lastName}`}
                        </a>{' '}
                        commented on your post
                      </div>
                    </div>
                  </li>
                ) : (
                  <li>
                    <Link
                      to={generatePath(Routes.USER_PROFILE, {
                        username: notification.author.username,
                      })}
                    >
                      <div className='author-thumb'>
                        <Avatar image={notification.author.image} />
                      </div>
                    </Link>
                    <div className='notification-event'>
                      <div>
                        <a href className='h6 notification-friend'>
                          {`${notification.author.firstName} ${notification.author.lastName}`}
                        </a>{' '}
                        like your post
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <a href className='view-all bg-primary'>
            View All Notifications
          </a>
        </div>
      </div>
    </div>
  );
};

Notification.propTypes = {
  client: PropTypes.object.isRequired,
};

export default withApollo(Notifications);
