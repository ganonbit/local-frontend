import React from 'react';

import Preview from "../PostPreview";


export default function MainContent(props) {
  const { image, content } = props;
  const rawContent = content;

  const fetchPublication = (rawContent) => {
    return fetch(`/.netlify/functions/open-graph-preview?q=${rawContent}`)
      .then(response => {
        response.json().then(parsedJson => {
          console.log('This is the parsed json', parsedJson);
          console.log(parsedJson.text);
        })
      });
  }
  
  fetchPublication(rawContent);

  return (
    <div className='postContainer'>
      <p>{rawContent.text}</p>
     <Preview {...rawContent.meta} /> 
      {!rawContent.meta && image && (
        <div className='post-img'>
          <img className='postImage' alt='postImage' src={image} />
        </div>
      )}
    </div>
  );
}
