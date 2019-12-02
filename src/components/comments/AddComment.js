import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CREATE_COMMENT } from '../../graphql/comment'
import { GET_FOLLOWED_POSTS } from '../../graphql/post'
import { Mutation } from 'react-apollo'

export default function AddComment({ authorId, postId, onCancle }) {
  const [commentContent, setCommentContent] = useState({
    comment: '',
    image: '',
    // imagePublicid: '',
    author: authorId,
    postId: postId
  })
  const onAddComment = (e, createComment) => {
    e.preventDefault()
    createComment.then(async ({ data }) => {},
    setCommentContent({ ...commentContent, comment: '', image: '' }))
  }
  const onCommentChange = e => {
    e.preventDefault()
    const { name, value } = e.target
    setCommentContent({ ...commentContent, [name]: value })
  }
  return (
    <Mutation
      mutation={CREATE_COMMENT}
      variables={{
        input: commentContent
      }}
      refetchQueries={() => [
        {
          query: GET_FOLLOWED_POSTS,
          variables: { userId: authorId, skip: 0, limit: 15 }
        }
      ]}>
      {(createComment, { loading, error: apiError }) => {
        return (
          <form
            className="comment-form inline-items"
            onSubmit={e => onAddComment(e, createComment())}>
            <div className="post__author author vcard inline-items">
              <img src="img/author-page.jpg" alt="author" />

              <div className="form-group with-icon-right ">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="comment"
                  value={commentContent.comment}
                  onChange={e => onCommentChange(e)}></textarea>
                <div className="add-options-message">
                  <a
                    href="#1"
                    className="options-message"
                    data-toggle="modal"
                    data-target="#update-header-photo">
                    {/* <svg className="olymp-camera-icon">
                                    <use xlink: href="svg-icons/sprites/icons.svg#olymp-camera-icon"></use>
											</svg> */}
                  </a>
                </div>
              </div>
            </div>

            <button className="btn btn-md-2 btn-primary" type="post">
              Post Comment
            </button>

            <button
              className="btn btn-md-2 btn-border-think c-grey btn-transparent custom-color"
              onClick={() => onCancle(false)}>
              Cancel
            </button>
          </form>
        )
      }}
    </Mutation>
  )
}
AddComment.propTypes = {
  authorId: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired
}
