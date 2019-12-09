import React, { useState } from 'react';
import Linkify from 'react-linkify';
import linkDecorator from '../Common/linkDecorator';


import CommentsHeader from './CommentsHeader';
export default function Comments(props, isAuth) {
  const [numOfComments, setNumOfComments] = useState(2);
  return (
    <>
      <ul className='comments-list'>
        {props.comments
          ? props.comments.slice(0, numOfComments).map((comment, index) => {
              return (
                <li key={index} className='comment-item'>
                  <CommentsHeader
                    author={comment.author}
                    createdAt={comment.createdAt}
                    commentId={comment.id}
                    isAuth={isAuth}
                  />
                  <Linkify componentDecorator={linkDecorator}>
                    <p>{comment.comment}</p>
                  </Linkify>
                </li>
              );
            })
          : null}
        {numOfComments < props.comments.length ? (
          <div
            href='#1'
            className='more-comments more-comments'
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
