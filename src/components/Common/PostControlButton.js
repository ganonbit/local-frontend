import React from 'react'

export default function PostControlButton() {
  return (
    <div className="control-block-button post-control-button">
      <a href="#1" className="btn btn-control likes">
        <img src="img/heart-icon.png" alt="" />
        <div className="ripple-container"></div>
      </a>

      <a href="#1" className="btn btn-control likes">
        <img src="img/heart-icon.png" alt="" />
        <div className="ripple-container"></div>
      </a>

      <a href="#1" className="btn btn-control ratings">
        <img src="img/star-icon2.png" alt="" />
      </a>

      <a href="#1" className="btn btn-control share-link">
        <img src="img/share-icon.png" alt="" />
      </a>
      <a href="#1" className="btn btn-control comments">
        <img src="img/comments-icon.png" alt="" />
      </a>
    </div>
  )
}
