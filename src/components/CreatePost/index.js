import React, { useState } from 'react';
import UploadImage from '../Modals/NewsFeed/UploadImage';
import useModal from 'hooks/useModel';
import { useStore } from 'store';
import PostForm from './PostForm';

import { Mutation } from 'react-apollo';
import { CREATE_POST, GET_FOLLOWED_POSTS } from 'graphql/post';
import { GET_USER_POSTS } from 'graphql/user';

import { css } from '@emotion/core';
import { BeatLoader } from 'react-spinners';

const override = css`
  position: absolute;
  top: 50%;
  left: 40%;
`;

const CreatePost = props => {
  const [{ auth }] = useStore();
  let { isShowing, toggle, setIsShowing } = useModal();
  // const [isOpen, setIsOpen] = useState(false);
  const [postContent, setPostContent] = useState({
    status: '',
    image: '',
    imagePreview: '',
  });
  const { status, image, imagePreview } = postContent;

  // let toggleModel = () => {
  //   setIsOpen(!isOpen);
  // };

  let handleStatusChange = e => {
    const { name, value } = e.target;
    setPostContent({ ...postContent, [name]: value });
  };
  let handleSubmitForm = (e, createPost) => {
    e.preventDefault();
    createPost().then(async ({ data }) => {
      setPostContent({
        ...postContent,
        status: '',
        image: '',
        imagePreview: '',
      });
      setIsShowing(false);
    });
  };

  const handleImageUpload = e => {
    setPostContent({
      ...postContent,
      image: e.target.files[0],
      imagePreview: URL.createObjectURL(e.target.files[0]),
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
                  override={override}
                  loading={loading}
                />
              }
              {/* {<ChooseImage isShowing={isOpen} hide={toggleModel} />} */}

              <div className='tab-content' style={{ position: 'relative' }}>
                <BeatLoader
                  css={override}
                  sizeUnit={'px'}
                  size={20}
                  color={'#123abc'}
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
