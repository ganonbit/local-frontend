import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Index } from 'react-instantsearch-dom';
import CustomSearchBar from './search-bar';
import ConnectedUsers from './users'
import ConnectedPosts from './posts'

const searchClient = algoliasearch(
  '70PRHCFRAW',
  '4d23141a22d596a7d5e0c5c59f1d4037'
);

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hashTagQuery: null }
  }

  componentDidMount = () => {
    let params = (new URL(document.location)).searchParams;
    let hashTag = params.get("hash-tag-search");
    this.setState({hashTagQuery: `#${hashTag}`})
  }

  render () {
    return (
      <InstantSearch
        indexName="production_avonation_users"
        searchClient={searchClient}
      >
        <div className="container-fluid">
          <div className="row d-flex justify-content-between">
            <CustomSearchBar />
          </div>
          <div className="row d-flex justify-content-center" style={{zIndex: '1', position: 'absolute'}}>
            <div class="col-md-6 offset-md-3">
              <Index indexName="production_avonation_users">
                <ConnectedUsers hashTagQuery={this.state.hashTagQuery} clearHashTagQuery={this.clearHashTagQuery} />
              </Index>
    
              <Index indexName="production_avonation_posts">
                <ConnectedPosts />
              </Index>
            </div>
          </div>
        </div>
      </InstantSearch>
    )
  }

  clearHashTagQuery = () => {
    this.setState({hashTagQuery: null})
  }
}
