import React, { useState, useEffect }  from 'react';
import Preview from "../PostPreview";
import Linkify from 'react-linkify';
import linkDecorator from '../Common/linkDecorator';


export default function PostContent(props) {
  const { image, content } = props;
  const rawContent = content;

  const fetchMetaFromContentPreview = async (rawContent) => {
    try {
      const response = await fetch(`/.netlify/functions/open-graph-preview?q=${rawContent}`)
      if (!response.ok) {
        throw new Error('Netlify network response was not ok.');
      }
      const metaFromContentPreview = await response.json()
      return metaFromContentPreview;
    } catch (error) {
      console.log('There has been a problem with your fetch operation: ', error.message);
    }
  }
  const [metaFromContentPreview, setMetaFromContentPreview] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await fetchMetaFromContentPreview(rawContent);
      setMetaFromContentPreview(result);
    }

    fetchData();
  }, [rawContent]);
  
  
  return (
    <div className='postContainer'>
      <Linkify componentDecorator={linkDecorator}>
        <p>{rawContent}</p>
      </Linkify>

      {metaFromContentPreview.meta && !image ? <Preview {...metaFromContentPreview.meta} /> : null}
      {!image ? null : 
        <div className='post-img'>
          <img className='postImage' alt='postImage' src={image} />
        </div>
      }
    </div>
  );
}
