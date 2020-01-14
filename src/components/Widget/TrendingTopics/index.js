import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
import TrendingHashtag from './TrendingHashtag';

const searchClient = algoliasearch(
  '***REMOVED***',
  '***REMOVED***'
);

export default class TrendingTopics extends React.Component {
  render() {
    return (
      <InstantSearch
        indexName='production_avonation_posts_by_engagement_score'
        searchClient={searchClient}
      >
        <TrendingHashtag />
      </InstantSearch>
    );
  }
}
