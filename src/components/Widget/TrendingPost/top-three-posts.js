import * as React from 'react';
import { connectHits } from 'react-instantsearch-core';

class Hits extends React.Component {
  renderPostWithImage = (hit, count) => {
    if (!hit || !hit.image) {
      return null;
    }
    return (
      <li>
        <h5 className='text-capitalize text-success mb-2'>#{count}</h5>
        <br />
        <h5 className='text-capitalize'>
          {hit.author && hit.author.firstName}{' '}
          {hit.author && hit.author.lastName}
        </h5>
        <img className='video-bnr my-3' src={hit.image} alt='video' />
        <span className='chat-message-item'>
          {hit.numOfLikes} Likes {hit.numOfComments} Comments
        </span>
        <div className='overlay'></div>
      </li>
    );
  };

  renderPostWithoutImage = (hit, count) => {
    if (!hit || !hit.content) {
      return null;
    }
    return (
      <li className='inline-items'>
        <div className='notification-event'>
          <h5 className='text-capitalize text-success'>#{count}</h5>
          <h5 className='text-capitalize'>
            {hit.author && hit.author.firstName}{' '}
            {hit.author && hit.author.lastName}
          </h5>
          <span className='notification-friend text-dark my-3'>
            {hit.content}
          </span>
          <span className='chat-message-item'>
            {hit.numOfLikes} Likes {hit.numOfComments} Comments
          </span>
        </div>
      </li>
    );
  };

  render() {
    const { hits } = this.props;
    return (
      <div className='ui-block'>
        <div className='ui-block-title ui-block-post'>
          <h6 className='title'>Top 3 Posts</h6>
        </div>
        <div className='ui-block-content'>
          <ul className='widget w-friend-pages-added notification-list friend-requests'>
            {hits.slice(0, 3).map((hit, count) => (
              <a href={`/${hit.author && hit.author.username}`}>
                {hit.image
                  ? this.renderPostWithImage(hit, count + 1)
                  : this.renderPostWithoutImage(hit, count + 1)}
              </a>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const TopThreePosts = connectHits(Hits);

export default TopThreePosts;
