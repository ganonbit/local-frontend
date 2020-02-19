import React from 'react';
import PropTypes from 'prop-types';
import Like from 'components/Like';
import SharePost from 'components/SharePost';
import { LazyLoadImage } from 'react-lazy-load-image-component';
function PostControlButton({
  author,
  postId,
  likes,
  toggle,
  post,
  isAuth,
  userId,
  postSharer,
  sharedPostId,
  showAuthModal,
}) {
  return (
    <div className='control-block-button post-control-button'>
      {!isAuth ? (
        <a
          href='#1'
          onClick={e => {
            e.preventDefault();
            showAuthModal();
          }}
          className='btn btn-control likes'
        >
          <LazyLoadImage
            src='https://res.cloudinary.com/weare270b/image/upload/f_auto,q_auto/v1575849612/static/heart-icon_jd2hne.png'
            alt=''
          />
          <div className='ripple-container'></div>
        </a>
      ) : (
        <Like user={author} postId={postId} likes={likes} post={post} />
      )}
      {!isAuth ? (
        <a
          href='#1'
          onClick={e => {
            e.preventDefault();
            showAuthModal();
          }}
          className='btn btn-control likes'
        >
          <LazyLoadImage
            src='https://res.cloudinary.com/weare270b/image/upload/f_auto,q_auto/v1575849612/static/comments-icon_ffpa0l.png'
            alt=''
          />
          <div className='ripple-container'></div>
        </a>
      ) : (
        <a href className='btn btn-control comments' onClick={toggle}>
          <LazyLoadImage
            src='https://res.cloudinary.com/weare270b/image/upload/f_auto,q_auto/v1575849612/static/comments-icon_ffpa0l.png'
            alt=''
          />
        </a>
      )}

      {!isAuth ? (
        <a
          href='#1'
          onClick={e => {
            e.preventDefault();
            showAuthModal();
          }}
          className='btn btn-control likes'
        >
          <LazyLoadImage
            src='https://res.cloudinary.com/weare270b/image/upload/f_auto,q_auto/v1575849612/static/share-icon_rkyjac.png'
            alt=''
          />
          <div className='ripple-container'></div>
        </a>
      ) : (
        <SharePost
          postId={postId}
          post={post}
          postSharer={postSharer}
          sharedPostId={sharedPostId}
        />
      )}
    </div>
  );
}

PostControlButton.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  author: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  likes: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  showAuthModal: PropTypes.func.isRequired,
};

export default PostControlButton;
