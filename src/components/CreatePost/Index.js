import React, { useState } from 'react';
import UploadImage from '../Modals/NewsFeed/UploadImage';
import ChooseImage from '../Modals/NewsFeed/ChooseImage';
import useModal from '../../hooks/useModel';
import { useStore } from '../../store/index';
import PostForm from './PostForm';

import { Mutation } from 'react-apollo';
import { CREATE_POST } from '../../graphql/post';

import { css } from '@emotion/core';
import { BeatLoader } from 'react-spinners';

const override = css`
  position: absolute;
  top: 50%;
  left: 40%;
`;

export const CreatePost = props => {
  const [{ auth }] = useStore();
  let { isShowing, toggle } = useModal();
  const [isOpen, setIsOpen] = useState(false);
  const [postContent, setPostContent] = useState({
    status: '',
    image: '',
  });
  const { status, image } = postContent;

  let toggleModel = () => {
    setIsOpen(!isOpen);
  };

  let handleStatusChange = e => {
    const { name, value } = e.target;
    setPostContent({ ...postContent, [name]: value });
  };
  let handleSubmitForm = (e, createPost) => {
    e.preventDefault();
    createPost().then(async ({ data }) => {
      setPostContent({ ...postContent, status: '', image: '' });
    });
  };

  const handleImageUpload = e => {
    setPostContent({ ...postContent, image: e.target.files[0] });
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
    >
      {(createPost, { loading, error: apiError }) => {
        return (
          <div className='ui-block'>
            <div className='news-feed-form'>
              {
                <UploadImage
                  isShowing={isShowing}
                  hide={toggle}
                  toggleModel={toggleModel}
                  handleImageUpload={handleImageUpload}
                />
              }
              {<ChooseImage isShowing={isOpen} hide={toggleModel} />}

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
