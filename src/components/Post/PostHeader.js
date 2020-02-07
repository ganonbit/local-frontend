import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { generatePath } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Avatar from 'components/Avatar';
import moment from 'moment';
import { useStore } from 'store';
import { withApollo } from 'react-apollo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { GET_POSTS, GET_FOLLOWED_POSTS, DELETE_POST } from 'graphql/post';
import { GET_USER_POSTS } from 'graphql/user';

import EditPost from 'components/Modals/EditPost';

import {
  HOME_PAGE_POSTS_LIMIT,
  PROFILE_PAGE_POSTS_LIMIT,
} from 'constants/DataLimit';

import * as Routes from 'routes';

const PostHeader = props => {
  const [isShowing, setIsShowing] = useState(false);

  const {
    author,
    postId,
    client,
    createdAt,
    imagePublicId,
    isAuth,
    image,
    content,
    showAuthModal,
  } = props;

  const [{ auth }] = useStore();
  const isSelma = !auth.user ? null : auth.user.role === 'selma';
  const isOwner = !auth.user ? null : auth.user.id === author.id;
  const rawTime = parseInt(createdAt);
  const postDate = new Date(rawTime);
  const deletePost = async () => {
    try {
      await client.mutate({
        mutation: DELETE_POST,
        variables: { input: { id: postId, imagePublicId } },
        refetchQueries: () => [
          {
            query: GET_FOLLOWED_POSTS,
            variables: {
              userId: auth.user.id,
              skip: 0,
              limit: HOME_PAGE_POSTS_LIMIT,
            },
          },
          {
            query: GET_USER_POSTS,
            variables: {
              username: auth.user.username,
              skip: 0,
              limit: PROFILE_PAGE_POSTS_LIMIT,
            },
          },
          { query: GET_POSTS, variables: { authUserId: auth.user.id } },
        ],
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='post__author author vcard inline-items'>
      {isShowing && (
        <EditPost
          show={isShowing}
          onHide={() => setIsShowing(false)}
          content={content}
          image={image}
          auth={auth}
          postId={postId}
          imagePublicId={imagePublicId}
        />
      )}
      {isAuth ? (
        <Link
          to={generatePath(Routes.USER_PROFILE, {
            username: author.username,
          })}
        >
          <Avatar image={author.image} />
        </Link>
      ) : (
        <div
          className='img-auth-wrap'
          onClick={() => showAuthModal()}
          onKeyDown={() => showAuthModal()}
          tabIndex='0'
          role='button'
        >
          <Avatar image={author.image} />
        </div>
      )}

      <div className='author-date'>
        {isAuth ? (
          <Link
            className='h6 post__author-name fn'
            to={generatePath(Routes.USER_PROFILE, {
              username: author.username,
            })}
          >
            {author.firstName} {author.lastName}
          </Link>
        ) : (
          <>
            <b
              onClick={() => showAuthModal()}
              onKeyDown={() => showAuthModal()}
              tabIndex='0'
              role='button'
            >
              {author.firstName} {author.lastName}
            </b>
          </>
        )}
        <div className='post__date'>
          <time className='published' dateTime={postDate}>
            {moment(postDate, 'YYYYMMDDHHmms').fromNow()}
          </time>
        </div>
      </div>

      {isAuth ? (
        <div className='more'>
          <FontAwesomeIcon
            className='olymp-three-dots-icon'
            size='lg'
            color='black'
            icon={faEllipsisV}
            style={{ height: '12px' }}
          />

          <ul className='more-dropdown'>
            {(isAuth && isOwner) || (isAuth && isSelma) ? (
              <li>
                <Link
                  href
                  onClick={e => {
                    setIsShowing(true);
                  }}
                >
                  Edit Post
                </Link>
              </li>
            ) : null}
            {(isAuth && isOwner) || (isAuth && isSelma) ? (
              <li>
                <Link
                  href
                  onClick={e => {
                    e.preventDefault();
                    deletePost(e);
                  }}
                >
                  Delete Post
                </Link>
              </li>
            ) : null}
            <li>
              <Link
                to={generatePath(Routes.POST, {
                  id: postId,
                })}
              >
                Permalink
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

PostHeader.propTypes = {
  author: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  client: PropTypes.object.isRequired,
  createdAt: PropTypes.string.isRequired,
  imagePublicId: PropTypes.any,
  isAuth: PropTypes.bool.isRequired,
  image: PropTypes.any,
  content: PropTypes.string.isRequired,
  showAuthModal: PropTypes.func.isRequired,
};

export default withApollo(PostHeader);
