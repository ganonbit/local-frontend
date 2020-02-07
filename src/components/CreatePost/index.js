import React, { useState } from 'react';
import UploadImage from '../Modals/UploadImage';
import useModal from 'hooks/useModel';
import { useStore } from 'store';
import PostForm from './PostForm';
import imageCompression from 'browser-image-compression';

import { Mutation } from 'react-apollo';
import { GET_POSTS, CREATE_POST, GET_FOLLOWED_POSTS } from 'graphql/post';
import { GET_USER_POSTS } from 'graphql/user';
import { MAX_POST_IMAGE_SIZE } from 'constants/ImageSize';

import { BeatLoader } from 'react-spinners';

const CreatePost = props => {
  const [{ auth }] = useStore();
  let { isShowing, toggle, setIsShowing } = useModal();
  const [isError, setError] = useState(true);
  const [values, setValues] = useState({
    status: '',
    image: '',
    imagePreview: '',
  });
  const { status, image, imagePreview } = values;

  let handleStatusChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setError(false);
  };
  let handleSubmitForm = (e, createPost) => {
    e.preventDefault();
    createPost()
      .then(async ({ data }) => {
        setValues({
          ...values,
          status: '',
          image: '',
          imagePreview: '',
        });
        setIsShowing(false);
      })
      .catch(() => setError(true));
  };

  const handleImageUpload = async e => {
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
      maxWidthOrHeight: 500,
      useWebWorker: false,
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
    await setError(false);
  };
  const onImageDelete = () => {
    setValues({
      ...values,
      image: '',
      imagePreview: '',
    });
  };
  return (
    <Mutation
      mutation={CREATE_POST}
      variables={{
        input: {
          content: status,
          image: image,
          authorId: auth.user.id,
        },
      }}
      refetchQueries={() => [
        {
          query: GET_FOLLOWED_POSTS,
          variables: { userId: auth.user.id, skip: 0, limit: 15 },
        },
        {
          query: GET_USER_POSTS,
          variables: {
            id: auth.user.id,
            username: auth.user.username,
            skip: 0,
            limit: 15,
          },
        },
        { query: GET_POSTS, variables: { authUserId: auth.user.id } },
      ]}
    >
      {(createPost, { loading, error: apiError }) => {
        return (
          <div className='ui-block'>
            <div className='news-feed-form'>
              {
                <UploadImage
                  isShowing={isShowing}
                  hide={toggle}
                  handleImageUpload={handleImageUpload}
                  handleStatusChange={handleStatusChange}
                  handleSubmitForm={handleSubmitForm}
                  status={status}
                  imagePreview={imagePreview}
                  createPost={createPost}
                  auth={auth}
                  loading={loading}
                  apiError={
                    isError && apiError && apiError.graphQLErrors[0].message
                  }
                  onImageDelete={onImageDelete}
                />
              }
              <div className='tab-content' style={{ position: 'relative' }}>
                <BeatLoader
                  sizeUnit={'px'}
                  size={20}
                  color={'#009440'}
                  loading={loading}
                />
                <div
                  className='tab-pane active'
                  id='home-1'
                  role='tabpanel'
                  aria-expanded='true'
                >
                  <PostForm
                    status={status}
                    toggle={toggle}
                    handleStatusChange={handleStatusChange}
                    handleSubmitForm={handleSubmitForm}
                    createPost={createPost}
                    imagePreview={imagePreview}
                    apiError={
                      isError && apiError && apiError.graphQLErrors[0].message
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Mutation>
  );
};

export default CreatePost;
