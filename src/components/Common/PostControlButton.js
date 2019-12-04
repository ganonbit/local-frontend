import React from 'react';

import Like from 'components/Like';

export default function PostControlButton(props) {
  const { author, postId, comments, likes, toggle } = props;
  return (
    <div className='control-block-button post-control-button'>
      <a href='#1' className='btn btn-control likes'>
        <Like user={author} postId={postId} likes={likes} />
        <div className='ripple-container'></div>
      </a>

      <a href='#1' className='btn btn-control comments' onClick={toggle}>
        <img src='img/comments-icon.png' alt='' />
      </a>

      <a href='#1' className='btn btn-control share-link'>
        <img src='img/share-icon.png' alt='' />
      </a>
    </div>
  );
}
