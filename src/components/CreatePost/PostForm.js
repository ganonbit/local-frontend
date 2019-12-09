import React, { useState } from 'react';
import { generatePath } from 'react-router-dom';

import Footer from './PostFooter';
import Avatar from '../Avatar';

import { useStore } from '../../store/index';

import * as Routes from 'routes';

const PostForm = ({
  status,
  handleStatusChange,
  toggle,
  handleSubmitForm,
  createPost,
  imagePreview,
}) => {
  const [{ auth }] = useStore();
  const [activeClass, setActiveClass] = useState('is-empty');
  let handleFocus = isActive => {
    switch (isActive) {
      case 'focus':
        !status
          ? setActiveClass('is-empty is-focused')
          : setActiveClass('is-focused');
        break;
      case 'blur':
        !status ? setActiveClass('is-empty') : setActiveClass('');
        break;
      default:
    }
  };
  return (
    <form onSubmit={e => handleSubmitForm(e, createPost)}>
      <a
        className='author-thumb'
        href={generatePath(Routes.USER_PROFILE, {
          username: auth.user.username,
        })}
      >
        <Avatar image={auth.user.image} />
      </a>
      <div
        className={`form-group with-icon label-floating ${activeClass}`}
        onFocus={() => handleFocus('focus')}
        onBlur={() => handleFocus('blur')}
      >
        <label className='control-label'>
          Share what you are thinking here...
        </label>
        <textarea
          className='form-control'
          name='status'
          value={status}
          onChange={e => handleStatusChange(e)}
        />
      </div>
      <Footer toggle={toggle} imagePreview={imagePreview} />
    </form>
  );
};
export default PostForm;
