import * as React from 'react'
import { connectInfiniteHits } from 'react-instantsearch-core'

class Hits extends React.Component {
  render() {
    const { hasMore, hits, refineNext } = this.props
    return (
      <div className="card card-body" style={{width: '900px'}}>
        <h2 className='text-primary'>Posts</h2>
        <div className="list-group overflow-auto" style={{maxHeight: '240px'}}>
          {hits.map(hit => (
            <a href={`/${hit.author && hit.author.username}`}>
              <div className="card border list-group-item list-group-item-action">
                <div className="card-body">
                  <h5 className="card-title text-capitalize">{hit.author && hit.author.firstName} {hit.author && hit.author.lastName}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">@{hit.author && hit.author.username}</h6>
                  <p className="card-text text-dark">{hit.content}</p>
                </div>
              </div>
            </a>
          ))}
          {hasMore &&
            <button className='btn btn-primary btn-small' onClick={refineNext} disabled={!hasMore}>
              Show more
            </button>}
        </div>
      </div>
    )
  }
}

const InfinitePosts = connectInfiniteHits(Hits)

export { InfinitePosts }
