import React, { useState } from 'react';
import * as linkify from 'linkifyjs';
import Linkify from 'linkifyjs/react';
import hashtag from 'linkifyjs/plugins/hashtag';
import mention from 'linkifyjs/plugins/mention';

import linkDecorator from '../Common/linkDecorator';

import CommentsHeader from './CommentsHeader';
export default function Comments(props, isAuth) {
  const [numOfComments, setNumOfComments] = useState(2);
  hashtag(linkify);
  mention(linkify);
  return (
    <>
      <ul className='comments-list'>
        {props.post.comments
          ? props.post.comments
              .slice(0, numOfComments)
              .map((comment, index) => {
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
                      post={props.post}
                    />
                    <Linkify options={linkDecorator}>
                      <p className="comments-section">{comment.comment}</p>
                    </Linkify>
                  </li>
                );
              })
          : null}
        {numOfComments < props.post.comments.length ? (
          <div
            href
            className='more-comments'
            onClick={() => {
              setNumOfComments(numOfComments + 2);
            }}
          >
            View more comments <span>+</span>
          </div>
        ) : null}
      </ul>
    </>
  );
}
