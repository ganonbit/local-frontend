import React from 'react';

import Preview from "../PostPreview";


export default function MainContent(props) {
  const { image, content, meta } = props;
  const rawContent = content;

  const fetchPublication = rawContent => {
    return fetch(`/.netlify/functions/open-graph-preview?q=${rawContent}`)
      .then(response => {
        response.json().then(json => {
            //return json as newContent so i can do below
        })
      });
  }
  
  fetchPublication(rawContent);


  return (
    <div className='postContainer'>
      <p>{newContent.text}</p>
      {newContent.meta ? <Preview {...newContent.meta} /> : null}
      {!newContent.meta && image && (
        <div className='post-img'>
          <img className='postImage' alt='postImage' src={image} />
        </div>
      )}
    </div>
  );
}
