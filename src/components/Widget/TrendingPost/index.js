import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
import TopThreePosts from './top-three-posts'

const searchClient = algoliasearch(
  '***REMOVED***',
  '***REMOVED***'
);

export default class TrendingPost extends React.Component {

  render() {
    return (
      <InstantSearch
        indexName='production_avonation_posts_by_engagement_score'
        searchClient={searchClient}
      >
        <TopThreePosts />
      </InstantSearch>
    );
  }
}
