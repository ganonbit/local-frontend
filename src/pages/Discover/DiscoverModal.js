import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

import Like from 'components/Like';
import SharePost from 'components/SharePost';

let DiscoverModal = ({ show, onHide, image, description, bio, post }) => {
  let red = 'var(--theme-color-pink)';
  return (
    <>
      <Modal
        show={show}
        onHide={() => onHide(false)}
        dialogClassName='modal-xl modal-dialog-content'
        aria-labelledby='example-custom-modal-styling-title'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-custom-modal-styling-title'>
            <h5>Title</h5>
            <span>@username</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-md-7'>
              <img
                src={image}
                className='stacklapopup-quadrant-image'
                alt='img'
              />
              <p className='mt-2'>{description}</p>
            </div>
            <div className='col-md-5'>
              <p>{bio}</p>
              <div className='post-likes'>
                <ul className='d-flex mb-0'>
                  <li className='mr-4 post-add-icon inline-items post-likes-btn'>
                    {post && (
                      <Like
                        postId={post.id}
                        user={post.author}
                        likes={post.likes}
                        post={post}
                        colored={red}
                      />
                    )}

                    {post && <label>{post.likes.length}</label>}
                  </li>
                  <li className='inline-items post-share'>
                    <SharePost
                      postId={post.id}
                      post={post}
                      // postSharer={postSharer}
                      // sharedPostId={sharedPostId}
                    />
                    <lable>share</lable>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

DiscoverModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  post: PropTypes.object.isRequired,
};
export default DiscoverModal;
