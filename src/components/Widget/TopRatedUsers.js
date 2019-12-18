import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'components/Avatar';
import { Query, withApollo } from 'react-apollo';
import { generatePath, Link } from 'react-router-dom';
import { HappyFaceIcon } from 'components/icons';

import { USER_SUGGESTIONS, GET_TOP_USERS } from 'graphql/user';
import { CREATE_FOLLOW } from 'graphql/follow';

import * as Routes from 'routes';

import { useStore } from 'store';

const TopRatedUsers = ({ client }) => {
  const [{ auth }] = useStore();
  const variables = {
    userId: auth.user.id,
  };
  let handleButtonClick = async (e, follower) => {
    e.preventDefault();
    try {
      await client.mutate({
        mutation: CREATE_FOLLOW,
        variables: { input: { userId: follower.id, followerId: auth.user.id } },
        refetchQueries: () => [
          {
            query: GET_TOP_USERS,
            variables: variables,
          },
        ],
      });
    } catch (err) {}
  };
  return (
    <Query
      query={GET_TOP_USERS}
      variables={variables}
      notifyOnNetworkStatusChange
    >
      {({ data, loading }) => {
        return loading === true ? (
          <h1></h1>
        ) : (
          <>
            <div className='ui-block top-users'>
              <div className='ui-block-title'>
                <h6 className='title'>Top 20 Users</h6>
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
                        82 Friends in Common
                      </span>
                    </div>
                    <span className='notification-icon'>
                      <div
                        className='accept-request'
                        onClick={e => handleButtonClick(e, user)}
                      >
                        <span className='without-text'>
                          <HappyFaceIcon />
                          {/* <FontAwesomeIcon icon={faUserPlus} color='white' /> */}
                        </span>
                      </div>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* <div className='ui-block refer-friend'>
              <Link to='#' className='btn btn-lg'>
                Refer a Friend!
              </Link>
            </div> */}
          </>
        );
      }}
    </Query>
  );
};
TopRatedUsers.propTypes = {
  client: PropTypes.object.isRequired,
};
export default withApollo(TopRatedUsers);
