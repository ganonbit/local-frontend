import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faShare } from '@fortawesome/free-solid-svg-icons';

import Like from 'components/Like';

const PostFooter = props => {
  const { author, postId, comments, likes, toggle, isAuth, userId } = props;
  return (
    <div className='post-additional-info inline-items'>
      <span className='post-add-icon inline-items'>
        {isAuth && (
          <Like user={author} postId={postId} likes={likes} userId={userId} />
        )}
        <span>{likes.length}</span>
      </span>

      <div className='comments-shared'>
        <a
          href
          onClick={e => {
            e.preventDefault();
          }}
          className='post-add-icon inline-items'
        >
          <FontAwesomeIcon
            icon={faComment}
            style={{ width: '1.6rem' }}
            onClick={toggle}
          />

          <span>{comments.length}</span>
        </a>
      </div>
    </div>
  );
};

export default PostFooter;
