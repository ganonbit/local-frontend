import React from 'react';

import Like from 'components/Like';

export default function PostControlButton() {
  return (
    <div className='control-block-button post-control-button'>
      <a href='#1' className='btn btn-control share-link'>
        <img src='img/share-icon.png' alt='' />
      </a>
      <a href='#1' className='btn btn-control comments'>
        <img src='img/comments-icon.png' alt='' />
      </a>
    </div>
  );
}