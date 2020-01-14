import React from 'react';
import { Link } from 'react-router-dom';
import * as linkify from 'linkifyjs';
import Linkify from 'linkifyjs/react';
import hashtag from 'linkifyjs/plugins/hashtag';

import { connectHits } from 'react-instantsearch-core';

import { hashtagRegex } from 'utils';

import linkDecorator from 'components/Common/linkDecorator';

class Hits extends React.Component {
  render() {
    const { hits } = this.props;
    hashtag(linkify);
    return (
      <div className='ui-block'>
        <div className='ui-block-title topics'>
          <h6 className='title'>Trending Topics</h6>
          <Link to='#' className='more'></Link>
        </div>
        <ul className='widget w-friend-pages-added notification-list friend-requests'>
          {hits.map(hit => {
            return (
              hashtagRegex(hit.content)[0] && (
                <li key={hit.objectID} className='inline-items'>
                  <div className='notification-event'>
                    <Linkify options={linkDecorator}>
                      <b> {hashtagRegex(hit.content)[0]}</b>
                    </Linkify>
                    <span className='chat-message-item d-block'>
                      {hit.numOfLikes} likes
                    </span>
                  </div>
                </li>
              )
            );
          })}
        </ul>
      </div>
    );
  }
}

const TrendingHashtag = connectHits(Hits);

export default TrendingHashtag;
