import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import { Mutation } from 'react-apollo';
import imageCompression from 'browser-image-compression';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { UPLOAD_PHOTO, EDIT_ACCOUNT, GET_USER_POSTS } from 'graphql/user';
import { withApollo } from 'react-apollo';
import { MAX_POST_IMAGE_SIZE } from 'constants/ImageSize';

const UploadProfileImage = props => {
  let { onHide, user, isCover, image, title, refetch, client } = props;

  const [values, setValues] = useState({
    imagePreview: image,
    image: '',
    error: '',
  });
  let { error } = values;
  const deleteProfileImage = async () => {
    try {
      await client.mutate({
        mutation: EDIT_ACCOUNT,
        variables: {
          id: user.id,
          input: {
            image: '',
            imagePublicId: '',
          },
        },
      });
    } catch (err) {
      //console.log(err);
    }
  };

  let { imagePreview } = values;
  let onSubmitHandler = (e, uploadUserPhoto) => {
    e.preventDefault();
    if (error) return;
    if (values.image)
      uploadUserPhoto().then(async ({ data }) => {
        refetch();
        onHide();
      });
    else {
      deleteProfileImage().then(async data => {
        await refetch();
        onHide();
      });
    }
  };

  let handleUploadImage = async e => {
    const imageFile = e.target.files[0];
    if (!imageFile) return;

    if (!imageFile.type.match('image.*')) {
      setValues({
        ...values,
        error: 'Please upload valid file extension (jpg, jpeg, bmp, gif, png)',
        imagePreview: URL.createObjectURL(imageFile),
      });
      return;
    }

    if (imageFile.size >= MAX_POST_IMAGE_SIZE) {
      setValues({
        ...values,
        error: `File size should be less then ${MAX_POST_IMAGE_SIZE /
          1000000}MB`,
      });
      return;
    }

    let imageCompressionOptions = {
      maxSizeMB: 10,
      maxWidthOrHeight: 250,
      useWebWorker: true,
    };

    const compressedFile = await imageCompression(
      imageFile,
      imageCompressionOptions
    );
    await setValues({
      ...values,
      image: compressedFile,
      imagePreview: URL.createObjectURL(compressedFile),
      error: '',
    });
  };
  let onDeletePhotoHandler = () => {
    setValues({
      ...values,
      imagePreview: '',
      image: '',
    });
  };
  return (
    <Mutation
      mutation={UPLOAD_PHOTO}
      variables={{
        input: {
          id: user.id,
          image: values.image,
          isCover: isCover,
          imagePublicId: user.imagePublicId,
        },
      }}
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
                          <LazyLoadImage
                            className='video-bnr'
                            src={
                              !imagePreview
                                ? 'https://res.cloudinary.com/hylian/image/upload/v1576220262/static/Image_from_iOS_1_bnaxnc.jpg'
                                : imagePreview
                            }
                            alt='images'
                          />
                          <button
                            type='button'
                            className='btn p-0 m-0'
                            onClick={() => {
                              onDeletePhotoHandler();
                            }}
                          >
                            x
                          </button>
                        </li>
                      </ul>
                    </div>
                    {error && (
                      <span className='text-center d-block text-danger mt-1'>
                        {error}
                      </span>
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

UploadProfileImage.propTypes = {
  onHide: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  isCover: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  refetch: PropTypes.func.isRequired,
  client: PropTypes.object.isRequired,
};

export default withApollo(UploadProfileImage);
