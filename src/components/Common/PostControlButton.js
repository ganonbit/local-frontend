import React from 'react';
import PropTypes from 'prop-types';

import Like from 'components/Like';
import OverlayTriggers from '../Common/ToolTip';

function PostControlButton({ author, postId, likes, toggle, post, isAuth }) {
  return (
    <div className='control-block-button post-control-button'>
      {!isAuth ? (
          <a
            href='#1'
            onClick={e => {
              e.preventDefault();
            }}
            className='btn btn-control likes'
          >
            <img
              src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/heart-icon_jd2hne.png'
              alt=''
            />
            <div className='ripple-container'></div>
          </a>
      ) : (
        <Like user={author} postId={postId} likes={likes} post={post} />
      )}
        <a href className='btn btn-control comments' onClick={toggle}>
          <img
            src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/comments-icon_ffpa0l.png'
            alt=''
          />
        </a>

      <OverlayTriggers toolTipText='SHARE' placement='left'>
        <a href className='btn btn-control share-link'>
          <img
            src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/share-icon_rkyjac.png'
            alt=''
          />
        </a>
      </OverlayTriggers>
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
};

export default PostControlButton;
