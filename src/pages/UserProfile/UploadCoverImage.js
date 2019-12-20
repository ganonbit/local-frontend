import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Mutation } from 'react-apollo';
import { GET_FOLLOWED_POSTS } from 'graphql/post';
import { UPLOAD_PHOTO } from 'graphql/user';
import { MAX_POST_IMAGE_SIZE } from 'constants/ImageSize';
import { BeatLoader } from 'react-spinners';
import { css } from '@emotion/core';
const override = css`
  position: absolute;
  top: 50%;
  left: 40%;
`;
const UploadCoverImage = props => {
  let { onHide, user, isCover, coverImage, title, refetch } = props;
  const [values, setValues] = useState({
    imagePreview: coverImage,
    coverImage: '',
  });

  let { imagePreview } = values;
  let onSubmitHandler = (e, uploadUserPhoto) => {
    e.preventDefault();
    uploadUserPhoto().then(async ({ data }) => {
      refetch();
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
      coverImage: e.target.files[0],
      imagePreview: URL.createObjectURL(e.target.files[0]),
    });
  };
  return (
    <Mutation
      mutation={UPLOAD_PHOTO}
      variables={{
        input: {
          id: user.id,
          coverImage: values.coverImage,
          isCover: isCover,
          coverImagePublicId: user.coverImagePublicId,
        },
      }}
      refetchQueries={() => [
        {
          query: GET_FOLLOWED_POSTS,
          variables: { userId: user.id, skip: 0, limit: 15 },
        },
      ]}
    >
      {(uploadUserPhoto, { loading, error: apiError }) => {
        return (
          <Modal
            {...props}
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'
            onHide={() => onHide()}
          >
            <Modal.Header closeButton>
              <h6 className='title'>{title}</h6>
            </Modal.Header>
            <Modal.Body>
              <div className='' role='document'>
                <div className='modal-content'>
                  <div className='modal-body'>
                    <div className='thumbnail-gallery-items'>
                      <ul className='d-flex p-0 m-3 list-unstyled justify-content-center'>
                        <li>
                          <img
                            className='video-bnr'
                            src={
                              !imagePreview
                                ? 'https://res.cloudinary.com/weare270b/image/upload/v1576214852/static/profile-bg_edozor.png'
                                : imagePreview
                            }
                            alt='images'
                          />
                        </li>
                      </ul>
                    </div>
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
                            onClick={e => onSubmitHandler(e, uploadUserPhoto)}
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
export default UploadCoverImage;
