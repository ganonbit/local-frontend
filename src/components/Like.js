import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Mutation, withApollo } from 'react-apollo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import OverlayTriggers from './Common/ToolTip';

import { GET_FOLLOWED_POSTS, GET_POSTS } from 'graphql/post';
import { GET_AUTH_USER } from 'graphql/user';
import { CREATE_LIKE, DELETE_LIKE } from 'graphql/like';
import { CREATE_NOTIFICATION } from 'graphql/notification';
import { useStore } from 'store';
/**
 * Component for rendering Like button
 */
const Like = ({ postId, user, likes, client }) => {
  const [loading, setLoading] = useState(true);

  const [{ auth }] = useStore();

  const hasLiked = likes.find(
    l => l.user === auth.user.id && l.post === postId
  );
  const createNotification = async () => {
    try {
      await client.mutate({
        mutation: CREATE_NOTIFICATION,
        variables: {
          input: {
            userId: user.id,
            authorId: auth.user.id,
            postId: postId,
            notificationType: 'LIKE',
          },
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleButtonClick = async mutate => {
    setLoading(false);
    setTimeout(() => {
      const { data } = mutate();
      createNotification();
      setLoading(true);
    }, 2000);

    // Create or delete notification for like
    // if (auth.user.id === user.id) return setLoading(false);
  };

  // Detect which mutation to use
  const operation = hasLiked ? 'delete' : 'create';
  const options = {
    create: {
      mutation: CREATE_LIKE,
      variables: { postId, userId: auth.user.id },
    },
    delete: {
      mutation: DELETE_LIKE,
      variables: { id: hasLiked ? hasLiked.id : null },
    },
  };

  return (
    <Mutation
      mutation={options[operation].mutation}
      variables={{ input: { ...options[operation].variables } }}
      refetchQueries={() => [
        { query: GET_AUTH_USER },
        { query: GET_POSTS, variables: { authUserId: auth.user.id } },
        {
          query: GET_FOLLOWED_POSTS,
          variables: { userId: auth.user.id },
        },
      ]}
    >
      {mutate => {
        return (
          <OverlayTriggers toolTipText='LIKE' placement='left'>
            <a
              href
              className={
                hasLiked
                  ? 'btn btn-control likes-liked'
                  : 'btn btn-control likes'
              }
            >
              <FontAwesomeIcon
                disabled={loading}
                icon={faHeart}
                size='2x'
                color={hasLiked ? 'red' : 'grey'}
                onClick={() => loading && handleButtonClick(mutate)}
              />
              <div className='ripple-container'></div>
            </a>
          </OverlayTriggers>
        );
      }}
    </Mutation>
  );
};

Like.propTypes = {
  postId: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  likes: PropTypes.array,
  withText: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

export default withApollo(Like);
