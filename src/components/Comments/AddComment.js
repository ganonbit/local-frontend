import React, { useState } from 'react';
import { generatePath } from 'react-router-dom';

import { CREATE_COMMENT } from '../../graphql/comment';
import { GET_POSTS, GET_FOLLOWED_POSTS } from '../../graphql/post';
import { Mutation, withApollo } from 'react-apollo';

import Avatar from '../Avatar';

import * as Routes from 'routes';

function AddComment({ authorId, author, postId, onCancel }) {
  const [commentContent, setCommentContent] = useState({
    comment: '',
    image: null,
    imagePublicId: null,
    author: authorId,
    postId: postId,
  });
  const onAddComment = (e, createComment) => {
    e.preventDefault();
    createComment.then(async ({ data }) => {},
    setCommentContent({ ...commentContent, comment: '', image: '' }));
  };
  const onCommentChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setCommentContent({ ...commentContent, [name]: value });
  };
  return (
    <Mutation
      mutation={CREATE_COMMENT}
      variables={{
        input: commentContent,
      }}
      refetchQueries={() => [
        {
          query: GET_POSTS,
          variables: { authUserId: authorId, skip: 0, limit: 15 },
        },
        {
          query: GET_FOLLOWED_POSTS,
          variables: { userId: authorId, skip: 0, limit: 15 },
        },
      ]}
    >
      {(createComment, { loading, error: apiError }) => {
        return (
          <form
            className='comment-form inline-items'
            onSubmit={e => onAddComment(e, createComment())}
          >
            <div className='post__author author vcard inline-items'>
              <a
                className='author-thumb'
                href={generatePath(Routes.USER_PROFILE, {
                  username: author.username,
                })}
              >
                <Avatar image={author.image} />
              </a>

              <div className='form-group with-icon-right '>
                <textarea
                  type='text'
                  className='form-control'
                  placeholder=''
                  name='comment'
                  value={commentContent.comment}
                  onChange={e => onCommentChange(e)}
                ></textarea>
                <div className='add-options-message'>
                  <a
                    href='#1'
                    className='options-message'
                    data-toggle='modal'
                    data-target='#update-header-photo'
                  >
                    {' '}
                  </a>
                </div>
              </div>
            </div>

            <button className='btn btn-md-2 btn-primary' type='post'>
              Post Comment
            </button>

            <button
              className='btn btn-md-2 btn-border-think c-grey btn-transparent custom-color'
              onClick={onCancel}
            >
              Cancel
            </button>
          </form>
        );
      }}
    </Mutation>
  );
}

export default withApollo(AddComment);
