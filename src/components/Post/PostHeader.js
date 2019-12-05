import React from 'react';
import { withApollo } from 'react-apollo';
import { generatePath } from 'react-router-dom';

import Avatar from 'components/Avatar';
import moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { GET_FOLLOWED_POSTS, DELETE_POST } from 'graphql/post';
import { GET_AUTH_USER } from 'graphql/user';

import * as Routes from 'routes';

const PostHeader = props => {
  const { author, postId, client, createdAt, user, isAuth } = props;
  const rawTime = parseInt(createdAt);
  const postDate = new Date(rawTime);
  const deletePost = async () => {
    try {
      await client.mutate({
        mutation: DELETE_POST,
        variables: { input: { id: postId } },
        refetchQueries: () => [
          {
            query: GET_FOLLOWED_POSTS,
            variables: {
              userId: user.id,
              skip: 0,
            },
          },
          {
            query: GET_AUTH_USER,
            options: { fetchPolicy: 'cache-and-network' },
          },
        ],
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
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
          className='h6 post__author-name fn'
          href={generatePath(Routes.USER_PROFILE, {
            username: author.username,
          })}
        >
          {author.firstName} {author.lastName}
        </a>
        <div className='post__date'>
          <time className='published' dateTime={postDate}>
            {moment(postDate, 'YYYYMMDDHHmms').fromNow()}
          </time>
        </div>
      </div>

      <div className='more'>
        {isAuth && (
          <FontAwesomeIcon
            className='olymp-three-dots-icon'
            size='lg'
            color='black'
            icon={faEllipsisV}
            style={{ height: '12px' }}
          />
        )}
        <ul className='more-dropdown'>
          {postId && (
            <li>
              <a href='#2'>Edit Post</a>
            </li>
          )}
          {postId && (
            <li>
              <a href='#2' onClick={e => deletePost(e)}>
                Delete Post
              </a>
            </li>
          )}
          <li>
            <a href='#2'>Turn Off Notifications</a>
          </li>
          <li>
            <a href='#2'>Select as Featured</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default withApollo(PostHeader);
