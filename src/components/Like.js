import React, { useState } from 'react';
import { Mutation, withApollo } from 'react-apollo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { GET_FOLLOWED_POSTS, GET_POSTS } from 'graphql/post';
import { GET_AUTH_USER } from 'graphql/user';
import { CREATE_LIKE, DELETE_LIKE } from 'graphql/like';

import { NotificationType } from 'constants/NotificationType';

import { useNotifications } from 'hooks/useNotifications';

import { useStore } from 'store';
/**
 * Component for rendering Like button
 */
const Like = ({ postId, user, likes, post }) => {
  const notification = useNotifications();
  const [loading, setLoading] = useState(true);
  const [{ auth }] = useStore();
  const hasLiked = likes.find(
    l => l.user === auth.user.id && l.post === postId
  );
  let isAuthUser = auth.user.id === user.id;
  let isAuthPost = post && auth.user.id === post.author.id;

  const handleButtonClick = async mutate => {
    setLoading(true);
    const { data } = await mutate();
    if (isAuthUser) return setLoading(false);
    !isAuthPost &&
      !hasLiked &&
      (await notification.toggle({
        user,
        postId,
        hasDone: hasLiked,
        notificationType: NotificationType.LIKE,
        notificationTypeId: data.createLike ? data.createLike.id : null,
      }));
    setLoading(false);
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
          <a
            href
            className={
              hasLiked ? 'btn btn-control likes-liked' : 'btn btn-control likes'
            }
          >
            <FontAwesomeIcon
              disabled={loading}
              icon={faHeart}
              size='2x'
              color={hasLiked ? 'red' : 'grey'}
              onClick={() => handleButtonClick(mutate)}
            />
            <div className='ripple-container'></div>
          </a>
        );
      }}
    </Mutation>
  );
};

export default withApollo(Like);
