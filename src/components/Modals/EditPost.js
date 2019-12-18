import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Mutation } from 'react-apollo';
import { EDIT_POST, GET_FOLLOWED_POSTS, DELETE_IMAGE } from 'graphql/post';

import { MAX_POST_IMAGE_SIZE } from 'constants/ImageSize';
import Avatar from '../Avatar';
import { BeatLoader } from 'react-spinners';
import { css } from '@emotion/core';
const override = css`
  position: absolute;
  top: 50%;
  left: 40%;
`;
const EditPost = props => {
  let { postId, auth, content, image, onHide, imagePublicId } = props;

  const [values, setValues] = useState({
    postContent: content,
    imagePreview: image,
    error: '',
    id: postId,
    image: '',
  });

  let handleStatusChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  let { imagePreview, postContent, error, id } = values;

  let onSubmitHandler = (e, editPost) => {
    e.preventDefault();
    editPost().then(async ({ data }) => {
      onHide();
      
    });
  };

  let handleUploadImage = e => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.size >= MAX_POST_IMAGE_SIZE) {
      setValues({
        ...values,
        error: `File size should be less then ${MAX_POST_IMAGE_SIZE /
          1000000}MB`,
      });
      return;
    }
    setValues({
      ...values,
      error: '',
      image: e.target.files[0],
      imagePreview: URL.createObjectURL(e.target.files[0]),
    });
  };
  console.log(values)
  return (
    <Mutation
      mutation={EDIT_POST}
      variables={{
        id: id,
        input: {
          content: postContent,
          image: values.image,
          imagePublicId: imagePublicId,
        },
      }}
      refetchQueries={() => [
        {
          query: GET_FOLLOWED_POSTS,
          variables: { userId: auth.user.id, skip: 0, limit: 15 },
        },
      ]}
    >
      {(editPost, { loading, error: apiError }) => {
        return (
          <Modal
            {...props}
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'
            onHide={() => onHide()}
            centered
          >
            <Modal.Header closeButton>
              <h6 className='title'>Edit Post</h6>
            </Modal.Header>
            <Modal.Body>
              <div className='' role='document'>
                <div className='modal-content'>
                  <div className='modal-body'>
                    <form className='d-flex p-3'>
                      <div className='author-thumb'>
                        <Avatar image={auth.user && auth.user.image} />
                      </div>
                      <div className='form-group label-floating is-empty w-100 ml-3 mb-0'>
                        <BeatLoader
                          css={override}
                          sizeUnit={'px'}
                          size={20}
                          color={'#123abc'}
                          loading={loading}
                        />
                        <label className='control-label'>
                          Share what you are thinking here...
                        </label>
                        <textarea
                          className='form-control'
                          name='status'
                          value={postContent}
                          onChange={e => handleStatusChange(e)}
                        />
                      </div>
                    </form>

                    {imagePreview && (
                      <div className='thumbnail-gallery-items'>
                        <ul className='d-flex p-0 m-3 list-unstyled'>
                          <li>
                            <img
                              className='video-bnr'
                              src={imagePreview}
                              alt='images'
                            />
                            <button type='button' className='btn p-0 m-0'>
                              x
                            </button>
                          </li>
                        
                        </ul>
                      </div>
                    )}
                    <div className='upload-content'>
                      <ul className='d-flex p-3 m-0 list-unstyled justify-content-between align-items-center flex-wrap'>
                        <li>
                          <button type='button' className='btn px-3 py-2 m-0'>
                            <input
                              type='file'
                              name='image'
                              id='multi'
                              onChange={e => handleUploadImage(e)}
                            />
                            <svg
                              height='24'
                              viewBox='0 0 24 24'
                              width='24'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                className='heroicon-ui'
                                d='M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm16 8.59V6H4v6.59l4.3-4.3a1 1 0 0 1 1.4 0l5.3 5.3 2.3-2.3a1 1 0 0 1 1.4 0l1.3 1.3zm0 2.82l-2-2-2.3 2.3a1 1 0 0 1-1.4 0L9 10.4l-5 5V18h16v-2.59zM15 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2z'
                              />
                            </svg>
                            Photo
                          </button>
                        </li>
                        <li>
                          <button
                            type='button'
                            className='btn btn-saved px-3 py-2 m-0'
                            onClick={e => onSubmitHandler(e, editPost)}
                          >
                            Save
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        );
      }}
    </Mutation>
  );
};
export default EditPost;