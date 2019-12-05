import React from 'react';
import { useState, useEffect } from 'react'
import Preview from "../PostPreview";


export default function PostContent(props) {
  const { image, content, meta } = props;
  const rawContent = content;

  const fetchUrlFromContentPreview = async (rawContent) => {
    try {
      const response = await fetch(`/.netlify/functions/open-graph-preview?q=${rawContent}`)
      if (!response.ok) {
        throw new Error('Netlify network response was not ok.');
      }
      const urlFromContentPreview = await response.json()
      return urlFromContentPreview
    } catch (error) {
      console.log('There has been a problem with your fetch operation: ', error.message);
    }
  }
  const [urlFromContentPreview, setUrlFromContentPreview] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const result = await fetchUrlFromContentPreview(rawContent);
      setUrlFromContentPreview(result);
    }

    fetchData();
  }, []);

  if(!urlFromContentPreview || urlFromContentPreview.error !== null) {return rawContent}
  return (
    <div className='postContainer'>
      <p>{urlFromContentPreview.text}</p>
      {urlFromContentPreview.meta ? <Preview {...urlFromContentPreview.meta} /> : null}
      {!urlFromContentPreview.meta && image && (
        <div className='post-img'>
          <img className='postImage' alt='postImage' src={image} />
        </div>
      )}
    </div>
  );
}
