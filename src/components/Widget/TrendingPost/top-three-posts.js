import * as React from 'react'
import { connectHits } from 'react-instantsearch-core'

class Hits extends React.Component {

  renderPostWithImage = (hit) => {
    if (!hit || !hit.image) { return null}
    return (
      <li>
        <h5 className="text-capitalize">{hit.author && hit.author.firstName} {hit.author && hit.author.lastName}</h5>
        <img
          className='video-bnr my-3'
          src={hit.image}
          alt='video'
        />
        <span className='chat-message-item'>{hit.numOfLikes} Likes {hit.numOfComments} Comments</span>
        <div className='overlay'></div>
      </li>
    )
  }

  renderPostWithoutImage = (hit) => {
    if (!hit || !hit.content || !hit.numOfLikes) { return null}
    return (
      <li className='inline-items' >
        <div className='notification-event'>
          <h5 className="text-capitalize">{hit.author && hit.author.firstName} {hit.author && hit.author.lastName}</h5>
          <span className='notification-friend text-dark my-3'>
            {hit.content}
          </span>
          <span className='chat-message-item'>{hit.numOfLikes} Likes {hit.numOfComments} Comments</span>
        </div>
      </li>
    )
  }

  render() {
    const { hits } = this.props
    return (


      <div className='ui-block'>
      <div className='ui-block-title ui-block-post'>
        <h6 className='title'>Top Posts</h6>
      </div>
      <div className='ui-block-content'>
        <ul className='widget w-friend-pages-added notification-list friend-requests'>
          {hits.slice(0, 4).map(hit => (
            <a href={`/${hit.author && hit.author.username}`}>
              {hit.image ? this.renderPostWithImage(hit) : this.renderPostWithoutImage(hit)}
            </a>
          ))}
        </ul>
      </div>
    </div>
    )
  }
}

const TopThreePosts = connectHits(Hits)

export default TopThreePosts
