import React from 'react';

import Like from 'components/Like';
import OverlayTriggers from '../Common/ToolTip';

export default function PostControlButton(props) {
  const { author, postId, likes, toggle, post, userId } = props;
  return (
    <div className='control-block-button post-control-button'>
      {!props.isAuth ? (
        <OverlayTriggers toolTipText='LIKE' placement='left'>
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
        </OverlayTriggers>
      ) : (
        <Like
          user={author}
          postId={postId}
          likes={likes}
          userId={userId}
          post={post}
        />
      )}
      <OverlayTriggers toolTipText='COMMENT' placement='left'>
        <a href className='btn btn-control comments' onClick={toggle}>
          <img
            src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/comments-icon_ffpa0l.png'
            alt=''
          />
        </a>
      </OverlayTriggers>

      <OverlayTriggers toolTipText='SHARE' placement='left'>
        <a
          href='#'
          onClick={e => {
            e.preventDefault();
          }}
          className='btn btn-control share-link'
        >
          <img
            src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/share-icon_rkyjac.png'
            alt=''
          />
        </a>
      </OverlayTriggers>
    </div>
  );
}
