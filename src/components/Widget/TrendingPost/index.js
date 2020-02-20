import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
import TopThreePosts from './top-three-posts';

const algoliaApp = process.env.REACT_APP_ALGOLIA_APP_ID;
const algoliaKey = process.env.REACT_APP_ALGOLIA_API_KEY;

const searchClient = algoliasearch(
  '70PRHCFRAW',
  '306f2d2320334ca5946827fe2821910d'
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
