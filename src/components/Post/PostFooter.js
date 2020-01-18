import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import OverlayTriggers from '../Common/ToolTip';

import Like from 'components/Like';
import CommentList from 'components/Comments/CommentList';
const PostFooter = props => {
  const {
    author,
    postId,
    comments,
    likes,
    toggle,
    isAuth,
    userId,
    post,
  } = props;
  return (
    <div className='post-additional-info inline-items'>
      <span className='post-add-icon inline-items'>
        {isAuth === true && (
          <Like
            user={author}
            postId={postId}
            likes={likes}
            userId={userId}
            post={post}
          />
        )}
        {isAuth === false && (
          <FontAwesomeIcon
            icon={faHeart}
            size='2x'
            color={'grey'}
            onClick={e => {
              e.preventDefault();
            }}
          />
        )}

        <span>{likes.length}</span>
      </span>

      <div className='comments-shared'>
        <OverlayTriggers toolTipText='COMMENT' placement='left'>
          <a
            href
            onClick={e => {
              e.preventDefault();
            }}
            className='post-add-icon inline-items'
          >
            <CommentList comments={comments} />
            <FontAwesomeIcon
              icon={faComment}
              style={{ width: '1.6rem' }}
              onClick={toggle}
            />
          </a>
        </OverlayTriggers>
      </div>
    </div>
  );
};

export default PostFooter;
