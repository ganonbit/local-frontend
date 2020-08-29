import React, { Component } from 'react';

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Index } from 'react-instantsearch-dom';

import CustomTextArea from './CustomTextArea';

const algoliaApp = process.env.REACT_APP_ALGOLIA_APP_ID;
const algoliaKey = process.env.REACT_APP_ALGOLIA_API_KEY;

const searchClient = algoliasearch(
   algoliaApp,
   algoliaKey
);

class CustomTextAreaWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <InstantSearch
        indexName='production_local_users'
        searchClient={searchClient}
      >
        <CustomTextArea
          onCommentChange={this.props.onCommentChange}
          initialValue={this.props.initialValue}
        />
      </InstantSearch>
    );
  }
}

export default CustomTextAreaWrapper;
