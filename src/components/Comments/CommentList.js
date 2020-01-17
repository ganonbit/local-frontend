import React from 'react';
const CommentList = ({ comments }) => {
  const commentlist = [];
  if (comments.length > 2) {
    const map = new Map();
    for (const comment of comments) {
      if (!map.has(comment.author.id)) {
        map.set(comment.author.id, true); // set any value to Map
        commentlist.push({
          id: comment.id,
          author: `${comment.author.firstName} ${comment.author.lastName}`,
          comment: comment.comment,
        });
      }
    }

  }

  return (
    <>
      {/* {commentlist.length === 1 ? (
        <span>{commentlist[0].author} commented on this</span>
      ) : comments.length === 2 ? (
        <span>
          {commentlist[0].author} and {commentlist[1].author} commented on this
        </span>
      ) : (
        <span>
          {commentlist[0].author} and {commentlist[1].author} and other{' '}
          {commentlist.length - 2} commented on this
        </span>
      )} */}
    </>
  );
};

export default CommentList;
