import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { EDIT_COMMENT } from 'graphql/comment';
import { GET_POST } from 'graphql/post';
import { Mutation, withApollo } from 'react-apollo';

let EditComment = ({ comment, onClose, postId }) => {
  const [commentContent, setCommentContent] = useState({
    comment: comment.comment,
    author: comment.author.id,
    postId: postId,
  });
  const [error, setError] = useState('');

  const onEditComment = (e, editComment) => {
    if (commentContent.comment.length === 0) {
      e.preventDefault();
      setError('comment is required');
      return;
    }
    e.preventDefault();
    editComment().then(async ({ data }) => {},
    setCommentContent({ ...commentContent }));
    onClose();
    setError('');
  };
  const onCommentChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setCommentContent({ ...commentContent, [name]: value });
    setError('');
  };
  return (
    <Mutation
      mutation={EDIT_COMMENT}
      variables={{
        input: commentContent,
        id: comment.id,
      }}
      refetchQueries={() => [
        {
          query: GET_POST,
          variables: { id: postId },
        },
      ]}
    >
      {(editComment, { loading, error: apiError }) => {
        return (
          <form
            className='comment-form inline-items pt-2'
            onSubmit={e => onEditComment(e, editComment)}
          >
            <div className='post__author author vcard inline-items'>
              <div className='form-group with-icon-right '>
                <textarea
                  type='text'
                  className='form-control'
                  placeholder=''
                  name='comment'
                  value={commentContent.comment}
                  onChange={e => onCommentChange(e)}
                ></textarea>
                <span className='d-block text-danger mt-1'> {error}</span>
              </div>
            </div>
            <div className='add-comment-buttons text-right'>
              <button className='btn btn-md-2 btn-primary' type='post'>
                Post Comment
              </button>
              <button
                className='btn btn-md-2 btn-border-think c-grey btn-transparent custom-color cancel-btn mr-0'
                onClick={() => onClose()}
              >
                Cancel
              </button>
            </div>
          </form>
        );
      }}
    </Mutation>
  );
};

EditComment.propTypes = {
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default withApollo(EditComment);
