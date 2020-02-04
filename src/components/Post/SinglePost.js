import React, { useState } from 'react';
import { generatePath } from 'react-router-dom';
import PostControlButton from '../Common/PostControlButton';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import PostContent from './PostContent';
import Comments from 'components/Comments/Comments';
import AddComment from 'components/Comments/AddComment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';

import { useStore } from 'store';
import * as Routes from 'routes';

import AuthConfirmation from 'components/Modals/AuthConfirmation';

const SinglePost = ({ post, isAuth }) => {
  const [{ auth }] = useStore();

  const [show, setShow] = useState(false);

  let onHide = () => {
    setShow(false);
  };

  let showAuthModal = () => {
    setShow(true);
  };

  const [isCommentOpen, setCommentOpen] = useState(true);
  const toggleComment = () => setCommentOpen(!isCommentOpen);
  const articleClass = 'hentry post';
  let sharedPost = false;

  if (!post) {
    return null;
  }
  if (post.post) {
    sharedPost = true;
  }
  if (!sharedPost) {
    return renderPost(
      sharedPost,
      post,
      isAuth,
      auth,
      isCommentOpen,
      toggleComment,
      articleClass,
      show,
      onHide,
      showAuthModal
    );
  } else if (sharedPost) {
    return renderPost(
      sharedPost,
      post,
      isAuth,
      auth,
      isCommentOpen,
      toggleComment,
      articleClass
    );
  } else {
    return null;
  }
};

const renderPost = (
  isSharedPost,
  post,
  isAuth,
  auth,
  isCommentOpen,
  toggleComment,
  articleClass,
  show,
  onHide,
  showAuthModal
) => {
  let postSharer,
    sharedPostId = null;
  if (isSharedPost) {
    sharedPostId = post.id;
    postSharer = post.user;
    post = post.post;
  }

  return (
    <div key={post.id} className='ui-block'>
      <AuthConfirmation show={show} onHide={onHide} />;
      {isSharedPost && renderSharedPostText(auth.user, postSharer)}
      <article className={articleClass}>
        <PostHeader
          author={post.author}
          createdAt={post.createdAt}
          postId={post.id}
          isAuth={isAuth}
          content={post.content}
          image={post.image}
          imagePublicId={post.imagePublicId}
          showAuthModal={showAuthModal}
        />
        <PostContent content={post.content} image={post.image} />
        <PostFooter
          toggle={toggleComment}
          comments={post.comments}
          author={post.author}
          postId={post.id}
          likes={post.likes}
          isAuth={isAuth}
          post={post}
          showAuthModal={showAuthModal}
        />
        <PostControlButton
          toggle={toggleComment}
          comments={post.comments}
          author={post.author}
          postId={post.id}
          likes={post.likes}
          isAuth={isAuth}
          post={post}
          postSharer={postSharer}
          sharedPostId={sharedPostId}
          showAuthModal={showAuthModal}
        />
      </article>
      {isAuth && isCommentOpen && <Comments post={post} isAuth={isAuth} />}
      {isAuth && (
        <AddComment
          authorId={auth.user.id}
          userId={post.author.id}
          author={auth.user}
          postId={post.id}
          onCancel={toggleComment}
          user={post.author}
          post={post}
        />
      )}
    </div>
  );
};

const renderSharedPostText = (user, postSharer) => {
  const sharerDisplayName =
    user.id === postSharer.id ? 'You' : postSharer.username;
  return (
    <div className='shared-post'>
      <FontAwesomeIcon
        icon={faRetweet}
        size='lg'
        color={'green'}
        onClick={e => {
          e.preventDefault();
        }}
      />
      <span className='ml-2 font-weight-light font-italic'>
        <a
          href={generatePath(Routes.USER_PROFILE, {
            username: postSharer.username,
          })}
        >
          {sharerDisplayName}
        </a>{' '}
        shared
      </span>
    </div>
  );
};

export default SinglePost;
