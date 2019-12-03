import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'components/Avatar';
import { Query } from 'react-apollo';
import { withApollo } from 'react-apollo';
import { generatePath, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { USER_SUGGESTIONS } from 'graphql/user';
import { CREATE_FOLLOW } from 'graphql/follow';

import * as Routes from 'routes';

import { useStore } from 'store';

const FriendsSuggestions = ({ client }) => {
  const [{ auth }] = useStore();
  const variables = {
    userId: auth.user.id,
  };

  let handleButtonClick = async (e, follower) => {
    e.preventDefault();
    try {
      await client.mutate({
        mutation: CREATE_FOLLOW,
        variables: { input: { userId: auth.user.id, followerId: follower.id } },
        refetchQueries: () => [
          {
            query: USER_SUGGESTIONS,
            variables: variables,
          },
        ],
      });
    } catch (err) {}
  };
  return (
    <Query query={USER_SUGGESTIONS} variables={variables}>
      {({ data, loading }) => {
        return loading === true ? (
          <h1>loading...!</h1>
        ) : (
          <div className='ui-block'>
            <div className='ui-block-title block-title-bg'>
              <h6 className='title'>Friend Suggestions</h6>
              <a href='#1' className='more'>
                <FontAwesomeIcon icon={faEllipsisV} color='white' />
              </a>
            </div>
            <ul className='widget w-friend-pages-added notification-list friend-requests sidebar-box'>
              {data.suggestPeople.map((user, index) => (
                <li className='inline-items' key={index}>
                  <div className='author-thumb'>
                    <Avatar image={user.image} />
                  </div>
                  <div className='notification-event'>
                    <Link
                      className='h6 notification-friend'
                      to={generatePath(Routes.USER_PROFILE, {
                        username: user.username,
                      })}
                    >
                      {`${user.firstName} ${user.lastName}`}
                    </Link>
                    <span className='chat-message-item'>
                      6 Friends in Common
                    </span>
                  </div>
                  <span className='notification-icon'>
                    <div
                      className='accept-request'
                      onClick={e => handleButtonClick(e, user)}
                    >
                      <span className='without-text'>
                        <FontAwesomeIcon icon={faUserPlus} color='white' />
                      </span>
                    </div>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        );
      }}
    </Query>
  );
};
FriendsSuggestions.propTypes = {
  client: PropTypes.object.isRequired,
};
export default withApollo(FriendsSuggestions);
