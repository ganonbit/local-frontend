import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faShare } from '@fortawesome/free-solid-svg-icons';

import Like from 'components/Like';

const PostFooter = props => {
  const { author, postId, comments, likes, toggle } = props;
  return (
    <div className='post-additional-info inline-items'>
      <span className='post-add-icon inline-items'>
        <Like user={author} postId={postId} likes={likes} />
        <span>{likes.length}</span>
      </span>

      <div className='comments-shared'>
        <a href='#1' className='post-add-icon inline-items'>
          <FontAwesomeIcon icon={faComment} onClick={toggle} />

          <span>{comments.length}</span>
        </a>

        <a
          onClick={() => {
            alert('share');
          }}
          href='#1'
          className='post-add-icon inline-items'
        >
          <FontAwesomeIcon icon={faShare} />

          <span>{props.numShares}</span>
        </a>
      </div>
    </div>
  );
};

export default PostFooter;
