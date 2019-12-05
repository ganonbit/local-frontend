import React from 'react';

import Preview from "../PostPreview";


export default function MainContent(props) {
  const { image, content } = props;
  const rawContent = content;

  const fetchPublication = rawContent => {
    return fetch(`/.netlify/functions/open-graph-preview?q=${rawContent}`)
      .then(response => {
        response.json().then(json => {
            const newContent = Object.entries(json).map(([key, value]) => [key, value]);
            console.log(newContent)
            console.log(newContent.meta)
            console.log(newContent.meta.ogTitle)
        })
      });
  }
  
  fetchPublication(rawContent);


  return (
    <div className='postContainer'>
      <p>{rawContent}</p>
     <Preview {...rawContent.meta} /> 
      {!rawContent.meta && image && (
        <div className='post-img'>
          <img className='postImage' alt='postImage' src={image} />
        </div>
      )}
    </div>
  );
}
