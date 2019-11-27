import React, { useState } from 'react'
import Footer from './PostFooter'
import { useStore } from '../../store/index'
const PostForm = ({
  status,
  handleStatusChange,
  toggle,
  handleSubmitForm,
  createPost
}) => {
  const [{ auth }] = useStore()
  const [activeClass, setActiveClass] = useState('is-empty')
  let handleFocus = isActive => {
    switch (isActive) {
      case 'focus':
        !status
          ? setActiveClass('is-empty is-focused')
          : setActiveClass('is-focused')
        break
      case 'blur':
        !status ? setActiveClass('is-empty') : setActiveClass('')
        break
      default:
    }
  }
  return (
    <form onSubmit={e => handleSubmitForm(e, createPost)}>
      <div className="author-thumb">
        <img
          src={auth.user.coverImage}
          alt="author"
          style={{ height: '36px', width: '36px' }}
        />
      </div>
      <div
        className={`form-group with-icon label-floating ${activeClass}`}
        onFocus={() => handleFocus('focus')}
        onBlur={() => handleFocus('blur')}>
        <label className="control-label">
          Share what you are thinking here...
        </label>
        <textarea
          className="form-control"
          name="status"
          value={status}
          onChange={e => handleStatusChange(e)}
        />
      </div>
      <Footer toggle={toggle} />
    </form>
  )
}
export default PostForm
