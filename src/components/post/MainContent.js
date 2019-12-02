import React from 'react'

const MainContent = ({ content, image }) => {
  return (
    <div className="postContainer">
      {content && <p>{content}</p>}
      <div className="post-img">
        {image && <img className="postImage" alt="postImage" src={image} />}
      </div>
    </div>
  )
}
export default MainContent
