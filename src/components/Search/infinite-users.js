import * as React from 'react'
import { connectInfiniteHits } from 'react-instantsearch-core'

class Hits extends React.Component {
  render() {
    const { hasMore, hits, refineNext } = this.props
    return (
      <div className="card card-body" style={{width: '900px'}}>
        <h2 className='text-primary'>Users</h2>
        <div class="list-group overflow-auto" style={{maxHeight: '240px'}}>
          {hits.map(hit => (
            <a href={`/${hit.username}`}>
              <div class="card border list-group-item list-group-item-action">
                <div class="card-body">
                  <h5 class="card-title text-capitalize">{hit.firstName} {hit.lastName}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">@{hit.username}</h6>
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

const InfiniteUsers = connectInfiniteHits(Hits)

export { InfiniteUsers }
