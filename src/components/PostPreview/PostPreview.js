import React from 'react';
import Linkify from 'linkifyjs/react';

import linkDecorator from '../Common/linkDecorator';


const Preview = props => {
  console.log(props)
  return (
    <div className="post-preview">
      <a
        href={props.ogUrl ? `${props.ogUrl}` : '#'}
        target='_blank'
        rel='noopener noreferrer'
      >
        {props.ogImage && props.ogImage.url ? (
          <img src={props.ogImage.url} />
        ) : null}
      </a>
        <div><a href={props.ogUrl ? `${props.ogUrl}` : '#'}>{props.ogUrl}</a></div>
        <h6>{props.ogTitle}</h6>
        <p>{props.ogDescription}</p>
    </div>
  );
};

export default Preview;
