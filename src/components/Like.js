import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { GET_FOLLOWED_POSTS, GET_POSTS } from 'graphql/post';
import { GET_AUTH_USER } from 'graphql/user';
import { CREATE_LIKE, DELETE_LIKE } from 'graphql/like';

import { useStore } from 'store';
/**
 * Component for rendering Like button
 */
const Like = ({ postId, user, likes }) => {
  const [loading, setLoading] = useState(true);

  const [{ auth }] = useStore();

  const hasLiked = likes.find(
    l => l.user === auth.user.id && l.post === postId
  );

  const handleButtonClick = async mutate => {
    setLoading(false);
    setTimeout(() => {
      const { data } = mutate();
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
        <a href='#1' className={hasLiked?'btn btn-control likes-liked':'btn btn-control likes'}>
          <FontAwesomeIcon
            disabled={loading}
            icon={faHeart}
            size='2x'
            color={hasLiked?'red':'grey'}
            onClick={() => loading && handleButtonClick(mutate)}
          />
        <div className='ripple-container'></div>
        </a>
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

export default Like;
