import React, { useState } from 'react'

import CommentsHeader from './CommentsHeader'
import CommentsFooter from './CommentsFooter'
export default function Comments(props) {
  const [numOfComments, setNumOfComments] = useState(2)
  return (
    <>
      <ul className="comments-list">
        {props.comments
          ? props.comments.slice(0, numOfComments).map(comment => {
              return (
                <li key={comment} className="comment-item">
                  <CommentsHeader author={comment.author} />
                  <p>{comment.comment}</p>
                  <CommentsFooter />
                </li>
              )
            })
          : null}
        {numOfComments < props.comments.length ? (
          <div
            href="#1"
            className="more-comments more-comments"
            onClick={() => {
              setNumOfComments(numOfComments + 2)
            }}>
            View more comments <span>+</span>
          </div>
        ) : null}
      </ul>
    </>
  )
}
