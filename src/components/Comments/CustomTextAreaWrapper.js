import React, { Component } from 'react';

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Index } from 'react-instantsearch-dom';

import CustomTextArea from './CustomTextArea';

const { REACT_APP_ALGOLIA_APP_ID, REACT_APP_ALGOLIA_API_KEY } = process.env;

const searchClient = algoliasearch(
  REACT_APP_ALGOLIA_APP_ID,
  REACT_APP_ALGOLIA_API_KEY
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
