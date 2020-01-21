import React from 'react';

import { Query } from 'react-apollo';

import { Notification } from 'components/ProfileSetting';

import { useStore } from 'store';

import { GET_USER_NOTIFICATION } from 'graphql/notification';

import { NOTIFICATIONS_PAGE_NOTIFICATION_LIMIT } from 'constants/DataLimit';

/**
 * Notifications page
 */
const Notifications = () => {
  const [{ auth }] = useStore();
  const variables = {
    userId: auth.user.id,
    skip: 0,
    limit: NOTIFICATIONS_PAGE_NOTIFICATION_LIMIT,
  };
  return (
    <>
      <div className='ui-block-title block-title-bg'>
        <h6 className='title'>Notifications</h6>
        <a href className='more'>
          <svg className='olymp-three-dots-icon'>
            <use XlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon'></use>
          </svg>
        </a>
      </div>
      <Query
        query={GET_USER_NOTIFICATION}
        variables={variables}
        notifyOnNetworkStatusChange
      >
        {({ data, loading, fetchMore, networkStatus }) => {
          if (loading && networkStatus === 1) return <>Network error</>;
          const { notifications, count } = data.getUserNotifications;
          if (!notifications.length) {
            return (
              <div className='notifications-empty'>No notifications yet</div>
            );
          }
          return (
            <ul className='notification-list notification-list-wrap'>
              {data &&
                notifications.map(notification => (
                  <Notification
                    key={notification.id}
                    notification={notification}
                  />
                ))}
            </ul>
          );
        }}
      </Query>
    </>
  );
};
export default Notifications;
