import React from 'react';

import Like from 'components/Like';

export default function PostControlButton(props) {
  const { author, postId, likes, toggle } = props;
  return (
    <div className='control-block-button post-control-button'>
      {!props.isAuth ? (
        <a href='#1' className='btn btn-control likes'>
          <img
            src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/heart-icon_jd2hne.png'
            alt=''
          />
          <div className='ripple-container'></div>
        </a>
      ) : (
        <Like user={author} postId={postId} likes={likes} />
      )}

      <a href='#1' className='btn btn-control comments' onClick={toggle}>
        <img
          src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/comments-icon_ffpa0l.png'
          alt=''
        />
      </a>

      <a href='#1' className='btn btn-control share-link'>
        <img
          src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/share-icon_rkyjac.png'
          alt=''
        />
      </a>
    </div>
  );
}
