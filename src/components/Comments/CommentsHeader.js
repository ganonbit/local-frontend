import React from 'react';
import moment from 'moment';
import { generatePath, Link } from 'react-router-dom';
import { withApollo } from 'react-apollo';
import { useStore } from 'store';

import Avatar from 'components/Avatar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { GET_FOLLOWED_POSTS } from 'graphql/post';
import { DELETE_COMMENT } from 'graphql/comment';
import { GET_AUTH_USER, GET_USER_POSTS } from 'graphql/user';

import { useNotifications } from 'hooks/useNotifications';

import * as Routes from 'routes';

function CommentsHeader(props) {
  const notification = useNotifications();
  const {
    author,
    createdAt,
    client,
    imagePublicId,
    commentId,
    isAuth,
    post,
  } = props;
  const [{ auth }] = useStore();
  const isSelma = !auth.user ? null : auth.user.role === 'selma';
  const isOwner = !auth.user ? null : auth.user.id === author.id;
  const commentDate = new Date(parseInt(createdAt));
  const deleteComment = async () => {
    try {
      await client.mutate({
        mutation: DELETE_COMMENT,
        variables: { input: { id: commentId, imagePublicId } },
        refetchQueries: () => [
          {
            query: GET_FOLLOWED_POSTS,
            variables: {
              userId: auth.user.id,
              skip: 0,
              limit: 15,
            },
          },
          {
            query: GET_AUTH_USER,
            options: { fetchPolicy: 'cache-and-network' },
          },
          {
            query: GET_USER_POSTS,
            variables: {
              username: auth.user.username,
              skip: 0,
              limit: 15,
            },
          },
        ],
      });
      if (auth.user.id !== post.author.id) {
        const isNotified = post.author.notifications.find(
          n => n.comment && n.comment.id === commentId
        );
        notification.remove({
          notificationId: isNotified.id,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className='post__author author vcard inline-items'>
        <a
          href={generatePath(Routes.USER_PROFILE, {
            username: author.username,
          })}
        >
          <Avatar image={author.image} />
        </a>
        <div className='author-date'>
          <a
            href={generatePath(Routes.USER_PROFILE, {
              username: author.username,
            })}
            className='comment__author-name fn'
          >
            {author.firstName} {author.lastName}
          </a>
          <div className='post__date'>
            <time className='comment__published' dateTime={commentDate}>
              {moment(commentDate, 'YYYYMMDDHHmms').fromNow()}
            </time>
          </div>
        </div>
        {(isAuth && isOwner) || (isAuth && isSelma) ? (
          <div className='more'>
            <FontAwesomeIcon
              className='olymp-three-dots-icon'
              size='lg'
              color='black'
              icon={faEllipsisV}
              style={{ height: '12px' }}
            />
            <ul className='more-dropdown'>
              <li>
                <Link
                  to
                  onClick={e => {
                    e.preventDefault();
                    // editComment(e);
                  }}
                >
                  Edit Comment
                </Link>
              </li>
              <li>
                <Link
                  to
                  onClick={e => {
                    e.preventDefault();
                    deleteComment(e);
                  }}
                >
                  Delete Comment
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default withApollo(CommentsHeader);
