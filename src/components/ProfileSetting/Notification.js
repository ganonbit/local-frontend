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
    <>
      {notification.like && (<li>
        <div className='d-flex'>
          <div className='author-thumb mx-2'>
            <Avatar image={notification.author.image} />
          </div>
          <div className='notification-detail mx-2'>
            <Link
              to={generatePath(Routes.USER_PROFILE, {
                username: notification.author.username,
              })}
            >
              <h6 className='mb-1'>{`${notification.author.firstName} ${notification.author.lastName}`}</h6>
            </Link>
            <p>Like your post</p>
          </div>
        </div>
      </li>
      )}
       {notification.comment && (<li key={notification.id}>
        <div className='d-flex'>
          <div className='author-thumb mx-2'>
            <Avatar image={notification.author.image} />
          </div>
          <div className='notification-detail mx-2'>
            <Link
              to={generatePath(Routes.USER_PROFILE, {
                username: notification.author.username,
              })}
            >
              <h6 className='mb-1'>{`${notification.author.firstName} ${notification.author.lastName}`}</h6>
            </Link>
            <p>Comment on your post</p>
          </div>
        </div>
      </li>
      )}
    </>
  );
};
Notification.propTypes = {
  client: PropTypes.object.isRequired,
};

export default withApollo(Notification);
