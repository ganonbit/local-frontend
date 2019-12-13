import * as React from 'react'
import {
  connectStateResults,
} from 'react-instantsearch-core'

import { InfiniteUsers } from './infinite-users'

class Users extends React.Component {
  render() {
    const { searchResults, searchState, hashTagQuery } = this.props
    const hasResults = searchResults && searchResults.nbHits !== 0;

    if (!hasResults) {
      return (
        <div className="card card-body" style={{width: '900px'}}>
          <h2 className='text-primary'>Users</h2>
          <div class="list-group overflow-auto" style={{maxHeight: '240px'}}>
            No Users Match Your Search...
          </div>
        </div>
      )
    } else if (searchState && searchState.query) {
      if (hashTagQuery) {this.props.clearHashTagQuery()}
      return <InfiniteUsers />
    } else if (hashTagQuery) {
      searchState.query = hashTagQuery
      return <InfiniteUsers />
    } else {
      return null
    }
  }
}

const ConnectedUsers = connectStateResults(Users)

export default ConnectedUsers
