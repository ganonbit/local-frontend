import React, { useState, useRef } from 'react';
import { generatePath } from 'react-router-dom';
import PropTypes from 'prop-types';

import CustomTextArea from './CustomTextAreaWrapper';

import { CREATE_COMMENT } from '../../graphql/comment';
import { GET_POST } from '../../graphql/post';
import { Mutation, withApollo } from 'react-apollo';

import { useNotifications } from 'hooks/useNotifications';

import { NotificationType } from 'constants/NotificationType';

import Avatar from '../Avatar';

import * as Routes from 'routes';

function AddComment({ authorId, author, post, onCancel, userId }) {
  const notification = useNotifications();
  const [isError, setError] = useState(true);
  let isAuthPost = authorId === userId;

  const [commentContent, setCommentContent] = useState({
    comment: '',
    image: null,
    imagePublicId: null,
    author: authorId,
    postId: post.id,
  });
  const onAddComment = (e, createComment) => {
    e.preventDefault();
    createComment
      .then(async ({ data }) => {
        !isAuthPost &&
          notification.create({
            user: post.author,
            postId: post.id,
            notificationType: NotificationType.COMMENT,
            notificationTypeId: data.createComment.id,
          });
      }, setCommentContent({ ...commentContent, comment: '', image: '' }))
      .catch(() => setError(true));
  };

  const onCommentChange = comment => {
    setCommentContent({ ...commentContent, comment: comment });
    setError(false);
  };
  const onCancelHandler = e => {
    e.preventDefault();
    setCommentContent({ ...commentContent, comment: '' });
  };
  return (
    <Mutation
      mutation={CREATE_COMMENT}
      variables={{
        input: commentContent,
      }}
      refetchQueries={() => [
        {
          query: GET_POST,
          variables: { id: post.id },
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
                {apiError && isError && (
                  <span className='text-center d-block text-danger mb-1'>
                    Comment is required
                  </span>
                )}
                <CustomTextArea
                  onCommentChange={e => onCommentChange(e)}
                  initialValue={commentContent.comment}
                />
                <div className='add-options-message'>
                  <a
                    href
                    onClick={e => {
                      e.preventDefault();
                    }}
                    className='options-message'
                    data-toggle='modal'
                    data-target='#update-header-photo'
                  ></a>
                </div>
              </div>
            </div>
            {commentContent.comment.length > 0 && (
              <div className='add-comment-buttons text-right d-flex justify-content-end align-center'>
                <button className='btn btn-md-2 btn-primary' type='post'>
                  Post Comment
                </button>
                <button
                  className='btn btn-md-2 btn-border-think c-grey btn-transparent custom-color cancel-btn mr-0'
                  onClick={onCancelHandler}
                >
                  Cancel
                </button>
              </div>
            )}
          </form>
        );
      }}
    </Mutation>
  );
}

AddComment.propTypes = {
  authorId: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  onCancel: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};

export default withApollo(AddComment);
