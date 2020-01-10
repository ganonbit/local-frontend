import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { generatePath, Link } from 'react-router-dom';
import { withApollo } from 'react-apollo';

import Avatar from 'components/Avatar';

import { GET_AUTH_USER } from 'graphql/user';
import { UPDATE_NOTIFICATION_SEEN } from 'graphql/notification';

import { useStore } from 'store';

import * as Routes from 'routes';

const Notification = ({ notification, client, key }) => {
  const [{ auth }] = useStore();

  useEffect(() => {
    const updateNotificationSeen = async () => {
      try {
        await client.mutate({
          mutation: UPDATE_NOTIFICATION_SEEN,
          variables: {
            input: {
              userId: auth.user.id,
            },
          },
          refetchQueries: () => [{ query: GET_AUTH_USER }],
        });
      } catch (err) {}
    };

    updateNotificationSeen();
  }, [auth.user.id, auth.user.newNotifications.length, client]);

  return (
    <li key={key}>
      <Avatar image={auth.user.image} />
      <div className='notification-event'>
        <Link
          className='h6 notification-friend'
          to={generatePath(Routes.USER_PROFILE, {
            username: notification.author.username,
          })}
        >
          {`${notification.author.firstName} ${notification.author.lastName}`}
        </Link>
        {notification.follow && <>started following you</>}

        {notification.like && (
          <>
            liked your photo
            <Link
            // to={generatePath(Routes.POST, {
            //   id: notification.like.post.id,
            // })}
            >
              <div className='comment-photo1'>
                <img src={notification.like.post.image} alt='photo1' />
              </div>
            </Link>
          </>
        )}

        {notification.comment && (
          <>
            liked your photo
            <Link
              to={generatePath(Routes.POST, {
                id: notification.comment.post.id,
              })}
            >
              <div className='comment-photo1'>
                <img src={notification.comment.post.image} alt='photo1' />
              </div>
            </Link>
          </>
        )}
      </div>
    </li>
  );
};
Notification.propTypes = {
  client: PropTypes.object.isRequired,
};

export default withApollo(Notification);
