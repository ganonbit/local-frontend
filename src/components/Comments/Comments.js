import React, { useState } from 'react';
import PropTypes from 'prop-types';

import * as linkify from 'linkifyjs';

import Linkify from 'linkifyjs/react';
import hashtag from 'linkifyjs/plugins/hashtag';
import mention from 'linkifyjs/plugins/mention';

import linkDecorator from '../Common/linkDecorator';

import CommentsHeader from './CommentsHeader';
import EditComment from './EditComment';
function Comments({ post, isAuth }) {
  const [numOfComments, setNumOfComments] = useState(2);

  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isIndex, setIndex] = useState(0);

  hashtag(linkify);
  mention(linkify);

  let editCommentHandler = index => {
    setIsOpenEdit(true);
    setIndex(index);
  };

  let onClose = () => {
    setIsOpenEdit(isOpenEdit => !isOpenEdit);
  };
  return (
    <>
      <ul className='comments-list'>
        {post.comments
          ? post.comments.slice(0, numOfComments).map((comment, index) => {
              if (!comment.author) {
                return null;
              }
              return (
                <li key={index} className='comment-item'>
                  <CommentsHeader
                    author={comment.author}
                    createdAt={comment.createdAt}
                    commentId={comment.id}
                    isAuth={isAuth}
                    post={post}
                    index={index}
                    editCommentHandler={editCommentHandler}
                  />
                  {!(isOpenEdit && isIndex === index) && (
                    <Linkify options={linkDecorator}>
                      <p className='comments-section'>{comment.comment}</p>
                    </Linkify>
                  )}
                  {isOpenEdit && isIndex === index && (
                    <EditComment
                      comment={comment}
                      onClose={onClose}
                      postId={post.id}
                    />
                  )}
                </li>
              );
            })
          : null}
        {numOfComments < post.comments.length ? (
          <div
            className='more-comments'
            onClick={() => setNumOfComments(numOfComments + 2)}
            onKeyPress={() => setNumOfComments(numOfComments + 2)}
            role='button'
            tabIndex='0'
          >
            View more comments <span>+</span>
          </div>
        ) : null}
      </ul>
    </>
  );
}

Comments.propTypes = {
  post: PropTypes.object.isRequired,
  isAuth: PropTypes.bool.isRequired,
};

export default Comments;
