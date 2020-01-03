import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Index } from 'react-instantsearch-dom';
import CustomSearchBar from './search-bar';
import ConnectedUsers from './users';
import ConnectedPosts from './posts';

import Notifications from '../../pages/Header/Notifications';
import ChatNotifications from '../../pages/Header/ChatNotifications';

import AuthorPage from '../../pages/Header/AuthorPage';

const searchClient = algoliasearch(
  '70PRHCFRAW',
  '4d23141a22d596a7d5e0c5c59f1d4037'
);

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hashTagQuery: null };
  }

  componentDidMount = () => {
    let params = new URL(document.location).searchParams;
    let hashTag = params.get('hash-tag-search');
    if (hashTag) {
      this.setState({ hashTagQuery: `#${hashTag}`, searchClass: 'search' });
    }
  };

  render() {
    return (
      <InstantSearch
        indexName='production_avonation_users'
        searchClient={searchClient}
      >
        <div className='container-fluid'>
          <div className='row d-flex justify-content-between'>
            <div className='search-bar w-search notification-list friend-requests'>
              <div className='form-group with-button'>
                <CustomSearchBar />

                <div className='search-result'>
                  <Index indexName='production_avonation_users'>
                    <ConnectedUsers
                      hashTagQuery={this.state.hashTagQuery}
                      clearHashTagQuery={this.clearHashTagQuery}
                    />
                  </Index>

                  <Index indexName='production_avonation_posts'>
                    <ConnectedPosts />
                  </Index>
                </div>
              </div>
            </div>

            <div className='control-block' style={{ height: 'auto' }}>
              <ChatNotifications />
              <Notifications refetch={this.props.refetch}/>
              <AuthorPage user={this.props.auth.user} />
            </div>
          </div>
        </div>
      </InstantSearch>
    );
  }

  clearHashTagQuery = () => {
    this.setState({ hashTagQuery: null });
  };
}
