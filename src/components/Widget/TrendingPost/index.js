import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
import TopThreePosts from './top-three-posts';

const { REACT_APP_ALGOLIA_APP_ID, REACT_APP_ALGOLIA_API_KEY } = process.env;

const searchClient = algoliasearch(
  REACT_APP_ALGOLIA_APP_ID,
  REACT_APP_ALGOLIA_API_KEY
);

export default class TrendingPost extends React.Component {
  render() {
    return (
      <InstantSearch
        indexName='production_local_posts_by_engagement_score'
        searchClient={searchClient}
      >
        <TopThreePosts />
      </InstantSearch>
    );
  }
}
